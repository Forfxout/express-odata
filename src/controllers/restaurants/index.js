const Dish = require('../../models/Dish')
const Restaurant = require('../../models/Restaurant')

const getRestaurant = async function(req, res, next) {
  const restaurant = (await Restaurant.find({}))[0]
  const dishes = await Dish.find().where('_id').in(restaurant.dishes.map(x => x._id)).exec()
  restaurant.dishes = dishes
  res.status(200).json(restaurant)
}

module.exports = {
  getRestaurant
}
