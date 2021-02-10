const axios = require('axios');
const Photo = require('../models/Photo');
const Property = require('../models/Property');

module.exports = class ServiceRepository {
    constructor(id) {
        this.id = id;
        this.dataLoaded = true;
        this.data = {
            photos: [],
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
        const { data } = await axios.get(
            `http://${process.env.REVIEWS_DOMAIN}/reviews/header/${this.id}`
        );

        this.data.reviews = { ...data };
    }

    async getSuperhostStatus() {
        const { hostId } = await Property.findByPk(this.id);
        const { data } = await axios.get(
            `http://${process.env.HOSTEDBY_DOMAIN}/api/hostedbyService/superhost/${hostId}`
        );

        this.data.isSuperhost = data;
    }

    async getData() {
        try {
            await this.getPhotos();
            await this.getLocation();
            await this.getReviews();
            await this.getSuperhostStatus();
            return this.data;
        } catch (error) {
            return {
                ...this.data,
                isSuperhost: true,
                reviews: {
                    rating: '4.28',
                    numberOfReviews: 50,
                },
            };
        }
    }
};
