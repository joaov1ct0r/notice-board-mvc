const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;

let posts = [
    {
        id: "dslfgjslk",
        title: "Mural de teste",
        description: "Descrição teste"
    },
    {
        id: "slkfjlkj",
        title: "Mural teste 2",
        description: "Descrição teste 2"
    }
];

app.get("/all", (req, res) => {
    res.send(JSON.stringify(posts));
});

app.post("/new", bodyParser.json(), (req, res) => {
    let id = generateID();

    let title = req.body.title;

    let description = req.body.description;

    posts.push({ id, title, description });

    res.send("Post adicionado");
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

let generateID = () => {
    return Math.random().toString(26).substr(2, 9);
};
