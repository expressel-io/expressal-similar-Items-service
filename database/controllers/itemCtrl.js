
const models = require('../models/itemsModel.js');

const seed = require('../../seed.js')

const imgPathArr = seed.generateImagePath();
const data = seed.populateData();


const saveList = (itemData, cb) => {
  for (let i = 0; i < data.length; i++) {
    const newProd = new models.Prod({
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


models.Prod.saveList(data, (err, product) => {
  if (err) {
    console.error(err);
  } else {
    console.log('prod', product);
  }
});

const find = (paramId, callback) => {
  // Prod.find({}).sort('-size').limit(5).exec(callback);
  models.Prod.find({ "itemId": { $gt: paramId } }).limit(15).exec(callback);
};



const findById = (paramId, callback) => {   
  models.Prod.find( { "itemId" : paramId } ).limit(15).exec(callback);
};

module.exports.saveList = saveList;
module.exports.find = find;
module.exports.findById = findById;
