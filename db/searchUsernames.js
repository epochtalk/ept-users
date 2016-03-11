var dbc = require('epochtalk-core-pg')({ conString: process.env.DATABASE_URL });
var db = dbc.db;

/* returns array of usernames matching searchStr */
module.exports = function(searchStr, limit) {
  var q = 'SELECT username FROM users WHERE username LIKE $1 ORDER BY username LIMIT $2';
  var params = [searchStr + '%', limit || 15];
  return db.sqlQuery(q, params)
  .map(function(user) { return user.username; });
};
