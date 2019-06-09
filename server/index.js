const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const DB = require('../database/index.js');

const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/item/:prodId/', express.static(__dirname + '/../client/dist'));

app.use(express.static(__dirname + '/../client/dist'));

app.use((req, res, next) => {
  console.log(`serving ${req.method} request at ${req.url}`);
  next();
});


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
