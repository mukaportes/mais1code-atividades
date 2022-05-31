// pacote Express https://www.npmjs.com/package/express
const express = require('express');
const { criarUsuario } = require('./src/controller');

// cria novo app express // cria um novo objeto express ao chamar express()
const app = express();
app.use(express.json())

app.post(
  '/usuario', // quero criar uma rota em: http://localhost:3000/usuario
  (request, response) => criarUsuario(request, response),
);

// inicia servidor na porta 3000
app.listen(3000);
console.log('Api ouvindo na porta 3000');
