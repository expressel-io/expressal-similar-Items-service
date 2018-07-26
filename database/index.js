const mongoose = require('mongoose');

const faker = require('faker');

mongoose.connect('mongodb://localhost/fetcher');

const shopsAvalAtArr = ['COSTCO', 'Wallmart', 'Target', 'FRYs Electronics', 'AdoramaCamera'];

const generatePriceFunc = function () {
  const a = Math.floor(Math.random() * Math.floor(5000));
  return faker.commerce.price(0.10, a, 2, '$');
};

const generateDeliveryCostFunc = function () {
  return 'Free delivery';
};

const generateRandomDate = function (start, end) {
  for (let i = 0; i < 100; i++) {
    const dateNew = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return dateNew;
  }
};

const generateDescFunc = function () {
  return (faker.commerce.productName());
};

const generateRatingNum = function () {
  return Math.floor(Math.random() * Math.floor(1000));
};

const generateShopSelect = function () {
  const max = shopsAvalAtArr.length;
  const indexNum = Math.floor(Math.random(0) * Math.floor(max));
  return shopsAvalAtArr[indexNum];
};

const imgPathArr = [];
const generateImagePath = function () {
  for (let i = 0; i < 90; i++) {
    const imgVar = `/images/image-${i}.jpg`;
    imgPathArr.push(imgVar);
  }
  return imgPathArr;
};
generateImagePath();

const itemList = [];

const populateData = function () {
  for (let i = 1; i < 100; i++) {
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
    itemList.push(item);
  }
  return itemList;
};
populateData();

const prodSchema = mongoose.Schema({
  id: Number,
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
      id: itemData[i].id,
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

saveList(itemList, (err, product) => {
  if (err) {
    console.error(err);
  } else {
    console.log('prod', product);
  }
});

const find = (callback) => {
  Prod.find({}).sort('-size').limit(5).exec(callback);
};

module.exports.saveList = saveList;
module.exports.itemList = itemList;
module.exports.find = find;


