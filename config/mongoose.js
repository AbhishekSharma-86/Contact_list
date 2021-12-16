//required the mongoose library 
const mongoose = require('mongoose');

//connecting to the database
mongoose.connect('mongodb://localhost/contact_list_db');

//aquire the connection to check if it is successful
const db = mongoose.connection;

//if some error occures 
db.on('error', console.error.bind(console, 'connection error'));


//if successfully connected the print the message below 
db.once('open', function(){
    console.log("Successfully connected to the database");
});