const Photo = require('../models/Photo');
const Property = require('../models/Property');
const axios = require('axios');

class HostedByRepository {
    constructor(id) {
        this.id = id;
        this.data = {
            photos: {},
            location: {},
            reviews: {},
            isSuperhost: false,
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

    async getSuperhostStatus() {
        const { hostId } = await Property.findByPk(this.id);
        const { data } = await axios.get(
            `http://localhost:5002/api/hostedbyService/superhost/${hostId}`
        );

        this.data.isSuperhost = data;
    }

    async getData() {
        await this.getPhotos();
        await this.getLocation();
        await this.getReviews();
        await this.getSuperhostStatus();

        return this.data;
    }
}

module.exports = HostedByRepository;
