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
  <li>MySQL2</li>
  <p><code>npm install --save mysql2</code></p>
  <br>
  <li>Sequelize</li>
  <p><code>npm install sequelize</code></p>
  <br>
  <li>dotenv</li>
  <p><code>npm install dotenv</code></p>
  <br>
  <li>@Hapi/Joi</li>
  <p><code>npm install @hapi/joi</code></p>
  <br>
</ul>

<h2>Sobre</h2>

<p>Mural de avisos criado em Javascript, NodeJS(Express), HTML, Bootstrap e MySQL, com 2 inputs um para criar o titulo do aviso e outro para a descrição</p>

<p>Quando os input são preenchidos e o botão salvar é pressionado ele faz uma requisição para a api.js enviando os dados, a api então envia os dados para o banco de dados mysql usando o metodo newPost do arquivo posts.js</p>

<p>Quando os novos avisos são criados dois botões surgem para cada aviso 'editar' e o 'remover'</p>

<p>O editar edita o titulo e a descrição de um aviso enviando uma requisição para a rota /api/edit que então envia um request para o banco de dados por meio do metodo changePost do arquivo posts.js editando o dado escolhido</p>

<p>O Remover remove um aviso do banco de dados fazendo uma requisição para a rota /api/delete que faz uma requisição ao banco de dados mysql pelo metodo deletePost que então deleta o aviso selecionado</p>

Quando finalizado a função updatePosts do script.js é executada, essa função faz um fetch com metodo get para a api.js retornando todos os objetos do banco de dados mysql e criando então uma nova div no index.html para cada objeto.</p>

<h2>MODO DE USO</h2>

<h3>GIT</h3>
<hr>

<p>FAÇA O DOWNLOADS DO REPOSITORIO OU USE:<br><code>git clone git@github.com:joaov1ct0r/muralAvisos.git</code></p>

<h3>VARIAVEIS DE AMBIENTE</h3>
<hr>

<p>CRIE UM ARQUIVO .env NO DIRETORIO PRINCIPAL DO PROJETO E ALTERE O VALOR DAS VARIAVEIS PARA SEUS DADOS</p>

<ul>
  <li>SERVER_PORT = PORTA DO SEU SERVIDOR</li>
  <li>DB_HOST = HOST DO SEU DB</li>
  <li>DB_USER = USUARIO DO SEU DB</li>
  <li>DB_PASSWORD = SENHA DO SEU DB</li>
  <li>DB_DATABASE = NOME DO SEU DB</li>
  <li>DB_PORT = PORTA DO SEU DB</li>
</ul>

<h3>DEPENDENCIAS</h3>
<hr>

<p>INSTALE TODAS AS DEPENDENCIAS COM O COMANDO: <code>npm install</code></p>

<h3>MySQL</h3>
<hr>

<p>INICIE O SEU SERVIDOR MYSQL COM O COMANDO:<br><code>sudo systemctl start mysql</code></p>

<p>CRIE UM BANCO DE DADOS ATRAVES DO TERMINAL OU COM OUTRO GERENCIADOR DE BANCO DE DADOS MYSQL, COM O NOME DE: muralAvisos</p>

<h3>SERVER</h3>
<hr>

<p>APOS TER OS ARQUIVOS EM SUA MAQUINA INICIE O SERVIDOR WEB NO SEU TERMINAL COM O COMANDO:<br><code>npm start</code></p>

<p>APOS ISSO ABRA O NAVEGADOR E ENTRE COM A SEGUINTE URL:<br><code>http://localhost:3000/</code></p>

<p>A PAGINA PARA A LISTA DE TAREFAS SERA ABERTA E ESTARA PRONTA PARA CRIAR, ARMAZENAR, EDITAR E EXCLUIR SUAS TAREFAS</p>

<h2>Pictures</h2>

![muralAvisos](https://user-images.githubusercontent.com/79015823/144490406-5d378b76-edf9-4f22-906e-1b6c73068c0d.jpg)
