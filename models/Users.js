const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  
age: Number,

 
});

const User = mongoose.model("UserData", userSchema);
module.exports = User;