const mysql = require('mysql2');

let db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'muralAvisos'
});

let getAll = (callback) => {
    let SQL = `SELECT * FROM avisos`

    db.query(SQL, (err, result) => {
        if(err) {
            throw err;
        }
        callback(result);
    })
}

module.exports = {
    ,

    newPost(title, description) {
        this.posts.push({
            id: generateID(),
            title,
            description
        });
    },
    deletePost(id) {
        delete this.posts[id];
    }
};

let generateID = () => {
    return Math.random().toString(26).substr(2, 9);
};
