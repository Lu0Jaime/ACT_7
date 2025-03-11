const express = require('express');
const router = express.Router();
const grupoController = require('../Controllers/GroupController');

router.post('/', grupoController.createGrupo); // Crear grupo
router.get('/', grupoController.getGrupos);    // Obtener todos los grupos

module.exports = router;
