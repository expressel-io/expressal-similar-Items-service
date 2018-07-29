const faker = require('faker');

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

module.exports.itemList = itemList;
module.exports.populateData = populateData;
module.exports.generateImagePath = generateImagePath;
//paths for mac book
//https://lh3.googleusercontent.com/proxy/3CBN6gHFXGzywV_aE7PTR_ybV4wT0stv_zf2kFyGCuYEs9kVNnamDw-zfCEOXFnXZHl-lsJcmEcWfBJU1vghilh7uzSeqvRnFOf8CJ3oiea8cxpWLM-z47szzQm8jkwVyFcXWtNnYmrCAeneXj8yLujxwRdS3ywmffYZdQ-pIwGvFEZHcw=s180-pd-e365-rw-pc0xffffff
//https://lh3.googleusercontent.com/proxy/xkwF1N8HSj8A5Cn2NNxcSJnQ2rnMB9gFds5Cirf1aEbySWjKSaUCQiRsMbJ4mBjVmZBc1UHnyJjqpopwYkZOkG_zRscc38OrUgVs52-ZTn2LLm5uKF29WMPqJ6SKEgJrf7POIw_rQx8e4KDuh-AAtrsUCSB5DLmaSHrjT1AHD3jsz_65V4g=s180-pd-e365-rw-pc0xffffff
//https://lh3.googleusercontent.com/proxy/xkwF1N8HSj8A5Cn2NNxcSJnQ2rnMB9gFds5Cirf1aEbySWjKSaUCQiRsMbJ4mBjVmZBc1UHnyJjqpopwYkZOkG_zRscc38OrUgVs52-ZTn2LLm5uKF29WMPqJ6SKEgJrf7POIw_rQx8e4KDuh-AAtrsUCSB5DLmaSHrjT1AHD3jsz_65V4g=s180-pd-e365-rw-pc0xffffff
//https://lh3.googleusercontent.com/proxy/unfvzely7bh00Qax4Ne1RyC-Aax-FB5cDFW8E2Hgz18w6roJNv136JyLqKbJZS-nRrTMCXtsgwxEM1XH7YLuxf3rsl2_R7P75qRM7HyaJsUmefNS_bgvy4oog7Tkj44ZT0vDy8B2pZ5FX6qtC3Les-hBtKwBLGo7bBpljt8gr8JbB_fltA6p4g-xDGv_B0HLqC4VzXKa9EJhdPbvfXq3=s180-pd-e365-rw-pc0xffffff