const firstValue = window.prompt('Digite um valor: ');
const secondValue = window.prompt('Digite outro valor: ');

console.log('valor 1', firstValue);
console.log('valor 2', secondValue);
console.log('Tipo valor 1', typeof firstValue);
console.log('Tipo valor 2', typeof secondValue);

// console.log(`A soma entre ${firstValue} e ${secondValue} é ${firstValue + secondValue}???`);
console.log(`A soma entre ${firstValue} e ${secondValue} é ${Number(firstValue) + Number(secondValue)}`);
