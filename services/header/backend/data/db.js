const { Sequelize } = require('sequelize');
const Property = require('../models/Property');

const sequelize = new Sequelize(
  'Header',
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

(async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log('ERROR IN db.js', error);
  }
})();

module.exports = sequelize;
