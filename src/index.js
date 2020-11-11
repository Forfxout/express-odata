// External dependencies
const
  dotenv = require('dotenv'),
  mongoose = require('mongoose'),
  bodyparser = require('body-parser'),
  express = require('express'),
  cors = require('cors');

const 
  app = express(),
  Restaurant = require('./models/Restaurant'),
  Application = require('./models/Application'),
  Dish = require('./models/Dish'),
  Order = require('./models/Order'),
  mockRestaurants = require('./constants').restaurants,
  mockApplication = require('./constants').application,
  mockDishes = require('./constants').dishes,
  expressWs = require('express-ws')(app),
  routes = require('./routes/v1');

mongoose.set('useFindAndModify', false);
app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use('/v1', routes)

async function seed () {
  for(let i = mockRestaurants.length; i--;) {
    await Restaurant.create({ ...mockRestaurants[i] })
  }
  
  for(let i = mockDishes.length; i--;) {
    await Dish.create({ ...mockDishes[i] })
  }

  const info = new Application({ ...mockApplication })
  await info.save()
}

async function main () {
  dotenv.config()
  const uri = `mongodb://${process.env.MONGO_DATABASE_USERNAME}:${process.env.MONGO_DATABASE_PASSWORD}@db:${process.env.MONGO_DATABASE_PORT}/${process.env.MONGO_DATABASE_NAME}?authSource=admin`
  
  await app.listen(process.env.APP_PORT)
  await mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, connectTimeoutMS: 5000 })
  await seed()
  
  console.log(`App is running on port ${process.env.APP_PORT}`)
  
  app.ws('/echo', function(ws, req) {
    req.app.on('new-order', async function (id) {
      Dish.find({ restaurantId: id }).then((data) => {
        ws.send(JSON.stringify(data))
      })
    })

    ws.send('connected')
  })
}

main()
