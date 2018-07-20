const express = require('express');
let app = express();
var fs = require('fs');
const DB = require('../database/index.js');
// const Repos = require('../helpers/github.js');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());



var MongoClient = require('mongodb').MongoClient


app.use(express.static(__dirname + '/../client/dist'));

// app.use(multer({ dest: ‘./uploads/’,
//  rename: function (fieldname, filename) {
//    return filename;
//  },
// }));

app.get('/repos', function (req, res) {


});


// app.post('/api/photo',function(req,res) {
//     newProd.img.data = fs.readFileSync(req.files.userPhoto.path)
//     newProd.img.contentType = 'image/png';
//     // newProd.save(cb);
// }
   


let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

////////////////