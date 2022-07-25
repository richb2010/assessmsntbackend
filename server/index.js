const express = require("express");
const cors = require("cors");
const { getCompliment, getFortune } = require('./controller')

const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/compliment", getCompliment);
app.get("/api/fortunes", getFortune)

app.listen(4000, () => console.log("Server running on 4000"));

app.use(express.json());

const { getAdvice } = require('./controller')

app.get("/api/Advice", getAdvice);

app.listen(5500, () => console.log("Server running on 5500"));
