document.addEventListener("DOMContentLoaded", () => {
    updatePosts();
});

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

            // if ("undefined" || "null" === typeof posts) {
            //     let divPosts = document.getElementById("posts");

            //     divPosts.innerHTML = "";
            // }
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

            let divPosts = document.getElementById("posts");

            divPosts.innerHTML = postElements;
        });
}

const salvarButton = document.getElementById("salvarButton");

salvarButton.addEventListener("click", newPost);

function newPost() {
    let title = document.getElementById("title").value;

    let description = document.getElementById("desc").value;

    let post = { title, description };

    const url = "http://localhost:3000/api/new";

    const options = {
        method: "POST",
        body: JSON.stringify(post),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    };

    fetch(url, options).then(res => {
        console.log(res);

        updatePosts();

        document.getElementById("title").value = "";

        document.getElementById("desc").value = "";
    });
}
