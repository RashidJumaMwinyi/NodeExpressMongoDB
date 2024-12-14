require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');


const connectDB = require('./server/config/db');
const session = require('express-session');
const app = express();
// use localhost when developing and process in production
const PORT = 3000 || process.env.PORT;

// Connect to DB
connectDB();

// Middleware
// This allows us to pass data from form to form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    

}))


// This is for the css part
app.use(express.static('public'));

// Template Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Importing tis routs from main file
app.use('/', require('./server/routes/main'))
app.use('/', require('./server/routes/admin'))

app.listen(PORT, () => {
    console.log(`App is currently Listening to ${PORT}`);
    
});