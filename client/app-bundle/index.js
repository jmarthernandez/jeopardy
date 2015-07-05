var m = require('mithril')
var MyComponent = require('./components/MyComponent')


window.App = {}

App.controller = function () {}

App.view = function (ctrl) {
  return [
    m('h1', 'Jeopardy Question'),
    m('h2', 'Question'),
    m('p', 'Question Here'),
    m('h2', 'Answer'),
    m('p', 'Answer Here'),
    m('h2', 'Value'),
    m('p', 'Value Here'),
    m('h2', 'Epipsode Number'),
    m('p', 'Epipsode Number Here'),
    m('h2', 'Date'),
    m('h2', 'Round')
  ]
}

m.mount(document.getElementById('app'), App)


//Add section for categrory, question, answer, 
// value, date, episode number, round(Jeopardy Double Jeopardy