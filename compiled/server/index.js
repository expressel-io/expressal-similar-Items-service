'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var DB = require('../database/index.js');
var app = express();

var port = 3004;

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

var MongoClient = require('mongodb').MongoClient;

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/prods', function (req, res) {
  console.log("what is this");
  DB.find(function (err, prods) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(prods);
    }
  });
});

app.listen(port, function () {
  console.log('listening on port ' + port);
});

////////////////

// app.use(multer({ dest: ‘./uploads/’,
//  rename: function (fieldname, filename) {
//    return filename;
//  },
// }));


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


//var fs = require('fs');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImJvZHlQYXJzZXIiLCJEQiIsImFwcCIsInBvcnQiLCJ1c2UiLCJqc29uIiwidHlwZSIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsIk1vbmdvQ2xpZW50Iiwic3RhdGljIiwiX19kaXJuYW1lIiwiZ2V0IiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImZpbmQiLCJlcnIiLCJwcm9kcyIsInN0YXR1cyIsInNlbmQiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsVUFBVUMsUUFBUSxTQUFSLENBQWhCO0FBQ0EsSUFBTUMsYUFBYUQsUUFBUSxhQUFSLENBQW5CO0FBQ0EsSUFBTUUsS0FBS0YsUUFBUSxzQkFBUixDQUFYO0FBQ0EsSUFBSUcsTUFBTUosU0FBVjs7QUFFQSxJQUFJSyxPQUFPLElBQVg7O0FBR0FELElBQUlFLEdBQUosQ0FBUUosV0FBV0ssSUFBWCxDQUFnQixFQUFFQyxNQUFNLGtCQUFSLEVBQWhCLENBQVI7QUFDQUosSUFBSUUsR0FBSixDQUFRSixXQUFXTyxVQUFYLENBQXNCLEVBQUNDLFVBQVUsSUFBWCxFQUF0QixDQUFSOztBQUdBLElBQUlDLGNBQWNWLFFBQVEsU0FBUixFQUFtQlUsV0FBckM7O0FBRUFQLElBQUlFLEdBQUosQ0FBUU4sUUFBUVksTUFBUixDQUFlQyxZQUFZLGlCQUEzQixDQUFSOztBQUdBVCxJQUFJVSxHQUFKLENBQVEsWUFBUixFQUFzQixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNqQ0MsVUFBUUMsR0FBUixDQUFZLGNBQVo7QUFDRGYsS0FBR2dCLElBQUgsQ0FBVSxVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDdEIsUUFBSUQsR0FBSixFQUFTO0FBQ1RKLFVBQUlNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkgsR0FBckI7QUFDRCxLQUZDLE1BRUs7QUFDTEosVUFBSVQsSUFBSixDQUFTYyxLQUFUO0FBQ0Q7QUFDRixHQU5EO0FBT0QsQ0FURDs7QUFXQWpCLElBQUlvQixNQUFKLENBQVduQixJQUFYLEVBQWlCLFlBQVc7QUFDMUJZLFVBQVFDLEdBQVIsd0JBQWlDYixJQUFqQztBQUNELENBRkQ7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xyXG5jb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcclxuY29uc3QgREIgPSByZXF1aXJlKCcuLi9kYXRhYmFzZS9pbmRleC5qcycpO1xyXG5sZXQgYXBwID0gZXhwcmVzcygpO1xyXG5cclxubGV0IHBvcnQgPSAzMDA0O1xyXG5cclxuXHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKHsgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nIH0pKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe2V4dGVuZGVkOiB0cnVlfSkpO1xyXG5cclxuXHJcbmxldCBNb25nb0NsaWVudCA9IHJlcXVpcmUoJ21vbmdvZGInKS5Nb25nb0NsaWVudDtcclxuXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoX19kaXJuYW1lICsgJy8uLi9jbGllbnQvZGlzdCcpKTtcclxuXHJcblxyXG5hcHAuZ2V0KCcvYXBpL3Byb2RzJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIGNvbnNvbGUubG9nKFwid2hhdCBpcyB0aGlzXCIpO1xyXG4gIERCLmZpbmQgKCAoZXJyLCBwcm9kcykgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMuanNvbihwcm9kcyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuYXBwLmxpc3Rlbihwb3J0LCBmdW5jdGlvbigpIHtcclxuICBjb25zb2xlLmxvZyhgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xyXG59KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIGFwcC51c2UobXVsdGVyKHsgZGVzdDog4oCYLi91cGxvYWRzL+KAmSxcclxuLy8gIHJlbmFtZTogZnVuY3Rpb24gKGZpZWxkbmFtZSwgZmlsZW5hbWUpIHtcclxuLy8gICAgcmV0dXJuIGZpbGVuYW1lO1xyXG4vLyAgfSxcclxuLy8gfSkpO1xyXG5cclxuXHJcbi8vIGFwcC5wb3N0KCcvYXBpL3Bob3RvJyxmdW5jdGlvbihyZXEscmVzKSB7XHJcbi8vICAgICBuZXdQcm9kLmltZy5kYXRhID0gZnMucmVhZEZpbGVTeW5jKHJlcS5maWxlcy51c2VyUGhvdG8ucGF0aClcclxuLy8gICAgIG5ld1Byb2QuaW1nLmNvbnRlbnRUeXBlID0gJ2ltYWdlL3BuZyc7XHJcbi8vICAgICAvLyBuZXdQcm9kLnNhdmUoY2IpO1xyXG4vLyB9XHJcbiAgIFxyXG4vLyBhcHAuZ2V0KCcvaW1hZ2VzJywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcblxyXG4vLyAgICAgREIuZmluZCAoIChlcnIsIHJlc3VsdCkgPT4ge1xyXG4vLyAgICAgXHRyZXMuc2VuZCAocmVzdWx0KTtcclxuLy8gICAgIH0pO1xyXG4vLyB9KTtcclxuXHJcblxyXG5cclxuLy92YXIgZnMgPSByZXF1aXJlKCdmcycpOyJdfQ==