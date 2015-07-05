var pg = require('pg');
var conString = "postgres://username:password@localhost/database";

pg.connect(conString, function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
  client.query('SELECT * FROM questions ORDER BY RANDOM() LIMIT 1', ['1'], function(err, result) {
    done();

    if(err) {
      return console.error('error running query', err);
    }
  });
});