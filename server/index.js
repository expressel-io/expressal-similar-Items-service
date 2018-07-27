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
      res.status(502).send(err);
    } else {
      res.json(prods);
    }
  });
});

app.get('/api/prods/:prodId', (req, res) => {
  const productId = req.params.prodId;
  console.log('req', req.params);
  DB.findById(productId, (err) => {
    if (err) {
      res.status(502).send(err);
    } else {
    	console.log('server', productId)
      res.json(productId);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
