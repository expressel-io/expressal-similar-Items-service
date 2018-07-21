const mongoose = require('mongoose');
var faker = require('faker');
const Schema = mongoose.schema; // added this line
mongoose.connect('mongodb://localhost/fetcher');

var shopsAvalAtArr = ['COSTCO', 'Wallmart', 'Target', 'FRYs Electronics', 'AdoramaCamera'];

// var imageFunc = function () {
//   var imagePath = 
// }

var idFunc = function () {
  return Math.floor(Math.random() * Math.floor(5000));  
};

var priceFunc = function () {
   var a =  Math.floor(Math.random() * Math.floor(5000));
  return faker.commerce.price(.10,a,2,"$");
}; 

var deliveryCostFunc = function () {
  return 'Free delivery'; 
};

var randomDate = function (start, end) {
  for (var i =0 ; i < 100; i++) {
    var dateNew = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return dateNew;
  }
};   

var descFunc = function () {
  return (faker.commerce.productName());
};

var ratingNum = function() {
  return Math.floor(Math.random() * Math.floor(1000));
};

var shopSelect = function () {
  var max = shopsAvalAtArr.length
  var indexNum = Math.floor(Math.random(0) * Math.floor(max));
  return shopsAvalAtArr[indexNum];
}

var itemList = [];

var populateData = function () {
  for (var i =0 ; i < 100; i++) {
    var item = {
      id: idFunc(),
      price: priceFunc(),
      deliveryCost: deliveryCostFunc(),
      dateOfDelivery: randomDate(new Date(2012, 0, 1), new Date()),
      desc: descFunc(),
      rating: ratingNum(),
      shopsAvalAt: shopSelect()
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
  shopsAvalAt: String
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
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
    shopsAvalAt: itemList[i].shopsAvalAt
    // img: { data: Buffer, contentType: String }
    });

    newProd.save(cb);
  }

};

saveList(itemList,  (err, product) => {
  if (err) {
    console.log(err); 
  } else {
    console.log(product);
  }
});


module.exports.saveList = saveList;