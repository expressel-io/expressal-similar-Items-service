const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const DB = require('../database/index.js');

const app = express();

const port = 3004;


app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));


// const MongoClient = require('mongodb').MongoClient;

app.use(express.static(__dirname + '/../client/dist'));

app.use('/static', express.static(path.join(__dirname, 'public')))


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
  DB.find ( (err, prods) => {
      if (err) {
      res.status(500).send(err);
    } else {
      res.json(prodId);
    }
  });
});






app.listen(port, function() {
  console.log(`listening on port ${port}`);
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