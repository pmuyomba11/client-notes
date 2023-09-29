const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Client = require('./models/client')
const colors = require('colors');
const morgan = require('morgan');
const PORT = process.env.PORT;
//Initialization....
const app = express();
//Database Connection...
const db = mongoose.connection;

//Database config....
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


//Middleware...
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(methodOverride('_method'));

//Database Error/ Success Messages...
db.on('connected', () => console.log(`Database Succefully Connected..`));
db.on('disconnected', () => console.log(`Database Disconnected`));
db.on('error', (err) => console.log(err.message + ' is DB connected?'))

//Port Listener
app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}...`.inverse.blue.bold)
})