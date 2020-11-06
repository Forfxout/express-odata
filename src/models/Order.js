const mongoose = require('mongoose');

const order = new mongoose.Schema(
  {
    phone: {
      type: String
    },
    email: {
      type: String
    },
    address: {
      type: String
    },
    name: {
      type: String
    },
    order: {
      type: Array
    }
  },
  { collection: 'orders' }
)

module.exports = mongoose.model('order', order)
