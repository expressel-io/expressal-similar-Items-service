// const faker = require('faker');

// const shopsAvalAtArr = ['COSTCO', 'Wallmart', 'Target', 'FRYs Electronics', 'AdoramaCamera'];
// const generatePriceFunc = function() {
//   const a = Math.floor(Math.random() * Math.floor(5000));
//   return faker.commerce.price(0.10, a, 2, '$');
// }; 

// const generateDeliveryCostFunc = function() {
//   return 'Free delivery';
// };

// const generateRandomDate = function(start, end) {
//   for (let i = 0; i < 100; i++) {
//     const dateNew = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
//     return dateNew;
//   }
// };   

// const generateDescFunc = function() {
//   return (faker.commerce.productName());
// };

// const generateRatingNum = function() {
//   return Math.floor(Math.random() * Math.floor(1000));
// };

// const generateShopSelect = function () {
//   const max = shopsAvalAtArr.length
//   const indexNum = Math.floor(Math.random(0) * Math.floor(max));
//   return shopsAvalAtArr[indexNum];
// };
// const imgPathArr = [];
// const generateImagePath = function() {
//   for (let i = 0; i < 90; i++) {
//     const imgVar = '\/' + 'images' + '\/' + 'image-' + i + '.jpg'; 
//     imgPathArr.push(imgVar);
//   }
//   return imgPathArr;
// };
// generateImagePath();  
// const itemList = [];
// const populateData = function() {
//   for (let i = 1; i < 100; i++) {
//     let item = {
//       id: i,
//       imgPath: imgPathArr[i],
//       price: generatePriceFunc(),
//       deliveryCost: generateDeliveryCostFunc(),
//       dateOfDelivery: generateRandomDate(new Date(2012, 0, 1), new Date()),
//       desc: generateDescFunc(),
//       rating: generateRatingNum(),
//       shopsAvalAt: generateShopSelect()
//     }
//     itemList.push(item);
//   }
//   return itemList;
// }
// populateData();


// module.exports.populateData = populateData;
// module.exports.itemList = itemList;



