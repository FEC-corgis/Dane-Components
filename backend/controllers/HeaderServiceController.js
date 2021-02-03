const router = require('express').Router();
const responses = require('../constants/routeResponses');
const HostedByRepository = require('../repositories/HostedByRepo');

router.get('/:propertyId', async (req, res) => {
    const { propertyId } = req.params;
    const repo = new HostedByRepository(propertyId);
    try {
        const response = await repo.getData();
        if (!repo.dataLoaded)
            return res.status(400).json({ message: responses.headerNoData });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: responses.serverError });
    }
});

module.exports = router;
