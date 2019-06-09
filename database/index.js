const mongoose = require('mongoose');



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

module.exports = db;
