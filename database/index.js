const mongoose = require('mongoose');

const faker = require('faker');

mongoose.connect('mongodb://localhost/fetcher');

const shopsAvalAtArr = ['COSTCO', 'Wallmart', 'Target', 'FRYs Electronics', 'AdoramaCamera'];

const generatePriceFunc = () => {
  const a = Math.floor(Math.random() * Math.floor(5000));
  return faker.commerce.price(0.10, a, 2, '$');
};

const generateDeliveryCostFunc = () => {
  return 'Free delivery';
};

const generateRandomDate = (start, end) => {
  for (let i = 0; i < 100; i++) {
    const dateNew = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return dateNew;
  }
};

const generateDescFunc = () => {
  return (faker.commerce.productName());
};

const generateRatingNum = () => {
  return Math.floor(Math.random() * Math.floor(1000));
};

const generateShopSelect = () => {
  const max = shopsAvalAtArr.length;
  const indexNum = Math.floor(Math.random(0) * Math.floor(max));
  return shopsAvalAtArr[indexNum];
};

const imgPathArr = [];
const generateImagePath = () => {
  for (let i = 0; i < 90; i++) {
    const imgVar = `/images/image-${i}.jpg`;
    imgPathArr.push(imgVar);
  }
  return imgPathArr;
};
generateImagePath();

const itemList = [
  id: 1,
  itemId:1,
  imgPath: imgPathArr[91],
  price: '$2,349.0',
  deliveryCost: 'FREE delivery',
  dateOfDelivery: 19 days,
  desc: "Apple MacBook Pro 15.4 - Core 6GB RAM-256 GB SSD- Silver"
  rating: 2129,
  shopsAvalAt: AdoramaCamera,





];

const populateData = () => {
  for (let i = 7; i < 100; i++) {
    const item = {
      id: i,
      imgPath: imgPathArr[i],
      price: generatePriceFunc(),
      deliveryCost: generateDeliveryCostFunc(),
      dateOfDelivery: generateRandomDate(new Date(2012, 0, 1), new Date()),
      desc: generateDescFunc(),
      rating: generateRatingNum(),
      shopsAvalAt: generateShopSelect(),
    };
    itemList.concat(itemList(item));
  }
  return itemList;
};
populateData();

const prodSchema = mongoose.Schema({
  prodId: Number,
  price: String,
  deliveryCost: String,
  dateOfDelivery: String,
  desc: String,
  rating: Number,
  shopsAvalAt: String,
  img: String,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('we are connected!');
});

const Prod = mongoose.model('Prod', prodSchema);

const saveList = (itemData, cb) => {
  for (let i = 0; i < itemList.length; i++) {
    const newProd = new Prod({
      prodId: itemData[i].prodId,
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

//////////////prods



saveList(itemList, (err, product) => {
  if (err) {
    console.error(err);
  } else {
    // console.log('prod', product);
  }
});

const find = (paramId, callback) => {
  Prod.find({}).sort('-size').limit(5).exec(callback);
};

const findById = (paramId, callback) => {
    
  // db.prods.findOne( { id: paramId }  ).then(function(myDoc) {
  //     console.log('mydoc',myDoc);
  //     if (myDoc) {
  //   var prodAt = myDoc.filter(function(obj) {
  //       return obj.id === id;
  //   });
  // }

// });

  Prod.find({ id: paramId }).exec(callback);
};

module.exports.saveList = saveList;
module.exports.itemList = itemList;
module.exports.find = find;
module.exports.findById = findById;


