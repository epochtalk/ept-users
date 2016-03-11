var path = require('path');

module.exports = [
  {
    name: 'auth.users.update',
    method: require(path.normalize(__dirname + '/update')),
    options: { callback: false }
  },
  {
    name: 'auth.users.find',
    method: require(path.normalize(__dirname + '/find')),
    options: { callback: false }
  },
  {
    name: 'auth.users.deactivate',
    method: require(path.normalize(__dirname + '/deactivate')),
    options: { callback: false }
  },
  {
    name: 'auth.users.activate',
    method: require(path.normalize(__dirname + '/reactivate')),
    options: { callback: false }
  },
  {
    name: 'auth.users.delete',
    method: require(path.normalize(__dirname + '/delete')),
    options: { callback: false }
  },
];
