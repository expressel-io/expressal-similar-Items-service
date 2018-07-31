'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var DB = require('../database/index.js');

var app = express();

var port = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

// app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  console.log('serving ' + req.method + ' request at ' + req.url);
  next();
});

app.get('/api/products/next/:prodId', function (req, res) {
  // DB.find((err, prods) => {
  // if (err) {
  //   res.status(502).send(err);
  // } else {
  //   res.send(prods);
  var productId = parseInt(req.params.prodId);
  DB.find(productId, function (err, results) {
    if (err) {
      res.status(502).send(err);
    } else {
      res.send(results);
    }
  });
});

app.get('/api/products/previous/:prodId', function (req, res) {
  // DB.find((err, prods) => {
  // if (err) {
  //   res.status(502).send(err);
  // } else {
  //   res.send(prods);
  var productId = parseInt(req.params.prodId);
  DB.findPrev(productId, function (err, results) {
    if (err) {
      res.status(502).send(err);
    } else {
      res.send(results);
    }
  });
});

app.get('/api/products/:prodId', function (req, res) {
  var productId = parseInt(req.params.prodId);
  DB.findById(productId, function (err, results) {
    if (err) {
      res.status(502).send(err);
    } else {
      res.send(results);
    }
  });
});

app.listen(port, function () {
  console.log('listening on port ' + port);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImJvZHlQYXJzZXIiLCJwYXRoIiwiREIiLCJhcHAiLCJwb3J0IiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInN0YXRpYyIsIl9fZGlybmFtZSIsInJlcSIsInJlcyIsIm5leHQiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwidXJsIiwiZ2V0IiwicHJvZHVjdElkIiwicGFyc2VJbnQiLCJwYXJhbXMiLCJwcm9kSWQiLCJmaW5kIiwiZXJyIiwicmVzdWx0cyIsInN0YXR1cyIsInNlbmQiLCJmaW5kUHJldiIsImZpbmRCeUlkIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFVBQVVDLFFBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1DLGFBQWFELFFBQVEsYUFBUixDQUFuQjtBQUNBLElBQU1FLE9BQU9GLFFBQVEsTUFBUixDQUFiO0FBQ0EsSUFBTUcsS0FBS0gsUUFBUSxzQkFBUixDQUFYOztBQUVBLElBQU1JLE1BQU1MLFNBQVo7O0FBRUEsSUFBTU0sT0FBTyxJQUFiOztBQUVBRCxJQUFJRSxHQUFKLENBQVFMLFdBQVdNLElBQVgsRUFBUjtBQUNBSCxJQUFJRSxHQUFKLENBQVFMLFdBQVdPLFVBQVgsQ0FBc0IsRUFBRUMsVUFBVSxJQUFaLEVBQXRCLENBQVI7O0FBRUFMLElBQUlFLEdBQUosQ0FBUVAsUUFBUVcsTUFBUixDQUFlQyxZQUFZLGlCQUEzQixDQUFSOztBQUVBOztBQUVBUCxJQUFJRSxHQUFKLENBQVEsVUFBQ00sR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsRUFBb0I7QUFDMUJDLFVBQVFDLEdBQVIsY0FBdUJKLElBQUlLLE1BQTNCLG9CQUFnREwsSUFBSU0sR0FBcEQ7QUFDQUo7QUFDRCxDQUhEOztBQU1BVixJQUFJZSxHQUFKLENBQVEsNEJBQVIsRUFBc0MsVUFBQ1AsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNGLE1BQU1PLFlBQVlDLFNBQVNULElBQUlVLE1BQUosQ0FBV0MsTUFBcEIsQ0FBbEI7QUFDQXBCLEtBQUdxQixJQUFILENBQVFKLFNBQVIsRUFBbUIsVUFBQ0ssR0FBRCxFQUFNQyxPQUFOLEVBQWtCO0FBQ25DLFFBQUlELEdBQUosRUFBUztBQUNQWixVQUFJYyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJILEdBQXJCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xaLFVBQUllLElBQUosQ0FBU0YsT0FBVDtBQUNEO0FBQ0YsR0FORDtBQU9ELENBZEQ7O0FBZ0JBdEIsSUFBSWUsR0FBSixDQUFRLGdDQUFSLEVBQTBDLFVBQUNQLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRixNQUFNTyxZQUFZQyxTQUFTVCxJQUFJVSxNQUFKLENBQVdDLE1BQXBCLENBQWxCO0FBQ0FwQixLQUFHMEIsUUFBSCxDQUFZVCxTQUFaLEVBQXVCLFVBQUNLLEdBQUQsRUFBTUMsT0FBTixFQUFrQjtBQUN2QyxRQUFJRCxHQUFKLEVBQVM7QUFDUFosVUFBSWMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSCxHQUFyQjtBQUNELEtBRkQsTUFFTztBQUNMWixVQUFJZSxJQUFKLENBQVNGLE9BQVQ7QUFDRDtBQUNGLEdBTkQ7QUFPRCxDQWREOztBQWdCQXRCLElBQUllLEdBQUosQ0FBUSx1QkFBUixFQUFpQyxVQUFDUCxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUM3QyxNQUFNTyxZQUFZQyxTQUFTVCxJQUFJVSxNQUFKLENBQVdDLE1BQXBCLENBQWxCO0FBQ0FwQixLQUFHMkIsUUFBSCxDQUFZVixTQUFaLEVBQXVCLFVBQUNLLEdBQUQsRUFBTUMsT0FBTixFQUFrQjtBQUN2QyxRQUFJRCxHQUFKLEVBQVM7QUFDUFosVUFBSWMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSCxHQUFyQjtBQUNELEtBRkQsTUFFTztBQUNMWixVQUFJZSxJQUFKLENBQVNGLE9BQVQ7QUFDRDtBQUNGLEdBTkQ7QUFRRCxDQVZEOztBQVlBdEIsSUFBSTJCLE1BQUosQ0FBVzFCLElBQVgsRUFBaUIsWUFBTTtBQUNyQlUsVUFBUUMsR0FBUix3QkFBaUNYLElBQWpDO0FBQ0QsQ0FGRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBEQiA9IHJlcXVpcmUoJy4uL2RhdGFiYXNlL2luZGV4LmpzJyk7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuY29uc3QgcG9ydCA9IDMwMDQ7XG5cbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoX19kaXJuYW1lICsgJy8uLi9jbGllbnQvZGlzdCcpKTtcblxuLy8gYXBwLnVzZSgnL3N0YXRpYycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICdwdWJsaWMnKSkpO1xuXG5hcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zb2xlLmxvZyhgc2VydmluZyAke3JlcS5tZXRob2R9IHJlcXVlc3QgYXQgJHtyZXEudXJsfWApO1xuICBuZXh0KCk7XG59KTtcblxuXG5hcHAuZ2V0KCcvYXBpL3Byb2R1Y3RzL25leHQvOnByb2RJZCcsIChyZXEsIHJlcykgPT4geyBcbiAgICAvLyBEQi5maW5kKChlcnIsIHByb2RzKSA9PiB7XG4gICAgLy8gaWYgKGVycikge1xuICAgIC8vICAgcmVzLnN0YXR1cyg1MDIpLnNlbmQoZXJyKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgcmVzLnNlbmQocHJvZHMpO1xuICBjb25zdCBwcm9kdWN0SWQgPSBwYXJzZUludChyZXEucGFyYW1zLnByb2RJZCk7XG4gIERCLmZpbmQocHJvZHVjdElkLCAoZXJyLCByZXN1bHRzKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgcmVzLnN0YXR1cyg1MDIpLnNlbmQoZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnNlbmQocmVzdWx0cyk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5hcHAuZ2V0KCcvYXBpL3Byb2R1Y3RzL3ByZXZpb3VzLzpwcm9kSWQnLCAocmVxLCByZXMpID0+IHsgXG4gICAgLy8gREIuZmluZCgoZXJyLCBwcm9kcykgPT4ge1xuICAgIC8vIGlmIChlcnIpIHtcbiAgICAvLyAgIHJlcy5zdGF0dXMoNTAyKS5zZW5kKGVycik7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHJlcy5zZW5kKHByb2RzKTtcbiAgY29uc3QgcHJvZHVjdElkID0gcGFyc2VJbnQocmVxLnBhcmFtcy5wcm9kSWQpO1xuICBEQi5maW5kUHJldihwcm9kdWN0SWQsIChlcnIsIHJlc3VsdHMpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMikuc2VuZChlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMuc2VuZChyZXN1bHRzKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmFwcC5nZXQoJy9hcGkvcHJvZHVjdHMvOnByb2RJZCcsIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBwcm9kdWN0SWQgPSBwYXJzZUludChyZXEucGFyYW1zLnByb2RJZCk7XG4gIERCLmZpbmRCeUlkKHByb2R1Y3RJZCwgKGVyciwgcmVzdWx0cykgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAyKS5zZW5kKGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5zZW5kKHJlc3VsdHMpO1xuICAgIH1cbiAgfSk7XG5cbn0pO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pO1xuIl19