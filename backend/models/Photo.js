const { DataTypes, Model } = require('sequelize');
const sequelize = require('../data/db');

class Photo extends Model {}

Photo.init(
  {
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isMain: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    propertyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Photo',
  }
);

module.exports = Photo;
