const express = require('express')
const sendMessages = require('../controllers/message.controller')

const router = express.Router()
router.post('/send/:id', sendMessages)


module.exports = router