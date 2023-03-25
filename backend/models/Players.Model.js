const mongoose = require("mongoose");

const Player = mongoose.model(
  "Player",
  new mongoose.Schema({
    name: String,  
    team: String, 
    jno: Number, 
    age: Number, 
    height: Number, 
    weight: Number, 
    img:
    {
        data: Buffer,
        contentType: String
    }
  })
);


module.exports=Player; 