const Order = require('../../models/Order')

const addOrder = async function(req, res, next) {
  try {
    const order = new Order({ ...req.body })
    await order.save()
    res.status(400).json({ status: 'Success' })
  } catch (e) {
    res.status(400).json({ status: 'Bad Request' })
  }
}

module.exports = {
  addOrder
}
