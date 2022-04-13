let minhaVariavel = 1;

// IF
if (minhaVariavel === 1) {
  console.log('Minha variavel é 1');
}

// IF-ELSE
minhaVariavel = 2;
if (minhaVariavel === 1) {
  console.log('Minha variavel é 1');
} else {
  console.log('Minha variavel é diferente de 1');
}

// IF-ELSE IF-ELSE
minhaVariavel = 4;
if (minhaVariavel === 1 || minhaVariavel === 4) {
  console.log('Minha variavel é 1 ou 4');
} else if (minhaVariavel === 3 && minhaVariavel < 4) {
  console.log('Minha variavel é 3');
} else {
  console.log('Minha variavel nao é 1 nem 3');
}

minhaVariavel = 1;
// SWITCH CASE
switch(minhaVariavel) {
  case 1:
    console.log('Minha variavel é 1');
    break;
  case 3:
    console.log('Minha variavel é 3');
    break;
  default:
    console.log('Minha variavel nao é 1 nem 3');
}

minhaVariavel = 4;
// TERNARIO
const outraVar = minhaVariavel === 3 ? 'minhaVariavelÉ3' : 'minhaVariavelNaoÉ3';
// let outraVar;
// if (minhaVariavel === 3) {
//   outraVar = 'minhaVariavelÉ3';
// } else {
//   outraVar = 'minhaVariavelNaoÉ3';
// }

console.log('outraVar', outraVar);
