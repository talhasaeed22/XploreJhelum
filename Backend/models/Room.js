const mongoose = require('mongoose');
const { Schema } = mongoose;

  const roomSchema = new Schema({
    number:{
        type:String,
        required:true
    },
    hotel:{
        type:String,
        required:true
    },
    available:{
        type:String,
        required:true
    },
  });


  module.exports = mongoose.model('room', roomSchema);