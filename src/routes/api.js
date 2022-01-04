const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

const posts = require('../model/posts');

// RETORNA TODOS OS AVISOS
router.get('/all', (req, res) => {
    res.send(JSON.stringify(posts.getAll()));
});

// INSERE UM NOVO AVISO
router.post('/new', bodyParser.json(), (req, res) => {
    let title = req.body.title;

    let description = req.body.description;

    posts.newPost(title, description);

    res.send('Post adicionado');
});

// DELETA UM AVISO
router.delete('/delete/:index', bodyParser.json(), (req, res) => {
    let index = req.params.index;

    posts.deletePost(index);

    res.send('Post deletado');
});

module.exports = router;
