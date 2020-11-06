function authentication (req, res, next) {
  if (req.headers.Authorization === process.env.AUTH_SECRET) {
    next()
  } else {
    res.status(403).send('Forbidden')
  }
}

module.exports = {
  authentication
}
