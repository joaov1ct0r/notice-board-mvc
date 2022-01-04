const mysql = require('mysql2');

let db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'muralAvisos'
});

// RETORNA TODOS OS AVISOS
let getAll = callback => {
    let SQL = `SELECT * FROM avisos`;

    db.query(SQL, (err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
};

// INSERE NOVO AVISO
let newPost = (title, description, callback) => {
    let SQL = `INSERT INTO avisos (avisosTitulo, avisosDesc) VALUES (?, ?)`;

    let params = [title, description];

    db.query(SQL, params, (err, result) => {
        if (err) {
            throw err;
        }

        callback(result);
    });
};

// MODIFICA UM AVISO
let changePost = (index, title, description, callback) => {
    let SQL = `UPDATE avisos SET avisosTitulo = ?, avisosDesc = ? WHERE avisosID = ?`;

    let params = [title, description, index];

    db.query(SQL, params, (err, result) => {
        if (err) {
            throw err;
        }

        callback(result);
    });
};

let deletePost = (index, callback) => {
    let SQL = `DELETE FROM avisos WHERE avisosID = ?`;

    db.query(SQL, index, (err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
};

module.exports = {
    getAll,

    newPost,

    deletePost
};
