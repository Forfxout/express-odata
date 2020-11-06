const Application = require('../../models/Application')

async function getInfo (req, res) {
  const info = await Application.find({})
  res.status(200).json(info[0])
}

module.exports = {
  getInfo
}
