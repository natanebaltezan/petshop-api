const Sequelize = require('sequelize');
const config = require('config');

const instance = new Sequelize(
  config.get('mysql.databaseName'),
  config.get('mysql.user'),
  config.get('mysql.password'),
  {
    host: config.get('mysql.host'),
    dialect: 'mysql'
  }
);

module.exports = instance;