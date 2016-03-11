var dbc = require('epochtalk-core-pg')({ conString: process.env.DATABASE_URL });
var db = dbc.db;
var helper = dbc.helper;

/* returns a limited set of users depending on limit and page */
module.exports = function(opts) {
  var q;
  if (opts && opts.filter && opts.filter === 'banned') {
    q = 'SELECT u.id, u.username, u.email, u.deleted, u.created_at, u.updated_at, u.imported_at, b.expiration as ban_expiration FROM users u RIGHT JOIN (SELECT ub.expiration, ub.user_id FROM users.bans ub WHERE ub.expiration > now()) b ON (u.id = b.user_id)';
  }
  else {
    q = 'SELECT u.id, u.username, u.email, u.deleted, u.created_at, u.updated_at, u.imported_at, (SELECT ub.expiration FROM users.bans ub WHERE ub.user_id = u.id AND ub.expiration > now()) as ban_expiration FROM users u';
  }

  opts = opts || {};
  var limit = opts.limit || 25;
  var page = opts.page || 1;
  var offset = (page * limit) - limit;
  var sortField = opts.sortField || 'username';
  var order = opts.sortDesc ? 'DESC' : 'ASC';
  var params;
  if (opts && opts.searchStr) {
    q = [q, 'WHERE u.username LIKE $1 ORDER BY', sortField, order, 'LIMIT $2 OFFSET $3'].join(' ');
    params = [opts.searchStr + '%', limit, offset];
  }
  else {
    q = [q, 'ORDER BY', sortField, order, 'LIMIT $1 OFFSET $2'].join(' ');
    params = [limit, offset];
  }
  return db.sqlQuery(q, params)
  .then(helper.slugify);
};
