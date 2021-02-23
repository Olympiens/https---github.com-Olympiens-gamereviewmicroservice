'use strict';
var uuid = require('uuid');
var mongoose = require('mongoose');

var repository = require('./repository');
var feedbackModel = mongoose.model('feedback', repository.getFeedbacks());
var id=0;

var controllers = {
    feedback: function(req, res) {
        if(!req.body.review){
            res.status(400).json({ error: "review is empty" });
            res.end();
        }
        else{
        repository.openConnection();
        console.log(req.body.review);
        var feedback = new feedbackModel({sessionId: id, review: parseInt(req.body.review), comment: req.body.comment, created_at: Date.now()});
        id++;
        feedback.save(function (err) {
            if (err) console.log(err);
        });
        res.header({
            'Content-Type': 'text/plain',
            'Ubi-UserId': uuid.v4() //generate a random GUID
            })    
        res.json(feedback);
        res.end();
        }
  
   },
   getlast15reviews: async(req, res)=> {
       repository.openConnection();
       var feedbacks = await feedbackModel.find().sort({ _id: -1 }).limit(15)
       res.json(feedbacks);
    }
};


module.exports = controllers;

   
   