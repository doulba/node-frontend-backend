const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 3600

const app = express()

app.use(express.json())

app.get('/api/users', (req, res) => {
    res.send({ msg: 'Hello World!'})
})

app.listen(PORT, () => {
    console.log(`Server is running : ${PORT}`)
})