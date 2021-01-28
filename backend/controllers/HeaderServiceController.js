const router = require('express').Router();
const Photo = require('../models/Photo');
const Property = require('../models/Property');
const {
    handleHeaderServiceResponse,
} = require('./responseHandlers/headerServiceRespnse');

router.get('/:propertyId', async (req, res) => {
    try {
        const photos = await Photo.findAll({
            where: { PropertyId: req.params.propertyId },
            include: [{ model: Property }],
        });

        // get number of reviews and rating
        const dummyReviewData = { rating: 4.52, numberOfReviews: 151 };

        // get location
        const dummyLocationData = {
            city: 'South Lake Tahoe',
            state: 'California',
            country: 'United States',
        };
        const response = handleHeaderServiceResponse(
            photos,
            dummyReviewData,
            dummyLocationData
        );

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
