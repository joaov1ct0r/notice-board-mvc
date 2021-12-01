document.addEventListener("DOMContentLoaded", () => {
    updatePosts();
});

const salvarButton = document.getElementById("salvarButton");

function updatePosts() {
    const url = "http://localhost:3000/api/all";

    fetch(url)
        .then(res => {
            let data = res.json();

            return data;
        })
        .then(data => {
            let postElements = "";

            let posts = JSON.parse(JSON.stringify(data));

            posts.forEach(post => {
                let postElement = `<div id="${post.id}" class="card mb-5">
                                      <div class="card-header">
                                          <h5 class="card-title">${post.title}</h5>
                                      </div>
                                      <div class="card-body">
                                          <div class="card-text">${post.description}</div>
                                      </div>
                                  </div>`;

                postElements += postElement;
            });

            let post = document.getElementById("posts");

            post.innerHTML = postElements;
        });
}

function newPost() {}

salvarButton.addEventListener("click", newPost);
