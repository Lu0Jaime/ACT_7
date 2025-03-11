const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');

router.post('/', userController.createUser); // Crear usuario
router.get('/', userController.getUsers);    // Obtener todos los usuarios
router.put('/:id', userController.updateUser); // Actualizar usuario por ID
router.delete('/:id', userController.deleteUser); // Eliminar usuario por ID

module.exports = router;
