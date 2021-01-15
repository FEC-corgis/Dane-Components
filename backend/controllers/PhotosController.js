const router = require('express').Router();
const Photo = require('../models/Photo');

router.get('/:propertyId', async (req, res) => {
  try {
    const photos = await Photo.findAll({
      where: { propertyId: req.params.propertyId },
    });

    return res.status(200).json(photos);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
