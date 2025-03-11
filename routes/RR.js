const express = require('express');
const router = express.Router();
const relacionController = require('../Controllers/RC');

// Relaciones Estudiante-Grupo
router.post('/estudiante-grupo', relacionController.createRelacionEstudianteGrupo);
router.get('/estudiante-grupo', relacionController.getRelacionesEstudianteGrupo);

// Relaciones Curso-Grupo
router.post('/curso-grupo', relacionController.createRelacionCursoGrupo);
router.get('/curso-grupo', relacionController.getRelacionesCursoGrupo);

module.exports = router;
