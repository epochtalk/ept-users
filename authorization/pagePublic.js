var Boom = require('boom');

module.exports = function userFind(server, auth) {

  // check base Permission
  var allowed = server.authorization.build({
    error: Boom.forbidden(),
    type: 'hasPermission',
    server: server,
    auth: auth,
    permission: 'users.pagePublic.allow'
  });

  return allowed;
};
