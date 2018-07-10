// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://localhost:27017/CrudDB';

// Connect to mongodb
mongoose.connect(dbHost,(err) => {
if(!err){
    console.log('MongoDB connection succeeded.');
}else
{
    console.log('Error in DB connection: '+ JSON.stringify(err,undefined,2));
}
});
module.exports=mongoose;