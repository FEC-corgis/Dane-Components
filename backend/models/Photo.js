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
  try {
    await Photo.sync();
    const existingPhotos = await Photo.findAll();

    if (!existingPhotos.length && process.env.NODE_ENV !== 'production') {
      //   const aws = require('aws-sdk');
      //   const request = require('request');
      //   const { join } = require('path');
      //   const { readFileSync, createWriteStream } = require('fs');
      //   const { createApi } = require('unsplash-js');

      //   const download = (url, path, callback) => {
      //     request.head(url, (err, res, body) => {
      //       request(url).pipe(createWriteStream(path)).on('close', callback);
      //     });
      //   };

      //   aws.config.update({ region: process.env.REGION });
      //   const s3 = new aws.S3();

      //   const unsplash = createApi({
      //     accessKey: process.env.UNSPLASH_KEY,
      //     fetch: require('node-fetch'),
      //   });

      //   const res = await unsplash.search.getPhotos({
      //     query: 'house',
      //     page: 1,
      //     perPage: 100,
      //   });

      //   const results = JSON.parse(JSON.stringify(res.response.results));

      //   for (let i = 0; i < results.length; i++) {
      //     const link = results[i].links.download;
      //     const id = i + 1;

      //     const filePath = join(
      //       __dirname,
      //       '..',
      //       'data',
      //       'mock',
      //       'assets',
      //       `image${id}.png`
      //     );
      //     download(link, filePath, () => {
      //       const fileContent = readFileSync(filePath);

      //       const uploadParams = {
      //         Bucket: 'fec-corgis',
      //         Key: `houses/image/${id}`,
      //         Body: fileContent,
      //         ContentType: 'image/jpeg',
      //         ACL: 'public-read',
      //       };

      //       s3.upload(uploadParams, function (error, data) {
      //         if (error) {
      //           console.log('Error', err);
      //         }
      //         if (data) {
      //           Photo.create({
      //             link: data.Location,
      //             isMain: id % 5 === 0 ? true : false,
      //             propertyId: Math.ceil(id / 5),
      //           });
      //         }
      //       });
      //     });
      //   }
      for (let i = 0; i < photos.length; i++) {
        photos[i].link = 'https://fec-corgis.s3.amazonaws.com/houses/image/1';
        await Photo.create(photos[i]);
      }
    }
  } catch (error) {
    console.log('ERROR IN PHOTO MIGRATION');
  }
})();

module.exports = Photo;
