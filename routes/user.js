const express = require('express')
const router = express.Router()
const { getUsers, addUsers } = require('../controller/userControllers')

// endpoint
router.get('/:id', getUsers)
router.post('/', addUsers)

module.exports = router
