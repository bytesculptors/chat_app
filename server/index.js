const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.routes')
const messageRoutes = require('./routes/message.routes')
const connectToMongoDB = require('./db/connectToMongoDB')

dotenv.config()
const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)

app.listen(port, () => {
    connectToMongoDB()
    console.log(`Server running on port ${port}`);
})