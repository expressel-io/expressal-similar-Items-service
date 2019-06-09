const mongoose = require('mongoose');

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

module.exports = {
	Prod,
};