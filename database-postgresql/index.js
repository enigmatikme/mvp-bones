const { Client } = require('pg');


const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'tester',
  password: 'login',
  database: 'testdb'
});

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected with database');
  }
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;