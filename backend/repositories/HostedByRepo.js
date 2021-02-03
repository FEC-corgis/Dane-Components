const Photo = require('../models/Photo');
const Property = require('../models/Property');

class HostedByRepository {
    constructor(id) {
        this.id = id;
        this.data = {
            photos: {},
            location: {},
            reviews: {},
        };
    }

    async getPhotos() {
        const photos = await Photo.findAll({
            where: { PropertyId: this.id },
            include: [{ model: Property }],
        });

        this.data.photos = photos;
    }

    async getLocation() {
        this.data.location = {
            city: 'South Lake Tahoe',
            state: 'California',
            country: 'United States',
        };
    }

    async getReviews() {
        this.data.reviews = { rating: 4.52, numberOfReviews: 151 };
    }

    async getData() {
        await this.getPhotos();
        await this.getLocation();
        await this.getReviews();

        return this.data;
    }
}

module.exports = HostedByRepository;
