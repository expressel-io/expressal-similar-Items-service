const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const DB = require('../database/index.js');

const app = express();

const port = 3004;

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.use('/static', express.static(path.join(__dirname, 'public')));


app.get('/api/prods', (req, res) => { 
  DB.find ( (err, prods) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(prods);
    }
  });
});

app.get('/api/products/:prodId', (req, res) => {
  const prodId = req.params.Id;
  DB.findById(prodId, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(prodId);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
