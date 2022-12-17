const mongoose = require('mongoose');
const { Schema } = mongoose;

  const bookingSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    days:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    emergencyContact:{
        type:String,
        required:true
    },
    roomNumber:{
        type:String,
        required:true
    },
    hotel:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
  });


  module.exports = mongoose.model('booking', bookingSchema);