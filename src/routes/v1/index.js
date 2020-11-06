const router = require('express').Router()

const { 
  getRestaurant
} = require('../../controllers/restaurants')

const {
  addOrder,
} = require('../../controllers/orders')

const {
  getInfo
} = require('../../controllers/application')

router.route('/info')
  .get(getInfo)        

router.route('/restaurant/week')
  .get(getRestaurant)

router.route('/orders')
  .post(addOrder)

module.exports = router
