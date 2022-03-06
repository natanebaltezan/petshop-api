const Sequelize = require('sequelize');
const dbInstance = require('../database');

const columns = {
  company: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.ENUM('food', 'toys'),
    allowNull: false
  }
};

const options = {
  freezeTableName: true,
  tableName: 'providers',
  timestamps: true
}

module.exports = dbInstance.define('provider', columns, options)