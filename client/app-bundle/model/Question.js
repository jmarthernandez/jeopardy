var m = require('mithril');

var Question = module.exports = {

  questionObj: {}
    
  // All open applications for all students
  fetch: function(ctrl) {
    
    m.request({ method: 'GET', url: '/question' })
      .then(function(questionResponse){
        //make Question.questionObj = questionResponse
      })
  
  },

  all: function() {
    return Question.questionObj;
  }

};