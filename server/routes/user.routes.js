const express = require('express')
const protectRoute = require('../middleware/protectRoute')
const getAllUsers = require('../controllers/user.controller')

const router = express.Router()

router.get('/', protectRoute, getAllUsers)

module.exports = router