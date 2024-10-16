// configurando o Sequelize

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('ordemapi', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
