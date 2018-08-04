const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const DB = require('../database/index.js');

const app = express();
// app.use(cors());

// const port = 3004;
const port = 3000;

// DB.initializeMongo();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/item/:prodId/', express.static(__dirname + '/../client/dist'));

app.use(express.static(__dirname + '/../client/dist'));

app.use((req, res, next) => {
  console.log(`serving ${req.method} request at ${req.url}`);
  next();
});



// app.use('/static', express.static(path.join(__dirname, 'public')));




// app.get('/api/products/next/:prodId', (req, res) => { 
//     // DB.find((err, prods) => {
//     // if (err) {
//     //   res.status(502).send(err);
//     // } else {
//     //   res.send(prods);
//   const productId = parseInt(req.params.prodId);
//   DB.find(productId, (err, results) => {
//     if (err) {
//       res.status(502).send(err);
//     } else {
//       res.send(results);
//     }
//   });
// });

// app.get('/api/products/previous/:prodId', (req, res) => { 
//     // DB.find((err, prods) => {
//     // if (err) {
//     //   res.status(502).send(err);
//     // } else {
//     //   res.send(prods);
//   const productId = parseInt(req.params.prodId);
//   DB.findPrev(productId, (err, results) => {
//     if (err) {
//       res.status(502).send(err);
//     } else {
//       res.send(results);
//     }
//   });
// });
// app.get('/products/*', (req,res) => {
//       res.sendfile(path.join(__dirname, '../client/dist/index.html'));
//     });

app.get('/api/item/:prodId', (req, res) => {
  const productId = parseInt(req.params.prodId);
  DB.findById(productId, (err, results) => {
    if (err) {
      res.status(502).send(err);
    } else {
      res.send(results);
    }
  });

});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
