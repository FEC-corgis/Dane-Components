const { DataTypes, Model } = require('sequelize');
const sequelize = require('../data/db');

class HostedBy extends Model {}

HostedBy.init(
  {
    duringYourStay: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    responseTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    responseRate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    showLanguage: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    hostId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    propertyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'HostedBy',
  }
);

module.exports = HostedBy;
