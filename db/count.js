var dbc = require('epochtalk-core-pg')({ conString: process.env.DATABASE_URL });
var db = dbc.db;

/* returns total user count */
module.exports = function(opts) {
  var q = 'SELECT COUNT(u.id) FROM users u';
  var params;
  if (opts && opts.filter && opts.filter === 'banned') {
    q += ' RIGHT JOIN users.bans b ON (u.id = b.user_id AND b.expiration > now())';
  }
  if (opts && opts.searchStr) {
    q += ' WHERE u.username LIKE $1';
    params = [opts.searchStr + '%'];
  }
  return db.sqlQuery(q, params)
  .then(function(rows) {
    if (rows.length) { return { count: Number(rows[0].count) }; }
    else { return Promise.reject(); }
  });
};
