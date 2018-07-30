const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const DB = require('../database/index.js');

const app = express();

const port = 3004;

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

// app.use('/static', express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  console.log(`serving ${req.method} request at ${req.url}`);
  next();
});


app.get('/api/products/', (req, res) => { 
  DB.find((err, prods) => {
    if (err) {
      res.status(502).send(err);
    } else {
      res.send(prods);
    }
  });
});

app.get('/api/products/:prodId', (req, res) => {
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
