module.exports = {
    posts: [
        {
            id: "dslfgjslk",
            title: "Mural de teste",
            description: "Descrição teste"
        }
    ],
    getAll() {
        return this.posts;
    },
    newPost(title, description) {
        this.posts.push({
            id: generateID(),
            title: title,
            description: description
        });
    },
    deletePost(id) {
        this.posts.forEach(element => {
            let arrayId = element.id;

            let index = arrayId.indexOf();

            if (arrayId == id) {
                this.posts.splice(index, 1);
            }
        });
    }
};

let generateID = () => {
    return Math.random().toString(26).substr(2, 9);
};
