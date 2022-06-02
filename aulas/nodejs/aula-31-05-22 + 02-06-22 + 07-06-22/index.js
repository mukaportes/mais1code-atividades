// pacote Express https://www.npmjs.com/package/express
const express = require('express');
const { criarUsuario, metodo } = require('./src/controller');

// cria novo app express // cria um novo objeto express ao chamar express()
const app = express();

// habilita o body nas chamadas
// vc passa uma funcao pro use, e ela vai ser executada antes de todas as chamadas na API
app.use(express.json()) // middleware

// criando as rotas de usuario
app.post(
  '/usuario', // quero criar uma rota em: http://localhost:3000/usuario
  (request, response) => criarUsuario(request, response),
);

// inicia servidor na porta 3000
app.listen(3000);
console.log('Api ouvindo na porta 3000');
