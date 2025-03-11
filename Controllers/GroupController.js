const Grupo = require('../models/Grupo');

exports.createGrupo = async (req, res) => {
    try {
        const grupo = await Grupo.create(req.body);
        res.status(201).json(grupo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getGrupos = async (req, res) => {
    try {
        const grupos = await Grupo.find();
        res.status(200).json(grupos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
