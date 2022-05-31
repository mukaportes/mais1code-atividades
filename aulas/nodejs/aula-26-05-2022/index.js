// https://dev.to/viniciusersouza/explicando-promises-de-uma-forma-didtica-2pjk
// https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2

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

// 3 motivos pra usar Promise:
// 1 - quando voce precisar usar varias operações assincronas (promises) 
// no mesmo bloco {}
// 2 - quando voce executar codigo muito custoso (muitos dados, consumo alto de memoria)
// deve-se colocar dentro de uma promise para o programa nao ficar esperando
// 3 - quando voce precisar executar funcoes/processos em paralelo
const funcaoPromise = (meuErro, meusDados) => new Promise((resolve, reject) => {
  if (meuErro) funcaoPromise();
  resolve(meusDados);
});
// const funcaoPromise = (meuErro, meusDados) => {
//   if (meuErro) throw new Error(meuErro);
//   return meusDados;
// };

// Executou a promise:
// ESTADO: pending
// ESTADO: resolved quando resolve()
// ESTADO: rejected quando reject()
// ESTADO: fullfiled quando resolved ou rejected
let taCarregando = false;
const resultadoPromise = funcaoPromise(undefined, 'Meu sucesso')
  .then((resultado) => {
    console.log('MEU RESULTADO', resultado);
    taCarregando = false;
  })
  .catch((erro) => {
    console.error('erro', erro);
    taCarregando = false;
  });
taCarregando = true

console.log('resultadoPromise', resultadoPromise);
console.log('depois de exibir a promise ====================== ');

setTimeout(() => {
  console.log('resultadoPromise', resultadoPromise);
}, 3000);
// adicionarLinhasCallback();
// console.log('Após executar adicionarLinhasCallback()');

// Exemplos operações assincronas:
// - conexao/operacao no banco de dados
// - conexao HTTP
// - APIs
// - trabalhar com arquivos
// - operaçoes em tempo real
// - processar grandes quantidades de dados



// Cadastrar um usuario no banco de dados
// cadastrarUser(); 
//    - validar usuario
//    - formatar usuario
//    - conectar com o banco de dados // assincrono
//    - salvo no banco de dados // assincrono
// enviaEmailDeConfirmação();
//    - validar email
//    - enviar email