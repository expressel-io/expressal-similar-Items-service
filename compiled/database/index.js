'use strict';

var mongoose = require('mongoose');
// const fs = require('fs');
var faker = require('faker');
var Schema = mongoose.schema; // added this line
mongoose.connect('mongodb://localhost/fetcher');

var shopsAvalAtArr = ['COSTCO', 'Wallmart', 'Target', 'FRYs Electronics', 'AdoramaCamera'];

var generateIdFunc = function generateIdFunc() {
  return Math.floor(Math.random() * Math.floor(5000));
};

var generatePriceFunc = function generatePriceFunc() {
  var a = Math.floor(Math.random() * Math.floor(5000));
  return faker.commerce.price(.10, a, 2, "$");
};

var generateDeliveryCostFunc = function generateDeliveryCostFunc() {
  return 'Free delivery';
};

var generateRandomDate = function generateRandomDate(start, end) {
  for (var i = 0; i < 100; i++) {
    var dateNew = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return dateNew;
  }
};

var generateDescFunc = function generateDescFunc() {
  return faker.commerce.productName();
};

var generateRatingNum = function generateRatingNum() {
  return Math.floor(Math.random() * Math.floor(1000));
};

var generateShopSelect = function generateShopSelect() {
  var max = shopsAvalAtArr.length;
  var indexNum = Math.floor(Math.random(0) * Math.floor(max));
  return shopsAvalAtArr[indexNum];
};

// const imgPathArr = [];
// const generateImagePath = function () {
//   for (var i = 0; i < 90; i++) {
//      // var img_var = "hrsf99" + "\/" + "expressal-similar-Items-service" + "\/" + "images" + "\/" + "image-[" + i + "].png"; 
//      var img_var =   "\/" + "images" + "\/" + "image-[" + i + "].png"; 
//      imgPathArr.push(img_var);
//   }
//      return imgPathArr;
// }
// generateImagePath();   

var itemList = [];

var populateData = function populateData() {
  for (var i = 0; i < 100; i++) {
    var item = {
      id: generateIdFunc(),
      price: generatePriceFunc(),
      deliveryCost: generateDeliveryCostFunc(),
      dateOfDelivery: generateRandomDate(new Date(2012, 0, 1), new Date()),
      desc: generateDescFunc(),
      rating: generateRatingNum(),
      shopsAvalAt: generateShopSelect()
      // imgPath: imgPathArr[i]
    };
    itemList.push(item);
  }
};
populateData();

var prodSchema = mongoose.Schema({
  id: Number,
  price: String,
  deliveryCost: String,
  dateOfDelivery: String,
  desc: String,
  rating: Number,
  shopsAvalAt: String
  // img: { data: Buffer, contentType: String }
  // img: String
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('we are connected!');
});

var Prod = mongoose.model('Prod', prodSchema);

var saveList = function saveList(itemList, cb) {

  for (var i = 0; i < itemList.length; i++) {
    var newProd = new Prod({
      id: itemList[i].id,
      price: itemList[i].price,
      deliveryCost: itemList[i].deliveryCost,
      dateOfDelivery: itemList[i].dateOfDelivery,
      desc: itemList[i].desc,
      rating: itemList[i].rating,
      shopsAvalAt: itemList[i].shopsAvalAt
      // img: {data: fs.readFileSync(itemList[i].imgPath),
      //       contentType : 'image/png' }
    });
    newProd.save(cb);
  }
};

saveList(itemList, function (err, product) {
  if (err) {
    console.log(err);
  } else {
    console.log('prod', product);
  }
});

var find = function find(callback) {
  Prod.find({}).sort('-size').limit(5).exec(callback);
};

