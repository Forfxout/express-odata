const mongoose = require('mongoose');
const { collection } = require('./Restaurant');
const uuid = require('uuid').v4

const dish = new mongoose.Schema(
  {
    name: {
      type: String
    },
    by: {
      type: String
    },
    image: {
      type: String
    },
    stock: {
      type: Number
    },
    left: {
      type: Number
    },
    step: {
      type: Number
    },
    price: {
      type: Number
    }
  },
  { collection: 'dishes' }
)

dish.virtual('cost')
  .get(function () {
    return price - (this.stock - this.left) * step 
  })

module.exports = mongoose.model('dish', dish)
