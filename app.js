require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
// use localhost when developing and process in production
const PORT = 3000 || process.env.PORT;

// This is for the css part
app.use(express.static('public'));

// Template Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Importing tis routs from main file
app.use('/', require('./server/routes/main'))

app.listen(PORT, () => {
    console.log(`App is currently Listening to ${PORT}`);
    
});