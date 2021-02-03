const router = require('express').Router();
const responses = require('../../constants/routeResponses');
const MorePlacesRepository = require('../../repositories/MorePlacesRepo');

router.get('/more-places/:propertyId', async (req, res) => {
    const { propertyId } = req.params;
    const repo = new MorePlacesRepository(propertyId);
    try {
        const morePlacesInfo = await repo.getData();

        if (!repo.dataLoaded)
            return res.status(404).json({ message: responses.hostNotFound });

        return res.status(200).json(morePlacesInfo);
    } catch (error) {
        return res.status(500).json({ message: responses.serverError });
    }
});

module.exports = router;
