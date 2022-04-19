// PROTOTYPE

const meuArray = [];

console.log('Array.length', meuArray.length); // --> prop do prototype Array
console.log('Array.prototype', meuArray.__proto__);

const minhaString = new String("olá");

console.log("olá -- minhaString.indexOf('o')", minhaString.indexOf('o'));
console.log('olá -- minhaString.prototype', minhaString.__proto__);

// TYPE CONVERSION COERSION -- coerção de tipo de dado // forçar um tipo de dado

const minhaStrNumerica = '123';
console.log('minhaStrNumerica', minhaStrNumerica);
const meuNumero = Number(minhaStrNumerica);
console.log('meuNumero', meuNumero);
const meuArrayDaString = Array.from(minhaStrNumerica);
console.log('meuArrayDaString', meuArrayDaString);

// CONTANDO CARACTERES E DIGITOS

const minhaPalavra = 'palavra';
console.log('Qtd de caracteres minhaPalavra: ', minhaPalavra.length);
const numero = 123;
console.log('Qtd de digitos meuNumero: ', String(numero).length);

// CASAS DECIMAIS
const meuValor = 259.165485;
console.log('Meu valor com duas casas decimais', meuValor.toFixed(2));
console.log('Meu valor com duas casas decimais e virgula', meuValor.toFixed(2).replace('.', ','));

//  SEPARANDO STRINGS
const frase = "Minha frase com 5 palavras";
const fraseSeparadaEspacos = frase.split(' ');
console.log('Separando por espaços', fraseSeparadaEspacos);
console.log('Juntando trocando os espaços por virgulas', fraseSeparadaEspacos.join('***'));

const tituloVideo = "Meu Primeiro Video Online";
const tituloEmEspaços = tituloVideo.toLowerCase().split(' ');
const slug = tituloEmEspaços.join('-');
console.log('tituloVideo', tituloVideo);
console.log('slug', slug);

// BUSCANDO STRING EM STRING
console.log(frase.includes("palavras"));
console.log('Indice da busca', frase.indexOf("Apalavras"));

// CRIANDO ARRAY DO CONSTRUTOR
const arrBasico = ['a', 'b', 'c'];
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
// ['primeiro', 'terceiro', 'quarto', 'quinto']
const sliceArr = arr.slice(25, 50);
console.log('slice()', sliceArr);

// remover alguns elementos do array
arr.splice(1, 1); // (INICIO, QTDE)
console.log('splice()', arr);
