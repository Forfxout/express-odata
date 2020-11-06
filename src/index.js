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
  mockRestaurant = require('./constants').restaurant,
  mockApplication = require('./constants').application,
  routes = require('./routes/v1');

app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use('/v1', routes)

async function seed () {
  const restaurant = new Restaurant({ ...mockRestaurant })
  await restaurant.save()
  
  const info = new Application({ ...mockApplication })
  await info.save()
  
  console.log('Seed successfull')
}

async function main () {
  dotenv.config()
  const uri = `mongodb://${process.env.MONGO_DATABASE_USERNAME}:${process.env.MONGO_DATABASE_PASSWORD}@db:${process.env.MONGO_DATABASE_PORT}/${process.env.MONGO_DATABASE_NAME}?authSource=admin`
  
  await app.listen(process.env.APP_PORT)
  try {
    await mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, connectTimeoutMS: 5000 })
    console.log(`App is running on port ${process.env.APP_PORT}`)
  } catch (e) {
    console.log(e)
  }

  await seed()
}

main()
