document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
});

function updatePosts() {
    const url = 'http://localhost:3001/api/all';

    fetch(url)
        .then(res => {
            let data = res.json();

            return data;
        })
        .then(data => {
            let postElements = '';

            let posts = JSON.parse(JSON.stringify(data));

            posts.forEach(post => {
                let postElement = `<div id="${post.avisosID}" class="card mb-5">
                                              <h5 class="card-title">${post.avisosTitulo}</h5>
                                              ${post.avisosDesc}
                                              <button>Editar</button><button>Remover</button>
                                   </div>`;

                postElements += postElement;
            });

            let divPosts = document.getElementById('posts');

            divPosts.innerHTML = postElements;
        });
}

const salvarButton = document.getElementById('salvarButton');

salvarButton.addEventListener('click', newPost);

function newPost() {
    let title = document.getElementById('title').value;

    let description = document.getElementById('desc').value;

    let post = { title, description };

    const url = 'http://localhost:3001/api/new';

    const options = {
        method: 'POST',
        body: JSON.stringify(post),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    };

    fetch(url, options).then(res => {
        console.log(res);

        updatePosts();

        document.getElementById('title').value = '';

        document.getElementById('desc').value = '';
    });
}

let divPosts = document.getElementById('posts');

divPosts.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target;

        const postDiv = button.parentNode;

        const divPosts = postDiv.parentNode;

        if (button.textContent === 'Remover') {
            const url = `http://localhost:3001/api/delete/${postDiv.id}`;

            const options = {
                method: 'DELETE',
                body: null,
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            };

            fetch(url, options).then(res => {
                console.log(res);
            });

            divPosts.removeChild(postDiv);

            updatePosts();
        } else if (button.textContent === 'Editar') {
            let title = document.createElement('input');

            title.type = 'text';

            title.value = postDiv.avisosTitulo;

            divPosts.insertBefore(title, postDiv.lastChild);

            let desc = document.createElement('input');

            desc.type = 'text';

            desc.value = postDiv.avisosDesc;

            divPosts.insertBefore(desc, postDiv.lastChild);

            button.textContent = 'Salvar';

            button.addEventListener('click', () => {
                editPost();
            });

            function editPost() {
                const url = `http://localhost:3001/api/edit/${postDiv.avisosID}`;

                const title = title.value;

                const desc = desc.value;

                const options = {
                    method: 'PUT',
                    body: JSON.stringify({ title }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                };

                fetch(url, options).then(res => {
                    console.log(res);

                    updateToDo();
                });
            }
        }
    }
});
