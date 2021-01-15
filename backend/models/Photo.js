const { DataTypes, Model } = require('sequelize');
const sequelize = require('../data/db');
const { photos } = require('../data/mock/PhotoData');

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

(async () => {
  await Photo.sync();
  const existingPhotos = await Photo.findAll();

  if (!existingPhotos.length) {
    for (let i = 0; i < photos.length; i++) {
      await Photo.create(photos[i]);
    }
  }
})();

module.exports = Photo;
