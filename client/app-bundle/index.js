var m = require('mithril');
var MyComponent = require('./components/MyComponent');
var Question = require('./model/Question.js');

window.App = {};

App.controller = function () {
  var ctrl = this;
  Question.fetch();
}

App.view = function (ctrl) {
  var random = Question.all();
  return [
    m('h1', 'Jeopardy Question'),
    m('h2', 'Question'),
    m('p', random.question),
    m('h2', 'Answer'),
    m('p', random.answer),
    m('h2', 'Value'),
    m('p', random.value),
    m('h2', 'Epipsode Number'),
    m('p', random.show_number),
    m('h2', 'Aired on: ' + random.air_date),
    m('h2', 'Round : ' + random.round)
  ]
}

m.mount(document.getElementById('app'), App)