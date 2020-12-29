const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'E-commerce'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/ec-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'E-commerce'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/ec-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'E-commerce'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/ec-production'
  }
};

module.exports = config[env];
