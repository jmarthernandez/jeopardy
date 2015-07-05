var m = require('mithril');

var Question = module.exports = {

  question: null,
    
  // Fetch random question from db
  fetch: function() {
    
    m.request({ method: 'GET', url: '/api/question' })
      .then(function(questionResponse){
        Question.question = questionResponse;
      })

  
  },

  // Returns db to the 
  all: function() {
    return Question.question;
  }

};