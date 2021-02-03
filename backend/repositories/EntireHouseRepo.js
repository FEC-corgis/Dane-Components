const Property = require('../models/Property');
const axios = require('axios');

module.exports = class EntireHouseRepository {
    constructor(id) {
        this.id = id;
        this.dataLoaded = true;
        this.data = {
            name: '',
            avatar: '',
            isSuperhost: false,
        };
    }

    async getHostInfo() {
        const { hostId } = await Property.findByPk(this.id);
        const { data } = await axios.get(
            `http://localhost:5002/api/hostedbyService/entire-house/${hostId}`
        );

        this.data = { ...data };
    }

    async getData() {
        try {
            await this.getHostInfo();
            return this.data;
        } catch (error) {
            this.dataLoaded = false;
        }
    }
};
