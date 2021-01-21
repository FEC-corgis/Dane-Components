const Property = require('../../models/Property');
const { titles } = require('../mock/PropertyData');

(async () => {
	await Property.sync();

	for (let i = 0; i < 100; i++) {
		await Property.create({
			title: titles[i],
			hostId: i + 1,
		});
	}
})();
