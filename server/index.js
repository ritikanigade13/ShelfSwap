const express = require('express');
const connectDb = require('./dbConfig');
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();
connectDb();

app.listen(PORT,()=>{
    console.log(`server is running at port : ${PORT}`);
})