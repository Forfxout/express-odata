const mongoose = require('mongoose')

const Dish = new mongoose.Schema(
  {
    restaurantId: String,
    name: String,
    description: String,
    by: String,
    image: String,
    stock: Number,
    left: Number,
    step: Number,
    max: Number,
    min: Number,
    cost: Number,
    yelp: String,
    links: {
      instagram: String,
      facebook: String,
      linkedin: String,
      twitter: String
    }
  },
  { collection: 'Dishes' }
)

Dish.pre('save', function (next) {
  this.min = this.max - this.stock * this.step
  this.cost = this.max - (this.stock - this.left) * this.step
  next()
})

module.exports = mongoose.model('Dish', Dish)