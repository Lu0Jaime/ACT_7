const express = require('express');
const router = express.Router();
const kitController = require('../Controllers/KitController');

router.post('/', kitController.createKit); // Crear kit de robótica
router.get('/', kitController.getKits);    // Obtener todos los kits de robótica

module.exports = router;
