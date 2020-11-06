const mongoose = require('mongoose');
const { collection } = require('./Restaurant');
const uuid = require('uuid').v4

const application = new mongoose.Schema(
  {
    location: {
      type: String
    },
    phone: {
      type: String
    },
    email: {
      type: String
    },
    questions: {
      type: Array
    }
  },
  { collection: 'application' }
)

module.exports = mongoose.model('application', application)
