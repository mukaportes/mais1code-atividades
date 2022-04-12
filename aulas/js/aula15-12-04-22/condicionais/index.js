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
minhaVariavel = 3;
if (minhaVariavel === 1) {
  console.log('Minha variavel é 1');
} else if (minhaVariavel === 3) {
  console.log('Minha variavel é 3');
} else {
  console.log('Minha variavel nao é 1 nem 3');
}

minhaVariavel = 4;
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

minhaVariavel = 3;
// TERNARIO
const outraVar = minhaVariavel === 3 ? 'minhaVariavelÉ3' : 'minhaVariavelNaoÉ3';
console.log('outraVar', outraVar);
