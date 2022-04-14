// PROTOTYPE

const meuArray = [];

console.log('Array.length', Array.length); // --> prop do prototype Array
console.log('Array.prototype', Array.prototype);

const minhaString = new String("olá");

console.log("olá -- minhaString.indexOf('o')", minhaString.indexOf('o'));
console.log('olá -- minhaString.prototype', minhaString.__proto__);

// TYPE CONVERSION COERSION -- coerção de tipo de dado

const minhaStrNumerica = '123';
console.log('minhaStrNumerica', minhaStrNumerica);
const meuNumero = Number(minhaStrNumerica);
console.log('meuNumero', meuNumero);
const meuArrayDaString = Array.from(meuNumero);
console.log('meuArrayDaString', meuArrayDaString);

// CONTANDO CARACTERES E DIGITOS

const minhaPalavra = 'palavra';
console.log('Qtd de caracteres minhaPalavra: ', minhaPalavra.length);
const numero = 1234;
console.log('Qtd de digitos meuNumero: ', String(numero).length);

// CASAS DECIMAIS
const meuValor = 259.9953545;
console.log('Meu valor com duas casas decimais', meuValor.toFixed(2));
console.log('Meu valor com duas casas decimais e virgula', meuValor.toFixed(2).replace('.', ','));

//  SEPARANDO STRINGS
const frase = "Minha frase com 5 palavras";
const fraseSeparadaEspacos = frase.split(' ');
console.log('Separando por espaços', fraseSeparadaEspacos);
console.log('Juntando trocando os espaços por virgulas', fraseSeparadaEspacos.join(', '));

// BUSCANDO PALAVRA EM STRING
console.log(frase.includes("palavras"));
console.log('Indice da busca', frase.indexOf("palavras"));

// CRIANDO ARRAY DO CONSTRUTOR
const meuArrayConstrutor = Array.from('abc');
console.log('meuArrayConstrutor', meuArrayConstrutor);

// MANIPULANDO ARRAYS
const arr = ['primeiro', 'segundo', 'terceiro', 'quarto', 'quinto'];

// add item no fim
let item = 'sexto';
arr.push(item);
console.log('push()', arr);

// add item no começo
item = 'zero';
arr.unshift(item);
console.log('unshift()', arr);

// remover item do fim
arr.pop();
console.log('pop()', arr);

// remover item do começo
arr.shift();
console.log('shift()', arr);

// pegar alguns elementos do array
arr.slice(2, arr.length - 1);
console.log('slice()', arr);

// remover alguns elementos do array
arr.splice(1, 1); // (INICIO, QTDE)
console.log('splice()', arr);






