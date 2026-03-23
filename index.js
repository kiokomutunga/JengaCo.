const express = require('express')
const connectDB = require('./database');
require("dotenv").config()
require("./routes/smsRoutes")

app = express();

connectDB(); //connect the database

app.use(express.json());

app.use("api/sms");

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`connected and running on port ${PORT}`));







