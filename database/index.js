const mongoose = require('mongoose');
const fs = require('fs');
const faker = require('faker');
const Schema = mongoose.schema; // added this line
mongoose.connect('mongodb://localhost/fetcher');

let shopsAvalAtArr = ['COSTCO', 'Wallmart', 'Target', 'FRYs Electronics', 'AdoramaCamera'];



let generateIdFunc = function () {
  return Math.floor(Math.random() * Math.floor(5000));  
};

let generatePriceFunc = function () {
   var a =  Math.floor(Math.random() * Math.floor(5000));
  return faker.commerce.price(.10,a,2,"$");
}; 

let generateDeliveryCostFunc = function () {
  return 'Free delivery'; 
};

let generateRandomDate = function (start, end) {
  for (var i =0 ; i < 100; i++) {
    var dateNew = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return dateNew;
  }
};   

let generateDescFunc = function () {
  return (faker.commerce.productName());
};

let generateRatingNum = function() {
  return Math.floor(Math.random() * Math.floor(1000));
};

let generateShopSelect = function () {
  var max = shopsAvalAtArr.length
  var indexNum = Math.floor(Math.random(0) * Math.floor(max));
  return shopsAvalAtArr[indexNum];
}

var imgPathArr = [];
let generateImagePath = function () {
  for (var i = 0; i < 90; i++) {
     // var img_var = "hrsf99" + "\/" + "expressal-similar-Items-service" + "\/" + "images" + "\/" + "image-[" + i + "].png"; 
     var img_var =   "\/" + "images" + "\/" + "image-[" + i + "].png"; 
     imgPathArr.push(img_var);
  }
     return imgPathArr;
}
generateImagePath();   
 
let itemList = [];

let populateData = function () {
  for (var i =0 ; i < 100; i++) {
    var item = {
      id: generateIdFunc(),
      price: generatePriceFunc(),
      deliveryCost: generateDeliveryCostFunc(),
      dateOfDelivery: generateRandomDate(new Date(2012, 0, 1), new Date()),
      desc: generateDescFunc(),
      rating: generateRatingNum(),
      shopsAvalAt: generateShopSelect(),
      imgPath: imgPathArr[i]
    }
    itemList.push(item);
  }
}
populateData();

let prodSchema = mongoose.Schema({ 
  id : Number,
  price: String,
  deliveryCost: String,
  dateOfDelivery: String,
  desc: String,
  rating: Number,
  shopsAvalAt: String,
  img: { data: Buffer, contentType: String }
  // img: String
});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('we are connected!');
});

let Prod = mongoose.model('Prod', prodSchema);

let saveList = (itemList, cb) => {
   
  for (let i = 0; i < itemList.length; i++) {
    const newProd = new Prod ({
    id: itemList[i].id,
    price: itemList[i].price,
    deliveryCost: itemList[i].deliveryCost,
    dateOfDelivery: itemList[i].dateOfDelivery,
    desc: itemList[i].desc,
    rating: itemList[i].rating,
    shopsAvalAt: itemList[i].shopsAvalAt,
    img: {data: fs.readFileSync(itemList[i].imgPath),
          contentType : 'image/png' }
    });

  }

  newProd.save(cb);
} 



saveList(itemList,  (err, product) => {
  if (err) {
    console.log(err); 
  } else {
    console.log(product);
  }
});



module.exports.saveList = saveList;
module.exports.itemList = itemList;





////////////////////////////////////
/*

var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imgPath = '/path/yourimage.png';

mongoose.connect('localhost', 'testing_storeImg');

var schema = new Schema({
    img: { data: Buffer, contentType: String }
});

var A = mongoose.model('A', schema);

mongoose.connection.on('open', function () {
  console.error('mongo is open');

  A.remove(function (err) {
    if (err) throw err;

    console.error('removed old docs');

    // store an img in binary in mongo
    var a = new A;
    a.img.data = fs.readFileSync(imgPath);
    a.img.contentType = 'image/png';
    a.save(function (err, a) {
      if (err) throw err;

      console.error('saved img to mongo');

      // start a demo server
      var server = express.createServer();
      server.get('/', function (req, res, next) {
        A.findById(a, function (err, doc) {
          if (err) return next(err);
          res.contentType(doc.img.contentType);
          res.send(doc.img.data);
        });
      });

      server.on('close', function () {
        console.error('dropping db');
        mongoose.connection.db.dropDatabase(function () {
          console.error('closing db connection');
          mongoose.connection.close();
        });
      });

      server.listen(3333, function (err) {
        var address = server.address();
        console.error('server listening on http://%s:%d', address.address, address.port);
        console.error('press CTRL+C to exit');
      });

      process.on('SIGINT', function () {
        server.close();
      });
    });
  });

});


*/