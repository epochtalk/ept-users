var path = require('path');

module.exports = [
  require(path.normalize(__dirname + '/update')),
  require(path.normalize(__dirname + '/find')),
  require(path.normalize(__dirname + '/deactivate')),
  require(path.normalize(__dirname + '/reactivate')),
  require(path.normalize(__dirname + '/delete')),
];