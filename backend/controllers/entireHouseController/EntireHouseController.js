const router = require('express').Router();
const responses = require('../../constants/routeResponses');
const EntireHouseRepository = require('../../repositories/EntireHouseRepo');

router.get('/entire-house/:propertyId', async (req, res) => {
    const { propertyId } = req.params;
    const repo = new EntireHouseRepository(propertyId);
    try {
        const hostInfo = await repo.getData();
        if (!repo.dataLoaded)
            return res.status(404).json({ message: responses.hostNotFound });

        return res.status(200).json(hostInfo);
    } catch (error) {
        return res.status(500).json({ message: responses.serverError });
    }
});

module.exports = router;
