// pacote Express https://www.npmjs.com/package/express
const express = require('express');

// cria novo app express // cria um novo objeto express ao chamar express()
const app = express();

// cria uma rota para o endpoint /usuario no app
// localhost 127.0.0.1:PORTA --> basePath (caminho base)
app.post(
  '/usuario', // quero criar uma rota em: http://localhost:3000/usuario
  (request, response) => {
    const formulario = request;

    console.log('Requisição: ', request);
    console.log('Resposta: ', response);

    response.status(200).json({ message: 'Usuário criado com sucesso' });
  },
);

// inicia servidor na porta 3000
app.listen(3000);
console.log('Api ouvindo na porta 3000');
