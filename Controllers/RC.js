const EstudianteGrupo = require('../models/StudentGroup');
const CursoGrupo = require('../models/CourseGroup');

exports.createRelacionEstudianteGrupo = async (req, res) => {
    try {
        const relacion = await EstudianteGrupo.create(req.body);
        res.status(201).json(relacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getRelacionesEstudianteGrupo = async (req, res) => {
    try {
        const relaciones = await EstudianteGrupo.find();
        res.status(200).json(relaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createRelacionCursoGrupo = async (req, res) => {
    try {
        const relacion = await CursoGrupo.create(req.body);
        res.status(201).json(relacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getRelacionesCursoGrupo = async (req, res) => {
    try {
        const relaciones = await CursoGrupo.find();
        res.status(200).json(relaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
