const fs = require('fs');

const exibirConteudoArquivo = (caminhoArquivo) => {
  fs.readFile(caminhoArquivo, (error, conteudoArquivo) => {
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