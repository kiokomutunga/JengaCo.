const express = require('express')
const connectDB = require('./database');
require("dotenv").config()

app = express();

connectDB(); //connect the database

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`connected and running on port ${PORT}`));







