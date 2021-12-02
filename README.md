# muralAvisos

<h2>Requisitos</h2>

<ul>
  <li>NodeJS</li>
  <p><code>sudo apt install nodejs</code></p>
  <br>
  <li>NPM</li>
  <p><code>sudo apt install npm</code></p>
  <br>
  <li>Express</li>
  <p><code>npm install express</code></p>
  <br>
  <li>path</li>
  <p><code>require("path")</code></p>
  <li>body-parser</li>
  <p><code>npm install body-parser</code></p>
  <br>
</ul>

<h2>Sobre</h2>

<p>Mural de avisos criado em Javascript, NodeJS(Express), HTML e Bootstrap, com 2 inputs um para criar o titulo do aviso e outro para a descrição, quando os input são preenchidos e o botão salvar é pressionado ele faz uma requisição para a api.js enviando os dados, a api então envia os dados para um array em posts.js usando o metodo posts.newPost e o metodo newPost cria um novo objeto com um id gerado a partir da função generateID, um title e um description, quando finalizado a função updatePosts do script.js é executada, essa função faz um fetch com metodo get para a api.js retornando todos os objetos do array posts e criando então uma nova div no index.html para cada objeto.</p>

<h2>Pictures</h2>
