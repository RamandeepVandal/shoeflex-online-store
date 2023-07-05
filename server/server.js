const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
// connect to db
const connectDB = require('./config/db');
// port
const PORT = 5000 || process.env.PORT;

// start connection to db
connectDB();

// app 
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

// import router
app.use('/carts', require('./route/cartRoutes'));


// check if server is running
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});