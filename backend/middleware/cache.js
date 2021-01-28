exports.client = require('redis').createClient();

module.exports = (req, res, next) => {
    const existingData = client.get(req.params.id);

    if (existingData) return res.status(200).json(existingData);
    next();
};
