const mongoose = require('mongoose');

const Order = new mongoose.Schema(
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
  { collection: 'Orders' }
)

module.exports = mongoose.model('Order', Order)
