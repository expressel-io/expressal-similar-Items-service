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

var imgPathArr = [];
var generateImagePath = function generateImagePath() {
  for (var i = 0; i < 90; i++) {
    // var img_var = "hrsf99" + "\/" + "expressal-similar-Items-service" + "\/" + "images" + "\/" + "image-[" + i + "].png"; 
    var img_var = "\/" + "images" + "\/" + "image-[" + i + "].png";
    imgPathArr.push(img_var);
  }
  return imgPathArr;
};
generateImagePath();

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
  shopsAvalAt: String,
  img: { data: Buffer, contentType: String
    // img: String
  } });

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

// saveList(itemList,  (err, product) => {
//   if (err) {
//     console.log(err); 
//   } else {
//     console.log('prod', product);
//   }
// });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2RhdGFiYXNlL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsImZha2VyIiwiU2NoZW1hIiwic2NoZW1hIiwiY29ubmVjdCIsInNob3BzQXZhbEF0QXJyIiwiZ2VuZXJhdGVJZEZ1bmMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZW5lcmF0ZVByaWNlRnVuYyIsImEiLCJjb21tZXJjZSIsInByaWNlIiwiZ2VuZXJhdGVEZWxpdmVyeUNvc3RGdW5jIiwiZ2VuZXJhdGVSYW5kb21EYXRlIiwic3RhcnQiLCJlbmQiLCJpIiwiZGF0ZU5ldyIsIkRhdGUiLCJnZXRUaW1lIiwiZ2VuZXJhdGVEZXNjRnVuYyIsInByb2R1Y3ROYW1lIiwiZ2VuZXJhdGVSYXRpbmdOdW0iLCJnZW5lcmF0ZVNob3BTZWxlY3QiLCJtYXgiLCJsZW5ndGgiLCJpbmRleE51bSIsImltZ1BhdGhBcnIiLCJnZW5lcmF0ZUltYWdlUGF0aCIsImltZ192YXIiLCJwdXNoIiwiaXRlbUxpc3QiLCJwb3B1bGF0ZURhdGEiLCJpdGVtIiwiaWQiLCJkZWxpdmVyeUNvc3QiLCJkYXRlT2ZEZWxpdmVyeSIsImRlc2MiLCJyYXRpbmciLCJzaG9wc0F2YWxBdCIsInByb2RTY2hlbWEiLCJOdW1iZXIiLCJTdHJpbmciLCJpbWciLCJkYXRhIiwiQnVmZmVyIiwiY29udGVudFR5cGUiLCJkYiIsImNvbm5lY3Rpb24iLCJvbiIsImNvbnNvbGUiLCJlcnJvciIsImJpbmQiLCJvbmNlIiwibG9nIiwiUHJvZCIsIm1vZGVsIiwic2F2ZUxpc3QiLCJjYiIsIm5ld1Byb2QiLCJzYXZlIiwiZmluZCIsImNhbGxiYWNrIiwic29ydCIsImxpbWl0IiwiZXhlYyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsV0FBV0MsUUFBUSxVQUFSLENBQWpCO0FBQ0E7QUFDQSxJQUFNQyxRQUFRRCxRQUFRLE9BQVIsQ0FBZDtBQUNBLElBQU1FLFNBQVNILFNB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SEE7QUFJMUJDLHNCQUFnQkwsU0FBU2YsQ0FBVCxFQUFZb0IsY0FKRjtBQUsxQkMsWUFBTU4sU0FBU2YsQ0FBVCxFQUFZcUIsSUFMUTtBQU0xQkMsY0FBUVAsU0FBU2YsQ0FBVCxFQUFZc0IsTUFOTTtBQU8xQkMsbUJBQWFSLFNBQVNmLENBQVQsRUFBWXVCO0FBQ3pCO0FBQ0E7QUFUMEIsS0FBVixDQUFoQjtBQVdGb0IsWUFBUUMsSUFBUixDQUFhRixFQUFiO0FBQ0M7QUFHRixDQWxCRDs7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUcsT0FBUSxTQUFSQSxJQUFRLENBQUNDLFFBQUQsRUFBYztBQUN4QlAsT0FBS00sSUFBTCxDQUFVLEVBQVYsRUFBY0UsSUFBZCxDQUFtQixPQUFuQixFQUE0QkMsS0FBNUIsQ0FBa0MsQ0FBbEMsRUFBcUNDLElBQXJDLENBQTBDSCxRQUExQztBQUNELENBRkQ7O0FBSUFJLE9BQU9DLE9BQVAsQ0FBZVYsUUFBZixHQUEwQkEsUUFBMUI7QUFDQVMsT0FBT0MsT0FBUCxDQUFlcEMsUUFBZixHQUEwQkEsUUFBMUI7QUFDQW1DLE9BQU9DLE9BQVAsQ0FBZU4sSUFBZixHQUFzQkEsSUFBdEI7O0FBTUE7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuLy8gY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5jb25zdCBmYWtlciA9IHJlcXVpcmUoJ2Zha2VyJyk7XHJcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLnNjaGVtYTsgLy8gYWRkZWQgdGhpcyBsaW5lXHJcbm1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly9sb2NhbGhvc3QvZmV0Y2hlcicpO1xyXG5cclxuY29uc3Qgc2hvcHNBdmFsQXRBcnIgPSBbJ0NPU1RDTycsICdXYWxsbWFydCcsICdUYXJnZXQnLCAnRlJZcyBFbGVjdHJvbmljcycsICdBZG9yYW1hQ2FtZXJhJ107XHJcblxyXG5cclxuXHJcbmNvbnN0IGdlbmVyYXRlSWRGdW5jID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDUwMDApKTsgIFxyXG59O1xyXG5cclxuY29uc3QgZ2VuZXJhdGVQcmljZUZ1bmMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgIHZhciBhID0gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoNTAwMCkpO1xyXG4gIHJldHVybiBmYWtlci5jb21tZXJjZS5wcmljZSguMTAsYSwyLFwiJFwiKTtcclxufTsgXHJcblxyXG5jb25zdCBnZW5lcmF0ZURlbGl2ZXJ5Q29zdEZ1bmMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuICdGcmVlIGRlbGl2ZXJ5JzsgXHJcbn07XHJcblxyXG5jb25zdCBnZW5lcmF0ZVJhbmRvbURhdGUgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xyXG4gIGZvciAodmFyIGkgPTAgOyBpIDwgMTAwOyBpKyspIHtcclxuICAgIHZhciBkYXRlTmV3ID0gbmV3IERhdGUoc3RhcnQuZ2V0VGltZSgpICsgTWF0aC5yYW5kb20oKSAqIChlbmQuZ2V0VGltZSgpIC0gc3RhcnQuZ2V0VGltZSgpKSk7XHJcbiAgICByZXR1cm4gZGF0ZU5ldztcclxuICB9XHJcbn07ICAgXHJcblxyXG5jb25zdCBnZW5lcmF0ZURlc2NGdW5jID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiAoZmFrZXIuY29tbWVyY2UucHJvZHVjdE5hbWUoKSk7XHJcbn07XHJcblxyXG5jb25zdCBnZW5lcmF0ZVJhdGluZ051bSA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDEwMDApKTtcclxufTtcclxuXHJcbmNvbnN0IGdlbmVyYXRlU2hvcFNlbGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgbWF4ID0gc2hvcHNBdmFsQXRBcnIubGVuZ3RoXHJcbiAgdmFyIGluZGV4TnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgwKSAqIE1hdGguZmxvb3IobWF4KSk7XHJcbiAgcmV0dXJuIHNob3BzQXZhbEF0QXJyW2luZGV4TnVtXTtcclxufVxyXG5cclxuY29uc3QgaW1nUGF0aEFyciA9IFtdO1xyXG5jb25zdCBnZW5lcmF0ZUltYWdlUGF0aCA9IGZ1bmN0aW9uICgpIHtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IDkwOyBpKyspIHtcclxuICAgICAvLyB2YXIgaW1nX3ZhciA9IFwiaHJzZjk5XCIgKyBcIlxcL1wiICsgXCJleHByZXNzYWwtc2ltaWxhci1JdGVtcy1zZXJ2aWNlXCIgKyBcIlxcL1wiICsgXCJpbWFnZXNcIiArIFwiXFwvXCIgKyBcImltYWdlLVtcIiArIGkgKyBcIl0ucG5nXCI7IFxyXG4gICAgIHZhciBpbWdfdmFyID0gICBcIlxcL1wiICsgXCJpbWFnZXNcIiArIFwiXFwvXCIgKyBcImltYWdlLVtcIiArIGkgKyBcIl0ucG5nXCI7IFxyXG4gICAgIGltZ1BhdGhBcnIucHVzaChpbWdfdmFyKTtcclxuICB9XHJcbiAgICAgcmV0dXJuIGltZ1BhdGhBcnI7XHJcbn1cclxuZ2VuZXJhdGVJbWFnZVBhdGgoKTsgICBcclxuIFxyXG5sZXQgaXRlbUxpc3QgPSBbXTtcclxuXHJcbmNvbnN0IHBvcHVsYXRlRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICBmb3IgKHZhciBpID0wIDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICB2YXIgaXRlbSA9IHtcclxuICAgICAgaWQ6IGdlbmVyYXRlSWRGdW5jKCksXHJcbiAgICAgIHByaWNlOiBnZW5lcmF0ZVByaWNlRnVuYygpLFxyXG4gICAgICBkZWxpdmVyeUNvc3Q6IGdlbmVyYXRlRGVsaXZlcnlDb3N0RnVuYygpLFxyXG4gICAgICBkYXRlT2ZEZWxpdmVyeTogZ2VuZXJhdGVSYW5kb21EYXRlKG5ldyBEYXRlKDIwMTIsIDAsIDEpLCBuZXcgRGF0ZSgpKSxcclxuICAgICAgZGVzYzogZ2VuZXJhdGVEZXNjRnVuYygpLFxyXG4gICAgICByYXRpbmc6IGdlbmVyYXRlUmF0aW5nTnVtKCksXHJcbiAgICAgIHNob3BzQXZhbEF0OiBnZW5lcmF0ZVNob3BTZWxlY3QoKSxcclxuICAgICAgLy8gaW1nUGF0aDogaW1nUGF0aEFycltpXVxyXG4gICAgfVxyXG4gICAgaXRlbUxpc3QucHVzaChpdGVtKTtcclxuICB9XHJcbn1cclxucG9wdWxhdGVEYXRhKCk7XHJcblxyXG5sZXQgcHJvZFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYSh7IFxyXG4gIGlkIDogTnVtYmVyLFxyXG4gIHByaWNlOiBTdHJpbmcsXHJcbiAgZGVsaXZlcnlDb3N0OiBTdHJpbmcsXHJcbiAgZGF0ZU9mRGVsaXZlcnk6IFN0cmluZyxcclxuICBkZXNjOiBTdHJpbmcsXHJcbiAgcmF0aW5nOiBOdW1iZXIsXHJcbiAgc2hvcHNBdmFsQXQ6IFN0cmluZyxcclxuICBpbWc6IHsgZGF0YTogQnVmZmVyLCBjb250ZW50VHlwZTogU3RyaW5nIH1cclxuICAvLyBpbWc6IFN0cmluZ1xyXG59KTtcclxuXHJcbmxldCBkYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XHJcbmRiLm9uKCdlcnJvcicsIGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlLCAnY29ubmVjdGlvbiBlcnJvcjonKSk7XHJcbmRiLm9uY2UoJ29wZW4nLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc29sZS5sb2coJ3dlIGFyZSBjb25uZWN0ZWQhJyk7XHJcbn0pO1xyXG5cclxubGV0IFByb2QgPSBtb25nb29zZS5tb2RlbCgnUHJvZCcsIHByb2RTY2hlbWEpO1xyXG5cclxubGV0IHNhdmVMaXN0ID0gKGl0ZW1MaXN0LCBjYikgPT4ge1xyXG4gICBcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBuZXdQcm9kID0gbmV3IFByb2QgKHtcclxuICAgIGlkOiBpdGVtTGlzdFtpXS5pZCxcclxuICAgIHByaWNlOiBpdGVtTGlzdFtpXS5wcmljZSxcclxuICAgIGRlbGl2ZXJ5Q29zdDogaXRlbUxpc3RbaV0uZGVsaXZlcnlDb3N0LFxyXG4gICAgZGF0ZU9mRGVsaXZlcnk6IGl0ZW1MaXN0W2ldLmRhdGVPZkRlbGl2ZXJ5LFxyXG4gICAgZGVzYzogaXRlbUxpc3RbaV0uZGVzYyxcclxuICAgIHJhdGluZzogaXRlbUxpc3RbaV0ucmF0aW5nLFxyXG4gICAgc2hvcHNBdmFsQXQ6IGl0ZW1MaXN0W2ldLnNob3BzQXZhbEF0XHJcbiAgICAvLyBpbWc6IHtkYXRhOiBmcy5yZWFkRmlsZVN5bmMoaXRlbUxpc3RbaV0uaW1nUGF0aCksXHJcbiAgICAvLyAgICAgICBjb250ZW50VHlwZSA6ICdpbWFnZS9wbmcnIH1cclxuICAgIH0pO1xyXG4gIG5ld1Byb2Quc2F2ZShjYik7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG59IFxyXG5cclxuXHJcblxyXG4vLyBzYXZlTGlzdChpdGVtTGlzdCwgIChlcnIsIHByb2R1Y3QpID0+IHtcclxuLy8gICBpZiAoZXJyKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhlcnIpOyBcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ3Byb2QnLCBwcm9kdWN0KTtcclxuLy8gICB9XHJcbi8vIH0pO1xyXG5cclxubGV0IGZpbmQgID0gKGNhbGxiYWNrKSA9PiB7XHJcbiAgUHJvZC5maW5kKHt9KS5zb3J0KCctc2l6ZScpLmxpbWl0KDUpLmV4ZWMoY2FsbGJhY2spO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMuc2F2ZUxpc3QgPSBzYXZlTGlzdDtcclxubW9kdWxlLmV4cG9ydHMuaXRlbUxpc3QgPSBpdGVtTGlzdDtcclxubW9kdWxlLmV4cG9ydHMuZmluZCA9IGZpbmQ7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8qXHJcblxyXG52YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxudmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcclxudmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxudmFyIFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuXHJcbnZhciBpbWdQYXRoID0gJy9wYXRoL3lvdXJpbWFnZS5wbmcnO1xyXG5cclxubW9uZ29vc2UuY29ubmVjdCgnbG9jYWxob3N0JywgJ3Rlc3Rpbmdfc3RvcmVJbWcnKTtcclxuXHJcbnZhciBzY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAgIGltZzogeyBkYXRhOiBCdWZmZXIsIGNvbnRlbnRUeXBlOiBTdHJpbmcgfVxyXG59KTtcclxuXHJcbnZhciBBID0gbW9uZ29vc2UubW9kZWwoJ0EnLCBzY2hlbWEpO1xyXG5cclxubW9uZ29vc2UuY29ubmVjdGlvbi5vbignb3BlbicsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zb2xlLmVycm9yKCdtb25nbyBpcyBvcGVuJyk7XHJcblxyXG4gIEEucmVtb3ZlKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKCdyZW1vdmVkIG9sZCBkb2NzJyk7XHJcblxyXG4gICAgLy8gc3RvcmUgYW4gaW1nIGluIGJpbmFyeSBpbiBtb25nb1xyXG4gICAgdmFyIGEgPSBuZXcgQTtcclxuICAgIGEuaW1nLmRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoaW1nUGF0aCk7XHJcbiAgICBhLmltZy5jb250ZW50VHlwZSA9ICdpbWFnZS9wbmcnO1xyXG4gICAgYS5zYXZlKGZ1bmN0aW9uIChlcnIsIGEpIHtcclxuICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xyXG5cclxuICAgICAgY29uc29sZS5lcnJvcignc2F2ZWQgaW1nIHRvIG1vbmdvJyk7XHJcblxyXG4gICAgICAvLyBzdGFydCBhIGRlbW8gc2VydmVyXHJcbiAgICAgIHZhciBzZXJ2ZXIgPSBleHByZXNzLmNyZWF0ZVNlcnZlcigpO1xyXG4gICAgICBzZXJ2ZXIuZ2V0KCcvJywgZnVuY3Rpb24gKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgQS5maW5kQnlJZChhLCBmdW5jdGlvbiAoZXJyLCBkb2MpIHtcclxuICAgICAgICAgIGlmIChlcnIpIHJldHVybiBuZXh0KGVycik7XHJcbiAgICAgICAgICByZXMuY29udGVudFR5cGUoZG9jLmltZy5jb250ZW50VHlwZSk7XHJcbiAgICAgICAgICByZXMuc2VuZChkb2MuaW1nLmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNlcnZlci5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignZHJvcHBpbmcgZGInKTtcclxuICAgICAgICBtb25nb29zZS5jb25uZWN0aW9uLmRiLmRyb3BEYXRhYmFzZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdjbG9zaW5nIGRiIGNvbm5lY3Rpb24nKTtcclxuICAgICAgICAgIG1vbmdvb3NlLmNvbm5lY3Rpb24uY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXJ2ZXIubGlzdGVuKDMzMzMsIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICB2YXIgYWRkcmVzcyA9IHNlcnZlci5hZGRyZXNzKCk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignc2VydmVyIGxpc3RlbmluZyBvbiBodHRwOi8vJXM6JWQnLCBhZGRyZXNzLmFkZHJlc3MsIGFkZHJlc3MucG9ydCk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcigncHJlc3MgQ1RSTCtDIHRvIGV4aXQnKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBwcm9jZXNzLm9uKCdTSUdJTlQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2VydmVyLmNsb3NlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuXHJcblxyXG4qLyJdfQ==