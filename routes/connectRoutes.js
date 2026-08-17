const express = require('express');
const router = express.Router();
const connectController = require('../controllers/connectController');

router.get('/usuarios', connectController.listarUsuarios);
router.post('/usuarios', connectController.cadastrarUsuario);
router.get('/usuarios/:id', connectController.buscarUsuarioPorId);

module.exports = router;