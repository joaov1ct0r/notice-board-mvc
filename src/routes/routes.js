const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

const db = require('../model/db.js');

const controller = require('../controllers/controller');

// RETORNA TODOS OS AVISOS
router.get('/all', controller.getAll);

// INSERE UM NOVO AVISO
router.post('/new', controller.newPost);

// EDITA UM AVISO
router.put('/edit/:index', controller.changePost);

// DELETA UM AVISO
router.delete('/delete/:index', bodyParser.json(), (req, res) => {
    let { index } = req.params;

    let request = db.deletePost(index, function (result) {
        console.log(result);

        res.send('Aviso deletado com sucesso');
    });
});
module.exports = router;
