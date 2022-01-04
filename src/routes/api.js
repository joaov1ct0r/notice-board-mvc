const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

const db = require('../model/posts.js');

// RETORNA TODOS OS AVISOS
router.get('/all', (req, res) => {
    let request = db.getAll(function (result) {
        res.send(JSON.stringify(result));
    });
});

// INSERE UM NOVO AVISO
router.post('/new', bodyParser.json(), (req, res) => {
    let title = req.body.title;

    let description = req.body.description;

    db.newPost(title, description);

    res.send('Post adicionado');
});

// DELETA UM AVISO
router.delete('/delete/:index', bodyParser.json(), (req, res) => {
    let index = req.params.index;

    db.deletePost(index);

    res.send('Post deletado');
});

module.exports = router;
