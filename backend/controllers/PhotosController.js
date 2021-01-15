const router = require('express').Router();
const Photo = require('../models/Photo');

// router.get('/:id', async (req, res) => {
//   try {
//     const photo = await Photo.findByPk(req.params.id);
//     return res.status(200).json(photo);
//   } catch (error) {
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// });

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
