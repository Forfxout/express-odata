const Dish = require('../../models/Dish')
const Order = require('../../models/Order')
const Restaurant = require('../../models/Restaurant')

// Checks if order count is less than dishes left
const checkOrder = async function(dish, count, stock) {
  return dish.left >= count
}

const addOrder = async function(req, res, next) {
  const order = new Order({ ...req.body })
  const dishes = await Dish.find().where('_id').in(order.order.map(x => x.id)).exec()

  if (dishes.map(dish => dish.left < order.order.filter(x => x.id === dish._id + '')[0].count).some(outOfStock => outOfStock)) {
    return res.status(400).json({ error: 'Dishes count in the order for one of the dishes is larger than in stock' })
  }

  for (let i = order.order.length; i--;) {
    let dish = (await Dish.find({ _id: order.order[i].id }))[0]
    
    if (!dish) {
      return res.status(400).json({ error: 'Unknown dish is selected' })
    }

    await Dish.updateOne(
      { _id: order.order[i].id },
      { $inc: { left: -order.order[i].count, cost: dish.step * -order.order[i].count },  },
      { upsert: true }
    )
  }

  await order.save()
  req.app.emit('new-order')
  res.status(400).json(await Dish.find({}).exec())
}

module.exports = {
  addOrder
}
