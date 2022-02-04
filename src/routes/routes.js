const express = require('express');

const router = express.Router();

const controller = require('../controllers/controller');

// RETORNA TODOS OS AVISOS
router.get('/all', controller.getAll);

// INSERE UM NOVO AVISO
router.post('/new', controller.newPost);

// EDITA UM AVISO
router.put('/edit/:index', controller.changePost);

// DELETA UM AVISO
router.delete('/delete/:index', controller.deletePost);

module.exports = router;
