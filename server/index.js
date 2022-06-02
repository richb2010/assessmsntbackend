const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

app.listen(5500, () => console.log("Server running on 5500"));


const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getAdvice } = require('./controller')

app.get("/api/Advice", getAdvice);

app.listen(5500, () => console.log("Server running on 5500"));