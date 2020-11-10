const mongoose = require('mongoose');

const Application = new mongoose.Schema(
  {
    location: String,
    phone: String,
    email: String,
    questions: Array
  },
  { collection: 'Application' }
)

module.exports = mongoose.model('Application', Application)
