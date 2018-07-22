const express = require('express');
let app = express();
const axios = require ('axios');
//var fs = require('fs');
//const DB = require('../database/index.js');
// const Repos = require('../helpers/github.js');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());



var MongoClient = require('mongodb').MongoClient

console.log('I am here');

app.use(express.static(__dirname + '/../client/dist'));

// app.use(multer({ dest: ‘./uploads/’,
//  rename: function (fieldname, filename) {
//    return filename;
//  },
// }));

app.get('/images', function (req, res) {

    DB.find ( (err, result) => {
    	res.send (result);
    });
});


// app.post('/api/photo',function(req,res) {
//     newProd.img.data = fs.readFileSync(req.files.userPhoto.path)
//     newProd.img.contentType = 'image/png';
//     // newProd.save(cb);
// }
   
app.get('/images', function (req, res) {

    DB.find ( (err, result) => {
    	res.send (result);
    });
});


let port = 3004;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

////////////////