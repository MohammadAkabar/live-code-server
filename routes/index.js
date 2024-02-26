const express = require('express')
const router = express.Router()
const userRoutes = require('./user') 

router.use('/api/v1/user', userRoutes)

module.exports = router
