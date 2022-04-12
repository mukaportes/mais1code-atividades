const personName = window.prompt('Nome do funcionário: ');
let personSalary = window.prompt('Salário do funcionário: ');

personSalary = Number(personSalary).toFixed(2);

console.log(`O funcionário ${personName} tem um salário de R$ ${personSalary} em Abril/22`);