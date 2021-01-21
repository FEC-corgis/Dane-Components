const Photo = require('../../models/Photo');
const { photoDescription } = require('../mock/PhotoDescription');

(async () => {
	try {
		await Photo.sync();

		for (let i = 1; i < 500; i++) {
			const id = i != 50 ? i : 501;
			await Photo.create({
				link: `https://fec-corgis.s3.amazonaws.com/houses/image/${id}`,
				isMain: i % 5 === 0 ? true : false,
				description: photoDescription[Math.floor(Math.random() * 100)],
				PropertyId: Math.ceil(i / 5),
			});
		}
	} catch (error) {
		console.log('ERROR IN PHOTO MIGRATION', error);
	}
})();
