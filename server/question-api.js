var conString = "postgres://test:md505a671c66aefea124cc08b76ea6d30bb@localhost:5432/jeopardy";
var express   = require('express');
var pg        = require('pg');

var router = module.exports = express.Router();

// Retrieves a random question
router.get('/', function (req, res) {
  pg.connect(conString, function (err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT * FROM questions WHERE question NOT LIKE $1 ORDER BY RANDOM() LIMIT 1', ['%<a%'], function (err, result) {
      done();

      if (err) {
        return console.error('error running query', err);
      }

      res.send(result.rows[0]);
    });
  });
});