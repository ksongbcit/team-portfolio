const express = require('express')
// const mongoose = require('mongoose')

const port = 5000
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening...`)
})