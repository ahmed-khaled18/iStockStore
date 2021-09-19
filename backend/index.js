
//app setup
const express = require('express');
const app = express();

const path = __dirname + '/view/';
app.use(express.static(path));

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

app.use(express.urlencoded({ extended: false }))
app.use(express.json());


//Route Middleware
const authRoute = require('./routes/auth');
const productRoute = require('./routes/productRoutes');
const cartRoute = require('./routes/cartRoutes');
app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});
app.use('/api/user',authRoute);
app.use('/api/products',productRoute);
app.use('/api/cart',cartRoute);


app.listen(process.env.PORT || 3000, ()=> console.log('Server Up and running'));

const lib = require("./seederScript");
lib.importData();