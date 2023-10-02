require("./mongoDB/config");
require('dotenv').config()

const express = require("express");
const AppError = require("./helpers/appError");
const errorHandler = require("./helpers/errorHandler");
const headers = require("./helpers/headers");
const cors = require("cors"); 
const router = require("./routes");
const bodyParser =  require("body-parser");
const app = express();  
const PORT = process.env.PORT || 3600



//body-parser config;  
//register the enpoints  
app.use(cors())
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded()); 
app.use(bodyParser.urlencoded({extended: false }));  
app.use(router) 
 
app.use(headers);
// using errors handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running : ${PORT}`)
})

module.exports = app;