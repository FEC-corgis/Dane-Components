const { DataTypes, Model } = require('sequelize');
const sequelize = require('../data/db');

class CoHost extends Model {}

CoHost.init(
  {
    hostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hostedById: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'CoHost',
  }
);

module.exports = CoHost;
