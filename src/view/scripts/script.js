document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
});

async function updatePosts() {
    const url = 'http://localhost:3001/api/all';

    const response = await fetch(url);

    if (response.status === 200) {
        const data = await response.json();

        let postElements = '';

        let posts = JSON.parse(JSON.stringify(data));

        posts.forEach(post => {
            let postElement = `<div id="${post.avisosID}" class="card mb-5">
                                              <h5 class="card-title">${post.avisosTitulo}</h5>
                                              <p>${post.avisosDesc}</p>
                                              <button>Editar</button><button>Remover</button>
                                   </div>`;

            postElements += postElement;
        });

        let divPosts = document.getElementById('posts');

        divPosts.innerHTML = postElements;
    } else alert('Falha ao obter dados!');
}

const salvarButton = document.getElementById('salvarButton');

salvarButton.addEventListener('click', async () => {
    let title = document.getElementById('title').value;

    let description = document.getElementById('desc').value;

    let post = { title, description };

    const url = 'http://localhost:3001/api/new';

    const options = {
        method: 'POST',
        body: JSON.stringify(post),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    };

    const response = await fetch(url, options);

    if (response.status === 200) {
        alert('Aviso adicionado com sucesso!');

        updatePosts();

        document.getElementById('title').value = '';

        document.getElementById('desc').value = '';
    } else alert('Falha ao adicionar novo aviso!');
});

let divPosts = document.getElementById('posts');

divPosts.addEventListener('click', async event => {
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

            const response = await fetch(url, options);

            if (response.status === 200) {
                divPosts.removeChild(postDiv);

                updatePosts();
            }
        } else if (button.textContent === 'Editar') {
            let title = document.createElement('input');

            title.type = 'text';

            let h5 = postDiv.children[0].textContent;

            title.value = h5;

            divPosts.insertBefore(title, postDiv);

            let description = document.createElement('input');

            description.type = 'text';

            description.value = postDiv.children[1].textContent;

            divPosts.insertBefore(description, postDiv);

            button.textContent = 'Salvar';

            button.addEventListener('click', () => {
                editPost(postDiv.id, title.value, description.value);
            });

            function editPost(index, title, description) {
                const url = `http://localhost:3001/api/edit/${index}`;

                // const title = title.value;

                // const desc = desc.value;

                const options = {
                    method: 'PUT',
                    body: JSON.stringify({ title, description }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                };

                fetch(url, options).then(res => {
                    console.log(res);

                    updatePosts();
                });
            }
        }
    }
});
