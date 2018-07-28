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

let itemList = [
  {
    id: 0,
    itemId: 1,
    imgPath: 'imgPathArr[0]',
    price: '$2,349.00',
    deliveryCost: 'FREE delivery',
    dateOfDelivery: '19 days',
    desc: 'Apple MacBook Pro 15.4 - Core 6GB RAM-256 GB SSD- Silver',
    rating: 2129,
    shopsAvalAt: 'AdoramaCamera',
  },
  {
    id: 1,
    itemId: 1,
    imgPath: imgPathArr[1],
    price: '$2,399.0 ',
    deliveryCost: 'FREE delivery',
    dateOfDelivery: '19 days',
    desc: 'Apple MacBook Pro B- Silver- AMD Radeon Pro 555X',
    rating: 1,
    shopsAvalAt: 'AdoramaCamera',
  },
  {
    id: 2,
    itemId: 1,
    imgPath: imgPathArr[2],
    price: '$2,799.0 ',
    deliveryCost: 'FREE delivery',
    dateOfDelivery: '19 days',
    desc: 'Apple MacBook Pro with AMD Radeon Pro 555X',
    rating: 1,
    shopsAvalAt: 'AdoramaCamera',
  },
  {
    id: 3,
    itemId: 1,
    imgPath: imgPathArr[3],
    price: '$2,799.0 ',
    deliveryCost: 'FREE delivery',
    dateOfDelivery: '19 days',
    desc: 'Apple MacBook Pro 13.3"-Core RAM 256 GB SSD- Space Gray',
    rating: 8630,
    shopsAvalAt: 'AdoramaCamera',
  },
  {
    id: 4,
    itemId: 1,
    imgPath: imgPathArr[4],
    price: '$1,799.0 ',
    deliveryCost: 'FREE delivery',
    dateOfDelivery: '19 days',
    desc: 'Apple MacBook Pro with Touch B-8GB RAM 256 GB SSD-Silver',
    rating: 8630,
    shopsAvalAt: 'AdoramaCamera',
  },
  {
    id: 5,
    itemId: 1,
    imgPath: imgPathArr[5],
    price: '$1,799.0 ',
    deliveryCost: 'FREE delivery',
    dateOfDelivery: '19 days',
    desc: 'Apple MacBook Pro with Touch B-8GB RAM 256 GB SSD-Silver',
    rating: 8630,
    shopsAvalAt: 'AdoramaCamera',
  },
];

const populateData = () => {
  for (let i = 6; i < 100; i++) {
    const item = {
      id: i,
      itemId: i,
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

const findById = (paramId, callback) => {   
  Prod.find( { "itemId" : paramId } ).limit(5).exec(callback);
};

module.exports.saveList = saveList;
module.exports.itemList = itemList;
module.exports.find = find;
module.exports.findById = findById;
