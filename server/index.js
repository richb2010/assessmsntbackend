const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { 
    getCompliment,
    getFortune, 
    addCompliment,
    deleteCompliment,
    deleteFortune,
    UpdateCompliment,
    updateFortune
} = require('../server/controller') 

app.get("/api/compliment", getCompliment)
app.get("/api/fortunes", getFortune)
app.post(`/api/Advice`. addCompliment)
app.post(`/api/Advice`. addFortune)
app.delete("/api/fortunes", deleteFortune)
app.delete("/api/compliment", deleteCompliment)
app.put(`/api/Advice`. updateCompliment)
app.put(`/api/Advice`. updateFortune)




app.listen(4000, () => console.log("Server running on 4000"));
