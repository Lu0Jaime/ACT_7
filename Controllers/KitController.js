const Kit = require('../models/Kit');

exports.createKit = async (req, res) => {
    try {
        const kit = await Kit.create(req.body);
        res.status(201).json(kit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getKits = async (req, res) => {
    try {
        const kits = await Kit.find();
        res.status(200).json(kits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
