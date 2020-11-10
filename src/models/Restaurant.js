const mongoose = require('mongoose');

const Restaurant = new mongoose.Schema(
  {
    name: String,
    description: String,
    ends: String,
    dishes: Array,
    location: String,
    image: String
  },
  { collection: 'Restaurants' }
)

module.exports = mongoose.model('Restaurant', Restaurant)
