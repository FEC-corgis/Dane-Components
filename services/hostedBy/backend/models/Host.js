const { DataTypes, Model } = require('sequelize');
const sequelize = require('../data/db');

class Host extends Model {}

Host.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    about: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numberOfReviews: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    identityVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isSuperhost: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    livesIn: {
      type: DataTypes.STRING,
      allowNull: false,
      allowNull: true,
    },
    joinedOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Host',
  }
);

module.exports = Host;
