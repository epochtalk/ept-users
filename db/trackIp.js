var dbc = require('epochtalk-core-pg')({ conString: process.env.DATABASE_URL });
var db = dbc.db;
var helper = dbc.helper;

module.exports = function(id, ip) {
  id = helper.deslugify(id);
  var q = 'INSERT INTO users.ips(user_id, user_ip) SELECT $1, $2::text WHERE NOT EXISTS (SELECT user_id, user_ip FROM users.ips WHERE user_id = $1 AND user_ip = $2)';
  var params = [ id, ip ];
  return db.sqlQuery(q, params);
};
