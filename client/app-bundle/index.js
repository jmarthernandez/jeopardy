var m = require('mithril');
var Question = require('./model/Question.js');

window.App = {};


App.controller = function () {
  var ctrl = this;
  //Grabs random question form db
  Question.fetch();
}

App.view = function (ctrl) {
  //Makes fetch() response accessible to the view
  var random = Question.all();
  return m('.mui-container', [
    m('h1', 'Jeopardy'),
    m('ul.mui-tabs.mui-tabs-justified', [
      m('li.mui-active', [
        m('a[data-mui-toggle=tab][data-mui-controls=q]', 'q')
      ]),
      m('li', [
        m('a[data-mui-toggle=tab][data-mui-controls=a]', 'a')
      ]),
      m('li', [
        m('a[data-mui-toggle=tab][data-mui-controls=info]', 'info')
      ])
    ]),
    m('.mui-tab-content', [
      m('.mui-tab-pane.mui-active#q', [
        m('h2', 'Question'),
        m('p', random.question)
      ]),
      m('.mui-tab-pane#a', [
        m('h2', 'Answer'),
        m('p', random.answer)
      ]),
      m('.mui-tab-pane#info', [
        m('h2', 'Value'),
        m('p', random.value),
        m('h2', 'Epipsode Number'),
        m('p', random.show_number),
        m('h2', 'Aired on'),
        m('p', random.air_date),
        m('h2', 'Round'),
        m('p', random.round)
      ])
    ]),
    m('button.mui-btn mui-btn-primary mui-btn-lg', {
      onclick: Question.fetch
    }, 'Another Question')
  ])
}

m.mount(document.getElementById('app'), App)