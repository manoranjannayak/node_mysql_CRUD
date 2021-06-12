const express = require('express')
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
require('dotenv').config()

const port = process.env.PORT || 5000

require('./config/db')

const Routes = require('./routes/index')
app.use('/', Routes)

app.listen(port, () => {
    console.log('server listen on :',port);
})
