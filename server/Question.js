var pg = require('pg');
var conString = "postgres://test:md505a671c66aefea124cc08b76ea6d30bb@localhost:5432/jeopardy";


pg.connect(conString, function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
  client.query('SELECT * FROM questions ORDER BY RANDOM() LIMIT 1', function(err, result) {
    done();

    if(err) {
      return console.error('error running query', err);
    }

    return result.rows[0];

  });
});