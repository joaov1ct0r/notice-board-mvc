const db = require('../model/db');

let user = {
    getAll: function (req, res) {
        db.getAll(function (result) {
            res.send(JSON.stringify(result));
        });
    },

    newPost: function (req, res) {
        let { title, description } = req.body;

        db.newPost(title, description, function (result) {
            console.log(result);

            res.send('Aviso Adicionado com sucesso');
        });
    },

    changePost: function (req, res) {
        let { index } = req.params;

        let { title, description } = req.body;

        db.changePost(index, title, description, function (result) {
            console.log(result);

            res.send('Aviso deletado com sucesso');
        });
    },

    deletePost: function (req, res) {
        let { index } = req.params;

        db.deletePost(index, function (result) {
            console.log(result);

            res.send('Aviso deletado com sucesso');
        });
    }
};

module.exports = user;
