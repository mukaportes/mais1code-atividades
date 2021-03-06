// FOR LOOP
let n = 10;
for (let i = 0; i < n; i += 1) {
  if (i === 2 || i === 3) {
    continue;
  }
  console.log('Execucao de numero: ', i);
  if (i === 6) {
    break;
  }
}

const minhaLista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// FOR OF com ITERAVEIS / ARRAY
for (let item of minhaLista) {
  console.log('Meu item: ', item);
}

const meuObjeto = {
  prop1: 'val1',
  prop2: 'val2',
  prop3: 'val3',
  prop4: 'val4',
  prop5: 'val5',
};
// FOR IN --> usado com OBJETOS
for (let propName in meuObjeto) {
  console.log('Propriedade: ', propName); // prop1
  console.log('Valor: ', meuObjeto[propName]); // val1
}

// WHILE
let whileIteration = 0;
let whileVal = 0;

while (whileVal < 3) {
  whileIteration++;
  if (whileIteration === 1) {
    continue;
  }

  if (whileIteration === 2) {
    break;
  }
  // whileVal += whileIteration; 
  whileVal = whileVal + whileIteration; 
}
console.log('While iteration: ', whileIteration);
console.log('While value: ', whileVal);

whileIteration = 0;
whileVal = 0;

console.log('CLEAR While iteration: ', whileIteration);
console.log('CLEAR While value: ', whileVal);

// DO WHILE
do {
  whileIteration++;
  whileVal += whileIteration;
} while(whileVal < 3);

console.log('Do While iteration: ', whileIteration);
console.log('Do While value: ', whileVal);