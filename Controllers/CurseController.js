const Curso = require('../models/Curso');

exports.createCurso = async (req, res) => {
    try {
        const curso = await Curso.create(req.body);
        res.status(201).json(curso);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCursos = async (req, res) => {
    try {
        const cursos = await Curso.find();
        res.status(200).json(cursos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
