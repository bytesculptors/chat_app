const express = require('express')
const dotenv = require('dotenv')
const authRoutes = require('./routes/auth.routes')

dotenv.config()
const port = process.env.PORT || 5000
const app = express()

app.use('/api/auth', authRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})