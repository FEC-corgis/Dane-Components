const { DataTypes, Model } = require('sequelize');
const sequelize = require('../data/db');
const { titles } = require('../data/mock/PropertyData');

class Property extends Model {}

Property.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Property',
  }
);

(async () => {
  await Property.sync();
  const properties = await Property.findAll();

  if (!properties.length) {
    for (let i = 0; i < 100; i++) {
      await Property.create({
        title: titles[i],
        hostId: i + 1,
      });
    }
  }
})();

module.exports = Property;
