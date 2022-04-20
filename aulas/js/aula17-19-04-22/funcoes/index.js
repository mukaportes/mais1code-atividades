// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const exibirAlgo = (algo, algo2) => console.log('Algo: ', algo, algo2);
const retornarObjeto = () => ({
  prop1: 'val1',
});
/*

REESCREVENDO A FUNCAO ACIMA:

const exibirAlgo = (algo) => {
  return console.log('Algo: ', algo);
};

*/

function exibirAlgo2(algo) {
  console.log('Algo: ', algo);
}

const exibirAlgo3 = function (algo, algo2) {
  console.log('Algo: ', algo);
  console.log('Algo2: ', algo2);
};

exibirAlgo('algo1', 'algo5');
exibirAlgo2('algo2');
exibirAlgo3('algo3', 'algo4');

// CASO DE USO DE UMA FUNCAO
// Encontrar os numeros pares e impares de uma lista de numeros

function numeroPar(numero) {
  return numero % 2 === 0;
}

function getParImpar(numeros) {
  const resultado = { par: [], impar: [] }; 

  for (let i = 0; i < numeros.length; i += 1) {
    if (numeroPar(numeros[i])) {
      resultado.par.push(numeros[i]);
    } else {
      resultado.impar.push(numeros[i]);
    }
  }

  return resultado;
}

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listaNumeros2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(getParImpar(listaNumeros));
console.log(getParImpar(listaNumeros2));