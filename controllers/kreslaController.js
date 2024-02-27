const AnotherModel = require('../models/Kresla');

exports.getAllItems = async (req, res) => {
    try {
        const items = await Kresla.find();
        res.json(items);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
