const express = require('express')
const connectDB = require('./database');
require("dotenv").config()

app = express();

connectDB(); //connect the database

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`connected and running on port ${PORT}`));

const User = require("./models/User")

const testUser = new User({
    id: "U001",
    name: "Kioko Mutunga",
    email: "kioko@example.com",
    phone: "0712345678",
    role: "user",
    location: "Murang'a"
})

testUser.save()
.then(()=> console.log("User saved successfully"))
.catch(err => console.log(err))






