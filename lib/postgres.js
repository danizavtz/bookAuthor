const pg = exports; 
const pgLib = require('pg');

pg.initialize = (cb) => {
  const client = new pgLib.Client();
  client.connect((err) => {
    if (err) {
      return cb(err);
    }

    pg.client = client;
    cb();
  });
};