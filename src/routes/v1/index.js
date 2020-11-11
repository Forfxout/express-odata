const router = require('express').Router()

const { 
  getRestaurantOfTheWeek,
  getPastEvents
} = require('../../controllers/restaurants')

const {
  addOrder,
} = require('../../controllers/orders')

const {
  getInfo
} = require('../../controllers/application')

router.route('/info')
  .get(getInfo)        

router.route('/events/past')
  .get(getPastEvents)

router.route('/restaurant/week')
  .get(getRestaurantOfTheWeek)

router.route('/orders')
  .post(addOrder)

module.exports = router
