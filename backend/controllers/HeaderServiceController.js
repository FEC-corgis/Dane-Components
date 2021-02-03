const router = require('express').Router();
const HostedByRepository = require('../repositories/HostedByRepo');

router.get('/:propertyId', async (req, res) => {
    const { propertyId } = req.params;
    const repo = new HostedByRepository(propertyId);
    try {
        const response = await repo.getData();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
