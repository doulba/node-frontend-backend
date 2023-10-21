//require("./mongoDB/config");
const mongoose = require('mongoose');
require('dotenv').config()

const express = require("express");
const errorHandler = require("./helpers/errorHandler");
const headers = require("./helpers/headers");
const cors = require("cors"); 
const router = require("./routes");
const bodyParser =  require("body-parser");
const app = express();  
const PORT = process.env.PORT || 3500 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
 
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false }));  
app.use(router) 
 
app.use(headers);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running : ${PORT}`)
})

app.get('/', (req, res) => {
  res.json('Hello, gestionDaara IT user!')  
})

module.exports = app;
