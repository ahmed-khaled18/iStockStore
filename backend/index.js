
//app setup
const express = require('express');
const app = express();

//conncting to database
const connectDB = require("./config/db");
connectDB();

//Middleware
const cors = require('cors')
const corsoption = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  };
app.use(cors(corsoption));
app.use(express.json());


//Route Middleware
const authRoute = require('./routes/auth');
app.use('/api/user',authRoute);


app.listen(process.env.PORT || 3000, ()=> console.log('Server Up and running'));
