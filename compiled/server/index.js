'use strict';

var express = require('express');
var app = express();
var axios = require('axios');
//var fs = require('fs');
//const DB = require('../database/index.js');
// const Repos = require('../helpers/github.js');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

var MongoClient = require('mongodb').MongoClient;

console.log('I am here');

app.use(express.static(__dirname + '/../client/dist'));

// app.use(multer({ dest: ‘./uploads/’,
//  rename: function (fieldname, filename) {
//    return filename;
//  },
// }));

app.get('api/items', function (req, res) {

    DB.find(function (err, result) {
        res.send(result);
    });
});

// app.post('/api/photo',function(req,res) {
//     newProd.img.data = fs.readFileSync(req.files.userPhoto.path)
//     newProd.img.contentType = 'image/png';
//     // newProd.save(cb);
// }

// app.get('/images', function (req, res) {

//     DB.find ( (err, result) => {
//     	res.send (result);
//     });
// });


var port = 3004;

app.listen(port, function () {
    console.log('listening on port ' + port);
});

////////////////
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsImF4aW9zIiwiYm9keVBhcnNlciIsInVzZSIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImpzb24iLCJNb25nb0NsaWVudCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0aWMiLCJfX2Rpcm5hbWUiLCJnZXQiLCJyZXEiLCJyZXMiLCJEQiIsImZpbmQiLCJlcnIiLCJyZXN1bHQiLCJzZW5kIiwicG9ydCIsImxpc3RlbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxVQUFVQyxRQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFJQyxNQUFNRixTQUFWO0FBQ0EsSUFBTUcsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJRyxhQUFhSCxRQUFRLGFBQVIsQ0FBakI7O0FBRUFDLElBQUlHLEdBQUosQ0FBUUQsV0FBV0UsVUFBWCxDQUFzQixFQUFFQyxVQUFVLEtBQVosRUFBdEIsQ0FBUjs7QUFFQUwsSUFBSUcsR0FBSixDQUFRRCxXQUFXSSxJQUFYLEVBQVI7O0FBSUEsSUFBSUMsY0FBY1IsUUFBUSxTQUFSLEVBQW1CUSxXQUFyQzs7QUFFQUMsUUFBUUMsR0FBUixDQUFZLFdBQVo7O0FBRUFULElBQUlHLEdBQUosQ0FBUUwsUUFBUVksTUFBUixDQUFlQyxZQUFZLGlCQUEzQixDQUFSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFYLElBQUlZLEdBQUosQ0FBUSxXQUFSLEVBQXFCLFVBQVVDLEdBQVYsRUFBZUMsR0FBZixFQUFvQjs7QUFFckNDLE9BQUdDLElBQUgsQ0FBVSxVQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBaUI7QUFDMUJKLFlBQUlLLElBQUosQ0FBVUQsTUFBVjtBQUNBLEtBRkQ7QUFHSCxDQUxEOztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLElBQUlFLE9BQU8sSUFBWDs7QUFFQXBCLElBQUlxQixNQUFKLENBQVdELElBQVgsRUFBaUIsWUFBVztBQUMxQlosWUFBUUMsR0FBUix3QkFBaUNXLElBQWpDO0FBQ0QsQ0FGRDs7QUFJQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmxldCBhcHAgPSBleHByZXNzKCk7XHJcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSAoJ2F4aW9zJyk7XHJcbi8vdmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcclxuLy9jb25zdCBEQiA9IHJlcXVpcmUoJy4uL2RhdGFiYXNlL2luZGV4LmpzJyk7XHJcbi8vIGNvbnN0IFJlcG9zID0gcmVxdWlyZSgnLi4vaGVscGVycy9naXRodWIuanMnKTtcclxudmFyIGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpXHJcblxyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XHJcblxyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuXHJcblxyXG5cclxudmFyIE1vbmdvQ2xpZW50ID0gcmVxdWlyZSgnbW9uZ29kYicpLk1vbmdvQ2xpZW50XHJcblxyXG5jb25zb2xlLmxvZygnSSBhbSBoZXJlJyk7XHJcblxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvLi4vY2xpZW50L2Rpc3QnKSk7XHJcblxyXG4vLyBhcHAudXNlKG11bHRlcih7IGRlc3Q6IOKAmC4vdXBsb2Fkcy/igJksXHJcbi8vICByZW5hbWU6IGZ1bmN0aW9uIChmaWVsZG5hbWUsIGZpbGVuYW1lKSB7XHJcbi8vICAgIHJldHVybiBmaWxlbmFtZTtcclxuLy8gIH0sXHJcbi8vIH0pKTtcclxuXHJcbmFwcC5nZXQoJ2FwaS9pdGVtcycsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG5cclxuICAgIERCLmZpbmQgKCAoZXJyLCByZXN1bHQpID0+IHtcclxuICAgIFx0cmVzLnNlbmQgKHJlc3VsdCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuLy8gYXBwLnBvc3QoJy9hcGkvcGhvdG8nLGZ1bmN0aW9uKHJlcSxyZXMpIHtcclxuLy8gICAgIG5ld1Byb2QuaW1nLmRhdGEgPSBmcy5yZWFkRmlsZVN5bmMocmVxLmZpbGVzLnVzZXJQaG90by5wYXRoKVxyXG4vLyAgICAgbmV3UHJvZC5pbWcuY29udGVudFR5cGUgPSAnaW1hZ2UvcG5nJztcclxuLy8gICAgIC8vIG5ld1Byb2Quc2F2ZShjYik7XHJcbi8vIH1cclxuICAgXHJcbi8vIGFwcC5nZXQoJy9pbWFnZXMnLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuXHJcbi8vICAgICBEQi5maW5kICggKGVyciwgcmVzdWx0KSA9PiB7XHJcbi8vICAgICBcdHJlcy5zZW5kIChyZXN1bHQpO1xyXG4vLyAgICAgfSk7XHJcbi8vIH0pO1xyXG5cclxuXHJcbmxldCBwb3J0ID0gMzAwNDtcclxuXHJcbmFwcC5saXN0ZW4ocG9ydCwgZnVuY3Rpb24oKSB7XHJcbiAgY29uc29sZS5sb2coYGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcclxufSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vIl19