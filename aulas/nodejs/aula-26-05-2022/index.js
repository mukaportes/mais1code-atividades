const fs = require('fs');

const adicionarLinhasCallback = () => {
  // Insere primeira nova linha
  fs.appendFile('arquivo.txt', '\nnovaLinha', (err, data) => {
    if (err) throw new Error(err);

    // Lê arquivo
    fs.readFile('arquivo.txt', (err, data) => {
      if (err) throw new Error(err);

      console.log('Dados do arquivo: ', data.toString());

      // Insere segunda nova linha
      fs.appendFile('arquivo.txt', '\nnovaLinha', (err, data) => {
        if (err) throw new Error(err);

        // Lê arquivo novamente
        fs.readFile('arquivo.txt', (err, data) => {
          if (err) throw new Error(err);

          console.log('Dados do arquivo 2: ', data.toString());
        });
      });
    });
  });
};

adicionarLinhasCallback();
console.log('Após executar adicionarLinhasCallback()');