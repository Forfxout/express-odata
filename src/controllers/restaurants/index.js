const Restaurant = require('../../models/Restaurant')

const getRestaurant = async function(req, res, next) {
  const restaurant = await Restaurant.find({})
  res.status(200).json(restaurant[0])
}

module.exports = {
  getRestaurant
}
