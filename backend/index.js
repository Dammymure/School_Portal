const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 5000


mongoose.connect('mongodb+srv://dammymure1:dammymure@cluster0.z8hkoyf.mongodb.net/').then(()=>{
 console.log("MongoDB is successfully connnected");
})
.catch((err)=>{
 console.log(err);
})

app.listen(PORT, ()=>{
 console.log("Server is running on",PORT);
})