const mongoose = require('mongoose');

const seed = require('../seed.js')

// mongoose.connect('mongodb://localhost/fetcher');
mongoose.connect('mongodb://database:27017/fetcher');

// exports.initializeMongo = function () {
//   mongoose.connect(DATABASE_CONNECTION);
// }

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('we are connected!');
});

const prodSchema = mongoose.Schema({
  prodId: Number,
  itemId: Number,
  price: String,
  deliveryCost: String,
  dateOfDelivery: String,
  desc: String,
  rating: Number,
  shopsAvalAt: String,
  img: String,
});

const Prod = mongoose.model('Prod', prodSchema);
const imgPathArr = seed.generateImagePath();
const data = seed.populateData();


const saveList = (itemData, cb) => {
  for (let i = 0; i < data.length; i++) {
    const newProd = new Prod({
      prodId: itemData[i].prodId,
      itemId: itemData[i].itemId,
      img: imgPathArr[i],
      price: itemData[i].price,
      deliveryCost: itemData[i].deliveryCost,
      dateOfDelivery: itemData[i].dateOfDelivery,
      desc: itemData[i].desc,
      rating: itemData[i].rating,
      shopsAvalAt: itemData[i].shopsAvalAt,
    });
    newProd.save(cb);
  }
};


saveList(data, (err, product) => {
  if (err) {
    console.error(err);
  } else {
    console.log('prod', product);
  }
});

const find = (paramId, callback) => {
  // Prod.find({}).sort('-size').limit(5).exec(callback);
  Prod.find({ "itemId": { $gt: paramId } }).limit(15).exec(callback);
};

// const findPrev = (paramId, callback) => {
//   // Prod.find({}).sort('-size').limit(5).exec(callback);
//   Prod.find({
//     "min" : {
//         $gte : paramId
//     }
// })
// };

const findById = (paramId, callback) => {   
  Prod.find( { "itemId" : paramId } ).limit(15).exec(callback);
};

module.exports.saveList = saveList;
module.exports.find = find;
module.exports.findById = findById;
