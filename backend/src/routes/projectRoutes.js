const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Rutas CRUD para Proyectos
router.get('/', projectController.getAll);
router.get('/:id', projectController.getById);
router.post('/', projectController.create);
router.put('/:id', projectController.update);
router.delete('/:id', projectController.delete);

module.exports = router;