module.exports.saveList = saveList;
module.exports.itemList = itemList;
module.exports.find = find;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2RhdGFiYXNlL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsImZha2VyIiwiU2NoZW1hIiwic2NoZW1hIiwiY29ubmVjdCIsInNob3BzQXZhbEF0QXJyIiwiZ2VuZXJhdGVJZEZ1bmMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZW5lcmF0ZVByaWNlRnVuYyIsImEiLCJjb21tZXJjZSIsInByaWNlIiwiZ2VuZXJhdGVEZWxpdmVyeUNvc3RGdW5jIiwiZ2VuZXJhdGVSYW5kb21EYXRlIiwic3RhcnQiLCJlbmQiLCJpIiwiZGF0ZU5ldyIsIkRhdGUiLCJnZXRUaW1lIiwiZ2VuZXJhdGVEZXNjRnVuYyIsInByb2R1Y3ROYW1lIiwiZ2VuZXJhdGVSYXRpbmdOdW0iLCJnZW5lcmF0ZVNob3BTZWxlY3QiLCJtYXgiLCJsZW5ndGgiLCJpbmRleE51bSIsIml0ZW1MaXN0IiwicG9wdWxhdGVEYXRhIiwiaXRlbSIsImlkIiwiZGVsaXZlcnlDb3N0IiwiZGF0ZU9mRGVsaXZlcnkiLCJkZXNjIiwicmF0aW5nIiwic2hvcHNBdmFsQXQiLCJwdXNoIiwicHJvZFNjaGVtYSIsIk51bWJlciIsIlN0cmluZyIsImRiIiwiY29ubmVjdGlvbiIsIm9uIiwiY29uc29sZSIsImVycm9yIiwiYmluZCIsIm9uY2UiLCJsb2ciLCJQcm9kIiwibW9kZWwiLCJzYXZlTGlzdCIsImNiIiwibmV3UHJvZCIsInNhdmUiLCJlcnIiLCJwcm9kdWN0IiwiZmluZCIsImNhbGxiYWNrIiwic29ydCIsImxpbWl0IiwiZXhlYyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsV0FBV0MsUUFBUSxVQUFSLENBQWpCO0FBQ0E7QUFDQSxJQUFNQyxRQUFRRCxRQUFRLE9BQVIsQ0FBZDtBQUNBLElBQU1FLFNBQVNILFNBQVNJLE1BQXhCLEMsQ0FBZ0M7QUFDaENKLFNBQVNLLE9BQVQsQ0FBaUIsNkJBQWpCOztBQUVBLElBQU1DLGlC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QUFRSSxHQUFSLENBQVksTUFBWixFQUFvQlEsT0FBcEI7QUFDRDtBQUNGLENBTkQ7O0FBUUEsSUFBSUMsT0FBUSxTQUFSQSxJQUFRLENBQUNDLFFBQUQsRUFBYztBQUN4QlQsT0FBS1EsSUFBTCxDQUFVLEVBQVYsRUFBY0UsSUFBZCxDQUFtQixPQUFuQixFQUE0QkMsS0FBNUIsQ0FBa0MsQ0FBbEMsRUFBcUNDLElBQXJDLENBQTBDSCxRQUExQztBQUNELENBRkQ7O0FBSUFJLE9BQU9DLE9BQVAsQ0FBZVosUUFBZixHQUEwQkEsUUFBMUI7QUFDQVcsT0FBT0MsT0FBUCxDQUFlbkMsUUFBZixHQUEwQkEsUUFBMUI7QUFDQWtDLE9BQU9DLE9BQVAsQ0FBZU4sSUFBZixHQUFzQkEsSUFBdEI7O0FBTUE7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuLy8gY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5jb25zdCBmYWtlciA9IHJlcXVpcmUoJ2Zha2VyJyk7XHJcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLnNjaGVtYTsgLy8gYWRkZWQgdGhpcyBsaW5lXHJcbm1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly9sb2NhbGhvc3QvZmV0Y2hlcicpO1xyXG5cclxuY29uc3Qgc2hvcHNBdmFsQXRBcnIgPSBbJ0NPU1RDTycsICdXYWxsbWFydCcsICdUYXJnZXQnLCAnRlJZcyBFbGVjdHJvbmljcycsICdBZG9yYW1hQ2FtZXJhJ107XHJcblxyXG5cclxuXHJcbmNvbnN0IGdlbmVyYXRlSWRGdW5jID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDUwMDApKTsgIFxyXG59O1xyXG5cclxuY29uc3QgZ2VuZXJhdGVQcmljZUZ1bmMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgIHZhciBhID0gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoNTAwMCkpO1xyXG4gIHJldHVybiBmYWtlci5jb21tZXJjZS5wcmljZSguMTAsYSwyLFwiJFwiKTtcclxufTsgXHJcblxyXG5jb25zdCBnZW5lcmF0ZURlbGl2ZXJ5Q29zdEZ1bmMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuICdGcmVlIGRlbGl2ZXJ5JzsgXHJcbn07XHJcblxyXG5jb25zdCBnZW5lcmF0ZVJhbmRvbURhdGUgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xyXG4gIGZvciAodmFyIGkgPTAgOyBpIDwgMTAwOyBpKyspIHtcclxuICAgIHZhciBkYXRlTmV3ID0gbmV3IERhdGUoc3RhcnQuZ2V0VGltZSgpICsgTWF0aC5yYW5kb20oKSAqIChlbmQuZ2V0VGltZSgpIC0gc3RhcnQuZ2V0VGltZSgpKSk7XHJcbiAgICByZXR1cm4gZGF0ZU5ldztcclxuICB9XHJcbn07ICAgXHJcblxyXG5jb25zdCBnZW5lcmF0ZURlc2NGdW5jID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiAoZmFrZXIuY29tbWVyY2UucHJvZHVjdE5hbWUoKSk7XHJcbn07XHJcblxyXG5jb25zdCBnZW5lcmF0ZVJhdGluZ051bSA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDEwMDApKTtcclxufTtcclxuXHJcbmNvbnN0IGdlbmVyYXRlU2hvcFNlbGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgbWF4ID0gc2hvcHNBdmFsQXRBcnIubGVuZ3RoXHJcbiAgdmFyIGluZGV4TnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgwKSAqIE1hdGguZmxvb3IobWF4KSk7XHJcbiAgcmV0dXJuIHNob3BzQXZhbEF0QXJyW2luZGV4TnVtXTtcclxufVxyXG5cclxuLy8gY29uc3QgaW1nUGF0aEFyciA9IFtdO1xyXG4vLyBjb25zdCBnZW5lcmF0ZUltYWdlUGF0aCA9IGZ1bmN0aW9uICgpIHtcclxuLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IDkwOyBpKyspIHtcclxuLy8gICAgICAvLyB2YXIgaW1nX3ZhciA9IFwiaHJzZjk5XCIgKyBcIlxcL1wiICsgXCJleHByZXNzYWwtc2ltaWxhci1JdGVtcy1zZXJ2aWNlXCIgKyBcIlxcL1wiICsgXCJpbWFnZXNcIiArIFwiXFwvXCIgKyBcImltYWdlLVtcIiArIGkgKyBcIl0ucG5nXCI7IFxyXG4vLyAgICAgIHZhciBpbWdfdmFyID0gICBcIlxcL1wiICsgXCJpbWFnZXNcIiArIFwiXFwvXCIgKyBcImltYWdlLVtcIiArIGkgKyBcIl0ucG5nXCI7IFxyXG4vLyAgICAgIGltZ1BhdGhBcnIucHVzaChpbWdfdmFyKTtcclxuLy8gICB9XHJcbi8vICAgICAgcmV0dXJuIGltZ1BhdGhBcnI7XHJcbi8vIH1cclxuLy8gZ2VuZXJhdGVJbWFnZVBhdGgoKTsgICBcclxuIFxyXG5sZXQgaXRlbUxpc3QgPSBbXTtcclxuXHJcbmNvbnN0IHBvcHVsYXRlRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICBmb3IgKHZhciBpID0wIDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICB2YXIgaXRlbSA9IHtcclxuICAgICAgaWQ6IGdlbmVyYXRlSWRGdW5jKCksXHJcbiAgICAgIHByaWNlOiBnZW5lcmF0ZVByaWNlRnVuYygpLFxyXG4gICAgICBkZWxpdmVyeUNvc3Q6IGdlbmVyYXRlRGVsaXZlcnlDb3N0RnVuYygpLFxyXG4gICAgICBkYXRlT2ZEZWxpdmVyeTogZ2VuZXJhdGVSYW5kb21EYXRlKG5ldyBEYXRlKDIwMTIsIDAsIDEpLCBuZXcgRGF0ZSgpKSxcclxuICAgICAgZGVzYzogZ2VuZXJhdGVEZXNjRnVuYygpLFxyXG4gICAgICByYXRpbmc6IGdlbmVyYXRlUmF0aW5nTnVtKCksXHJcbiAgICAgIHNob3BzQXZhbEF0OiBnZW5lcmF0ZVNob3BTZWxlY3QoKSxcclxuICAgICAgLy8gaW1nUGF0aDogaW1nUGF0aEFycltpXVxyXG4gICAgfVxyXG4gICAgaXRlbUxpc3QucHVzaChpdGVtKTtcclxuICB9XHJcbn1cclxucG9wdWxhdGVEYXRhKCk7XHJcblxyXG5sZXQgcHJvZFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYSh7IFxyXG4gIGlkIDogTnVtYmVyLFxyXG4gIHByaWNlOiBTdHJpbmcsXHJcbiAgZGVsaXZlcnlDb3N0OiBTdHJpbmcsXHJcbiAgZGF0ZU9mRGVsaXZlcnk6IFN0cmluZyxcclxuICBkZXNjOiBTdHJpbmcsXHJcbiAgcmF0aW5nOiBOdW1iZXIsXHJcbiAgc2hvcHNBdmFsQXQ6IFN0cmluZyxcclxuICAvLyBpbWc6IHsgZGF0YTogQnVmZmVyLCBjb250ZW50VHlwZTogU3RyaW5nIH1cclxuICAvLyBpbWc6IFN0cmluZ1xyXG59KTtcclxuXHJcbmxldCBkYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XHJcbmRiLm9uKCdlcnJvcicsIGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlLCAnY29ubmVjdGlvbiBlcnJvcjonKSk7XHJcbmRiLm9uY2UoJ29wZW4nLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc29sZS5sb2coJ3dlIGFyZSBjb25uZWN0ZWQhJyk7XHJcbn0pO1xyXG5cclxubGV0IFByb2QgPSBtb25nb29zZS5tb2RlbCgnUHJvZCcsIHByb2RTY2hlbWEpO1xyXG5cclxubGV0IHNhdmVMaXN0ID0gKGl0ZW1MaXN0LCBjYikgPT4ge1xyXG4gICBcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBuZXdQcm9kID0gbmV3IFByb2QgKHtcclxuICAgIGlkOiBpdGVtTGlzdFtpXS5pZCxcclxuICAgIHByaWNlOiBpdGVtTGlzdFtpXS5wcmljZSxcclxuICAgIGRlbGl2ZXJ5Q29zdDogaXRlbUxpc3RbaV0uZGVsaXZlcnlDb3N0LFxyXG4gICAgZGF0ZU9mRGVsaXZlcnk6IGl0ZW1MaXN0W2ldLmRhdGVPZkRlbGl2ZXJ5LFxyXG4gICAgZGVzYzogaXRlbUxpc3RbaV0uZGVzYyxcclxuICAgIHJhdGluZzogaXRlbUxpc3RbaV0ucmF0aW5nLFxyXG4gICAgc2hvcHNBdmFsQXQ6IGl0ZW1MaXN0W2ldLnNob3BzQXZhbEF0LFxyXG4gICAgLy8gaW1nOiB7ZGF0YTogZnMucmVhZEZpbGVTeW5jKGl0ZW1MaXN0W2ldLmltZ1BhdGgpLFxyXG4gICAgLy8gICAgICAgY29udGVudFR5cGUgOiAnaW1hZ2UvcG5nJyB9XHJcbiAgICB9KTtcclxuICBuZXdQcm9kLnNhdmUoY2IpO1xyXG4gIH1cclxuICBcclxuICBcclxufSBcclxuXHJcblxyXG5cclxuc2F2ZUxpc3QoaXRlbUxpc3QsICAoZXJyLCBwcm9kdWN0KSA9PiB7XHJcbiAgaWYgKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTsgXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKCdwcm9kJywgcHJvZHVjdCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmxldCBmaW5kICA9IChjYWxsYmFjaykgPT4ge1xyXG4gIFByb2QuZmluZCh7fSkuc29ydCgnLXNpemUnKS5saW1pdCg1KS5leGVjKGNhbGxiYWNrKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLnNhdmVMaXN0ID0gc2F2ZUxpc3Q7XHJcbm1vZHVsZS5leHBvcnRzLml0ZW1MaXN0ID0gaXRlbUxpc3Q7XHJcbm1vZHVsZS5leHBvcnRzLmZpbmQgPSBmaW5kO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vKlxyXG5cclxudmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbnZhciBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcbnZhciBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcblxyXG52YXIgaW1nUGF0aCA9ICcvcGF0aC95b3VyaW1hZ2UucG5nJztcclxuXHJcbm1vbmdvb3NlLmNvbm5lY3QoJ2xvY2FsaG9zdCcsICd0ZXN0aW5nX3N0b3JlSW1nJyk7XHJcblxyXG52YXIgc2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgICBpbWc6IHsgZGF0YTogQnVmZmVyLCBjb250ZW50VHlwZTogU3RyaW5nIH1cclxufSk7XHJcblxyXG52YXIgQSA9IG1vbmdvb3NlLm1vZGVsKCdBJywgc2NoZW1hKTtcclxuXHJcbm1vbmdvb3NlLmNvbm5lY3Rpb24ub24oJ29wZW4nLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc29sZS5lcnJvcignbW9uZ28gaXMgb3BlbicpO1xyXG5cclxuICBBLnJlbW92ZShmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcigncmVtb3ZlZCBvbGQgZG9jcycpO1xyXG5cclxuICAgIC8vIHN0b3JlIGFuIGltZyBpbiBiaW5hcnkgaW4gbW9uZ29cclxuICAgIHZhciBhID0gbmV3IEE7XHJcbiAgICBhLmltZy5kYXRhID0gZnMucmVhZEZpbGVTeW5jKGltZ1BhdGgpO1xyXG4gICAgYS5pbWcuY29udGVudFR5cGUgPSAnaW1hZ2UvcG5nJztcclxuICAgIGEuc2F2ZShmdW5jdGlvbiAoZXJyLCBhKSB7XHJcbiAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3NhdmVkIGltZyB0byBtb25nbycpO1xyXG5cclxuICAgICAgLy8gc3RhcnQgYSBkZW1vIHNlcnZlclxyXG4gICAgICB2YXIgc2VydmVyID0gZXhwcmVzcy5jcmVhdGVTZXJ2ZXIoKTtcclxuICAgICAgc2VydmVyLmdldCgnLycsIGZ1bmN0aW9uIChyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIEEuZmluZEJ5SWQoYSwgZnVuY3Rpb24gKGVyciwgZG9jKSB7XHJcbiAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gbmV4dChlcnIpO1xyXG4gICAgICAgICAgcmVzLmNvbnRlbnRUeXBlKGRvYy5pbWcuY29udGVudFR5cGUpO1xyXG4gICAgICAgICAgcmVzLnNlbmQoZG9jLmltZy5kYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXJ2ZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Ryb3BwaW5nIGRiJyk7XHJcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdGlvbi5kYi5kcm9wRGF0YWJhc2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignY2xvc2luZyBkYiBjb25uZWN0aW9uJyk7XHJcbiAgICAgICAgICBtb25nb29zZS5jb25uZWN0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2VydmVyLmxpc3RlbigzMzMzLCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgdmFyIGFkZHJlc3MgPSBzZXJ2ZXIuYWRkcmVzcygpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NlcnZlciBsaXN0ZW5pbmcgb24gaHR0cDovLyVzOiVkJywgYWRkcmVzcy5hZGRyZXNzLCBhZGRyZXNzLnBvcnQpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3ByZXNzIENUUkwrQyB0byBleGl0Jyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcHJvY2Vzcy5vbignU0lHSU5UJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNlcnZlci5jbG9zZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcblxyXG5cclxuKi8iXX0=