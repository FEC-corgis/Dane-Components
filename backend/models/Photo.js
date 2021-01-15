const { DataTypes, Model } = require('sequelize');
const sequelize = require('../data/db');
const { photoSeed } = require('../data/seedScript/PhotoSeed');

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
    description: {
      type: DataTypes.STRING,
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
  try {
    await Photo.sync();
    const existingPhotos = await Photo.findAll();

    if (!existingPhotos.length && process.env.NODE_ENV !== 'production') {
      await photoSeed(Photo);
    }
  } catch (error) {
    console.log('ERROR IN PHOTO MIGRATION');
  }
})();

module.exports = Photo;
