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

module.exports = {
    getAll,

    newPost,
    deletePost(id) {
        delete this.posts[id];
    }
};

let generateID = () => {
    return Math.random().toString(26).substr(2, 9);
};
