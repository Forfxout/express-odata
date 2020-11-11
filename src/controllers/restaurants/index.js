const Dish = require('../../models/Dish')
const Restaurant = require('../../models/Restaurant')
const moment = require('moment-timezone')

const getRestaurantOfTheWeek = async function(req, res) {
  const restaurant = (await Restaurant.find({})).filter(x => moment(x.ends).local().isAfter(moment()))[0]
  
  if (!restaurant) {
    return res.status(404).json({ error: 'No restaurant found' })
  }

  console.log(restaurant.id)
  const dishes = await Dish.find({ restaurantId: restaurant.id }).exec()
  restaurant.dishes = dishes
  res.status(200).json(restaurant)
}

const getPastEvents = async function(req, res) {
  const restaurants = (await Restaurant.find({})).filter(x => moment(x.ends).local().isBefore(moment()))
  res.status(200).json(restaurants)
}

module.exports = {
  getRestaurantOfTheWeek,
  getPastEvents
}
