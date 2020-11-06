const mongoose = require('mongoose');
const { collection } = require('./Dish');
const uuid = require('uuid').v4

const restaurant = new mongoose.Schema(
  {
    id: {
      type: String,
      default: '0'
    },
    name: {
      type: String
    },
    description: {
      type: String
    },
    ends: {
      type: String
    },
    dishes: {
      type: Array
    },
    location: {
      type: String
    },
    image: {
      type: String
    }
  },
  { collation: 'Restaurants' }
)

module.exports = mongoose.model('restaurant', restaurant)
