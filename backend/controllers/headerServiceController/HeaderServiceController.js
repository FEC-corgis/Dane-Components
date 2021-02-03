const router = require('express').Router();
const responses = require('../../constants/routeResponses');
const Response = require('../../constants/Response');
const ServiceRepository = require('../../repositories/ServiceRepo');

router.get('/:propertyId', async (req, res) => {
    const { propertyId } = req.params;
    const repo = new ServiceRepository(propertyId);
    try {
        const headerData = await repo.getData();
        if (!repo.dataLoaded)
            return res.status(404).json(new Response(responses.noHeaderData));

        return res.status(200).json(headerData);
    } catch (error) {
        return res.status(500).json(new Response(responses.serverError));
    }
});

module.exports = router;
