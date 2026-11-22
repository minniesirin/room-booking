require('dotenv').config()
const express = require('express')
const cors = require('cors')
const indexRouter = require('./routes')

const app = express()
const corsOption = {
    origin: process.env.FRONTEND_URL
}

app.use(cors(corsOption))
app.use(express.json())

app.use('/', indexRouter)

app.listen(process.env.PORT, () => {
    console.log('Server started successfully')
})