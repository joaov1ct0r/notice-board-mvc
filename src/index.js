const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;

const posts = require("./model/posts");

app.get("/all", (req, res) => {
    res.send(JSON.stringify(posts.getAll()));
});

app.post("/new", bodyParser.json(), (req, res) => {
    let title = req.body.title;

    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Post adicionado");
});

app.delete("/delete/:index", bodyParser.json(), (req, res) => {
    let index = req.params.index;

    posts.deletePost(index);

    res.send("Post deletado");
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
