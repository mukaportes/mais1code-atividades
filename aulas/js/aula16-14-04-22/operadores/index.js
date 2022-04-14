// NEW -- cria um novo objeto a partir  de um prototype, function ou classe
const meuNum = new Number(23);
console.log('meuNum', meuNum);

// TYPEOF -- retorna tipo de dado da variavel em 'typeof VARIAVEL'
const meuNumType = typeof meuNum;
console.log('meuNumType', meuNumType);
const minhaStr = 'palavra';
console.log('minhaStr typeof', typeof minhaStr);

// DELETE -- deleta propriedade de um objeto
const meuObj = {
  prop1: 'val',
  prop2: 'val',
  prop3: 'val',
};
console.log('PRE DELETE meuObj', meuObj);
delete meuObj.prop2;
delete meuObj.prop4;
console.log('APOS DELETE meuObj', meuObj);

// OPERADORES ARTIMETICOS
const soma = 50 + 10;
const subtracao = 50 - 10;
const divisao = 50 / 10;
const multiplicacao = 50 * 10;

const restoDivisao = 50 % 4;
let incremento = 10;
incremento++;
let decremento = 10;
decremento--;
const exponencial = 3 ** 3; // 3^3 ou 3³

console.log('Operadores aritmeticos', {
  '50 + 10': soma,
  '50 - 10': subtracao,
  '50 / 10': divisao,
  '50 * 10': multiplicacao,
  '50 % 10': restoDivisao,
  '10++': incremento,
  '10--': decremento,
  '3³': exponencial,
});

// AGRUPAMENTO DE EXPRESSOES
console.log('5 + 10 * 10', 5 + 10 * 10);
console.log('(5 + 10) * 10', (5 + 10) * 10);
console.log('5 + (10 * 10)', 5 + (10 * 10));

// OPERADORES DE COMPARACAO IGUAL
const igual = 10 == '10';
console.log("Igual --> 10 == '10'", igual);

// OPERADORES DE COMPARACAO ESTRITAMENTE IGUAL
const estritamenteIgual = 10 === '10';
console.log("estritamenteIgual --> 10 === '10'", estritamenteIgual);

// OPERADORES DE COMPARACAO MAIOR, MENOR OU IGUAL A
const maiorQue = 1 > 0;
const menorQue = 10 < 100;
const maiorIgualQue = 1 >= 1;
const menorIgualQue = 10 <= 100;

// OPERADORES DE ATRIBUICAO
let atriNum = 1;
console.log('atriNum', atriNum);

atriNum += 2;
console.log('atriNum --- +=', atriNum);

atriNum -= 1;
console.log('atriNum --- -=', atriNum);

atriNum *= 2;
console.log('atriNum --- *=', atriNum);

atriNum /= 2;
console.log('atriNum --- /=', atriNum);

atriNum = 4;
atriNum %= 2;
console.log('atriNum --- %=', atriNum);

atriNum = 2;
atriNum **= 2;
console.log('atriNum --- **=', atriNum);

// OPERADORES LOGICOS
const verdade = 1 === 1;
const mentira = 1 === 2;

console.log('AND false', verdade && mentira);
console.log('AND true', verdade && verdade);
console.log('OR false', verdade || mentira);
console.log('OR true', mentira || mentira);
console.log('NOT false', verdade);
console.log('NOT true', !mentira);





