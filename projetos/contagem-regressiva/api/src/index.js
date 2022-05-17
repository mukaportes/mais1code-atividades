const express = require('express');

// cria novo app express
const app = express();

// cria uma rota para o endpoint /usuario no app
app.post(
  '/usuario',
  (req, res) => {
    const formulario = req.body;

    console.log('Formulario: ', formulario);

    res.status(200).json({ message: 'Usuário criado com sucesso' });
  },
);

// inicia servidor na porta 3000
app.listen(3000);
console.log('App is litening on port 3000');