// pacote Express https://www.npmjs.com/package/express
const express = require('express');
const cors = require('cors');
const {
  criarUsuario,
  listarUsuarios,
  alterarUsuario,
  deletarUsuario,
  criarLivroUsuario,
} = require('./src/controller');

// cria novo app express // cria um novo objeto express ao chamar express()
const app = express();

// habilita cors
app.use(cors());

// habilita o body nas chamadas
// vc passa uma funcao pro use, e ela vai ser executada antes de todas as chamadas na API
app.use(express.json()) // middleware

// criar um usuario
app.post(
  '/usuario', // quero criar uma rota em: http://localhost:3000/usuario
  (request, response) => criarUsuario(request, response),
);
// listar usuarios
app.get(
  '/usuario', // quero criar uma rota em: http://localhost:3000/usuario
  (request, response) => listarUsuarios(request, response),
);
// alterar usuario
app.patch(
  '/usuario/:email', // quero criar uma rota em: http://localhost:3000/usuario
  (request, response) => alterarUsuario(request, response),
);
// deletar usuario
app.delete(
  '/usuario/:email', // quero criar uma rota em: http://localhost:3000/usuario
  (request, response) => deletarUsuario(request, response),
);
// criar livro usuario
app.post(
  '/usuario/:email/livro', // quero criar uma rota em: http://localhost:3000/usuario
  (request, response) => criarLivroUsuario(request, response),
);

// inicia servidor na porta 8000
app.listen(8000);

console.log('Api ouvindo na porta 8000');
