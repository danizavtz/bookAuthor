var pg = exports; 
var pgLib = require('pg');

pg.initialize = function(cb) {
  var client = new pgLib.Client();
  client.connect(function(err) {
    if (err) {
      return cb(err);
    }

    pg.client = client;
    cb();
  });
};