const express = require('express')

const router = express.Router()

router.get('/login', (req, res) => {
    console.log('Auth login');
})

router.get('/logout', (req, res) => {
    console.log('Auth logout');
})

router.get('/signup', (req, res) => {
    console.log('Auth signup');
})

module.exports = router