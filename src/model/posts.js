module.exports = {
    posts: [],

    getAll() {
        return this.posts;
    },

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
