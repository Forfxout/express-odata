const mongoose = require('mongoose');

const Restaurant = new mongoose.Schema(
  {
    id: String,
    name: String,
    description: String,
    ends: String,
    dishes: Array,
    location: String,
    yelp: String,
    image: String
  },
  { collection: 'Restaurants' }
)

module.exports = mongoose.model('Restaurant', Restaurant)
