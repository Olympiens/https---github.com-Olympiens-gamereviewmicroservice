'use strict';
var mongoose = require('mongoose');



var repository = {
  openConnection: function(){

    var mongoDB = "mongodb+srv://ericml:dbpassword123@cluster0.9usac.mongodb.net/local_library?retryWrites=true&w=majority"
    mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  },
  getFeedbacks: function() {
    var feedback = new mongoose.Schema({
      sessionId: {
        type: String,
        required: true,
        unique : true
      },
      review: {
       type: Number,
       required: true
      },
      comment: {
        type: String
      },
      created_at: { 
        type: Date,
        required: true
      }
      });
      return feedback;
 }
 
};

module.exports = repository;