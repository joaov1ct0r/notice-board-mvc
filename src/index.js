const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;

let posts = [
    {
        id: 0,
        title: "Mural de teste",
        description: "Descrição teste"
    },
    {
        id: 1,
        title: "Mural teste 2",
        description: "Descrição teste 2"
    }
];

app.get("/all", (req, res) => {
    res.send(JSON.stringify(posts));
});

app.post("/new", (req, res) => {});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
