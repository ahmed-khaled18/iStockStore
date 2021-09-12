require('dotenv').config();
const session = require("express-session")

const mongoose = require('mongoose');

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("MongoDB connection success")
    } catch (error) {
        console.log("MongoDB connection failed")
    }

}



module.exports = connectDB;



