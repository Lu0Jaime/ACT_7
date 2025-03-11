const express = require('express');
const router = express.Router();
const cursoController = require('../Controllers/CourseController');

router.post('/', cursoController.createCurso); // Crear curso
router.get('/', cursoController.getCursos);    // Obtener todos los cursos

module.exports = router;
