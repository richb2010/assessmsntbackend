const express = require('express')
const cors= require('cors')

const app = express()

app.use (express.json())


const {
    getCompliment, 
    getFortune, 
    addCompliment 
} = require('../server/controller')

app.get("/api/compliment", getCompliment)
app.get("/api/fortunes", getFortune)
app.post(`/api/Advice`. addCompliment)

app.listen(5500, () => console.log(`running on 5500 `))
