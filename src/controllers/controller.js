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
    }
};

module.exports = user;
