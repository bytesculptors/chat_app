const express = require('express')
const dotenv = require('dotenv')
const authRoutes = require('./routes/auth.routes')
const connectToMongoDB = require('./db/connectToMongoDB')

dotenv.config()
const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use('/api/auth', authRoutes)

app.listen(port, () => {
    connectToMongoDB()
    console.log(`Server running on port ${port}`);
})