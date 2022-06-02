const express = require('express')
const cors= require('cors')

const app = express()

app.use (express.json())

const {
    getAdvice,
    deleteAdvice,
    createAdvice,
    updateAdvice, 

} = require('./controller')

app.get(`/api/Advice`, getAdvice, getAdvice2, getAdvice3)
app.delete(`/api/Advice`, getAdvice, getAdvice2, getAdvice3)
app.post(`/api/house`, createAdvice)
app.put(`/api/Advice`. updateAdvice)

app.listen(5500, () => console.log(`running on 5500 `))