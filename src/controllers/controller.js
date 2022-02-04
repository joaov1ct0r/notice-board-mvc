const db = require('../model/db');

let user = {
    getAll: function (req, res) {
        db.getAll(function (result) {
            res.send(JSON.stringify(result));
        });
    }
};

module.exports = user;
