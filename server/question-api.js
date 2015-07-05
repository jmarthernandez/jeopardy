var Question  = require('./Question.js');
var express = require('express')


var router = module.exports = express.Router();


// Retrieves a random question
router.get('/', function(req, res){
  Question.retrieveAll().then(function(question){res.send({Question: question});
  });
});
