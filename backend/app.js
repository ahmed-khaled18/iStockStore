require("dotenv").config();
const express = require(('express'));
const session = require("express-session");
const connectDB = require("./config/db");
const appController = require("./controller/appController");
const isAuth = require("./middleware/is-auth");
const MongoDbSession = require("connect-mongodb-session")(session);
connectDB();
const app = express();
const PORT = process.env.PORT||5000;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const store = new MongoDbSession({
    uri: process.env.MONGO_URI,
    collection : "Sessions",
})


app.use(
    session({
        secret: "key that will sign cookie",
        resave: false,
        saveUninitialized: false,
        store: store,
    })
)



//=================== Routes
// Landing Page
app.get("/", appController.landing_page);

// Login Page
app.get("/login", appController.login_get);
app.post("/login", appController.login_post);

// Register Page
app.get("/register", appController.register_get);
app.post("/register", appController.register_post);

// Dashboard Page
app.get("/dashboard", isAuth, appController.dashboard_get);

app.post("/logout", appController.logout_post);
app.listen(PORT, () => console.log('server running on port '+PORT))