const moduloArquivos = require('./modulos/arquivo');

const programa = () => {
  const argumentosTerminal = process.argv; // pega todos os argumentos do terminal
  console.log('argumentosTerminal', argumentosTerminal);

  if (argumentosTerminal[2] === 'criar') {
    const conteudoArquivo = 'Nosso novo arquivo!!!';
    moduloArquivos.criarArquivo(argumentosTerminal[3], conteudoArquivo);
  } else if (argumentosTerminal[2] === 'ler') {
    moduloArquivos.exibirConteudoArquivo(argumentosTerminal[3]);
  }
};

programa();