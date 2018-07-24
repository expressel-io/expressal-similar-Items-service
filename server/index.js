const express = require('express');
const bodyParser = require('body-parser');
const DB = require('../database/index.js');
let app = express();

let port = 3004;


app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({extended: true}));


let MongoClient = require('mongodb').MongoClient;

app.use(express.static(__dirname + '/../client/dist'));


app.get('/api/prods', (req, res) => {
   console.log("what is this");
  DB.find ( (err, prods) => {
      if (err) {
      res.status(500).send(err);
    } else {
      res.json(prods);
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