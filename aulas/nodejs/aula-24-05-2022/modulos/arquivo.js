const fs = require('fs');

// procurar as pastas
// procurar o arquivo
// ler o conteudo
// converter o conteudo em string
// executar o callback

// arquivo.txt
// /aula-24-05-2022/modulos/arquivos.txt
const exibirConteudoArquivo = (nomeArquivo) => {
  const caminhoArquivo = `${process.cwd()}/_arquivos/${nomeArquivo}`;

  fs.readFile(caminhoArquivo, (error, conteudoArquivo) => { // isso é um callback
    if (error) console.error('Erro ao ler arquivo', error);
    else console.log(`Conteudo do arquivo ${caminhoArquivo}`, conteudoArquivo);
  });
};

const criarArquivo = (nomeArquivo, conteudoArquivo) => {
  const caminhoArquivo = `${process.cwd()}/_arquivos/${nomeArquivo}`;

  fs.writeFile(caminhoArquivo, conteudoArquivo, (error) => {
    if (error) console.error('Erro ao criar arquivo', error);
    else console.log(`Novo arquivo criado com sucesso ${caminhoArquivo}`, conteudoArquivo);
  });
};

module.exports = {
  exibirConteudoArquivo,
  criarArquivo,
};