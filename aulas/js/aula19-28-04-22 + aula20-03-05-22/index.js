// PT2 -- MELHORIAS
const esconderElemento = (id) => {
  document.getElementById(id).style.display = 'none';
};

const exibirElemento = (id) => {
  document.getElementById(id).style.display = 'initial';
};

const exibirCalculadoraCientifica = () => {
  esconderElemento('cientificaCalc');
  exibirElemento('comumCalc');

  exibirElemento('aoQuadradoCalc');
  exibirElemento('aoCuboCalc');
  exibirElemento('raizCalc');
  exibirElemento('porcentoCalc');
  esconderElemento('maisCalc');
  esconderElemento('menosCalc');
  esconderElemento('divideCalc');
  esconderElemento('multiplicaCalc');
};

const exibirCalculadoraComum = () => {
  exibirElemento('cientificaCalc');
  esconderElemento('comumCalc');

  esconderElemento('aoQuadradoCalc');
  esconderElemento('aoCuboCalc');
  esconderElemento('raizCalc');
  esconderElemento('porcentoCalc');
  exibirElemento('maisCalc');
  exibirElemento('menosCalc');
  exibirElemento('divideCalc');
  exibirElemento('multiplicaCalc');
};

// EXECUTA FN PQ INICIALMENTE CARREGAMOS A CALC COMUM
exibirCalculadoraComum();


// USAR TECLADO PARA APERTAR BOTOES

// busca elementos pelo nome da classe
console.log("document.getElementsByClassName('col-4')", document.getElementsByClassName('col-4'));
// busca elementos pelo atributo name
console.log("document.getElementsByName('operacaoName')", document.getElementsByName('operacaoName'));
// busca UM elemento usando CSS
console.log("document.querySelector('div')", document.querySelector('div'));
// busca VARIOS elemento usando CSS
console.log("document.querySelectorAll('div')", document.querySelectorAll('p'));

// exibir valor do input na div do Visor
const exibirValorInput = () => {
  const valorInput = document.getElementById('valorOperacao').value;
  document.getElementById('visor').innerHTML = String(valorInput);
};

const alterarValorInput = (novoValor) => {
  if (document.getElementById('valorOperacao').value === '') {
    document.getElementById('valorOperacao').value = novoValor;
  } else {
    document.getElementById('valorOperacao').value += novoValor; 
  }
};

const limparInput = () => {
  document.getElementById('valorOperacao').value = '';
};

const executarOperacao = (sinal, num1, num2) => {
  console.log('input', { sinal, num1, num2 });
  if (sinal === '+') {
    return num1 + num2;
  } else if (sinal === '-') {
    return num1 - num2;
  } else if (sinal === '/') {
    return num1 / num2;
  } else if (sinal === '*') {
    return num1 * num2;
  } else if (sinal === '*') {
    return num1 * num2;
  } else if (sinal === '^2') {
    return num1 ** 2;
  } else if (sinal === '^3') {
    return num1 * 3;
  } else if (sinal === '√') {
    return Math.sqrt(num1);
  } else if (sinal === '%') {
    return num1 * (num2/100);
  }
};

// valores = '100 - 10'
const calcular = (valores) => {
  const operacao = String(valores); // operacao = '100 - 10'
  const removerEspacos = operacao.split(' '); // removerEspacos = ['100', '-', '10']
  let resultado = 0;
  let sinal; // '-';

  // ['100', '-', '10']
  // console.log('removerEspacos', removerEspacos);
  removerEspacos.forEach((item, index) => {
    // console.log('INICIO ITEM', { resultado, sinal }); 

    // se nao for um inteiro, altera o valor do sinal e executa a operação
    // armazenando seu retorno na var resultado
    if (!Number.isInteger(Number(item))) {
      sinal = item;
      resultado = executarOperacao(sinal, resultado, Number(removerEspacos[index + 1]));
    // se nao houver nenhum sinal, significa que é o primeiro item da lista
    // apenas atribuimos o valor do primeiro inteiro da lista na var resultado
    } else if (!sinal) {
      resultado = Number(item);
    }

    // console.log('FINAL ITEM', { resultado, sinal });
  });

  return resultado;
};

// ouve o clique de resetar e executa uma ação
document.getElementById('resetCalc').addEventListener('click', () => {
  limparInput();
  exibirValorInput();
});

// ouve o clique de mais e executa uma ação
document.getElementById('maisCalc').addEventListener('click', () => {
  alterarValorInput(' + ');
  exibirValorInput();
});
// ouve o clique de menos e executa uma ação
document.getElementById('menosCalc').addEventListener('click', () => {
  alterarValorInput(' - ');
  exibirValorInput();
});
// ouve o clique de dividir e executa uma ação
document.getElementById('divideCalc').addEventListener('click', () => {
  alterarValorInput(' / ');
  exibirValorInput();
});
// ouve o clique de multiplicar e executa uma ação
document.getElementById('multiplicaCalc').addEventListener('click', () => {
  alterarValorInput(' * ');
  exibirValorInput();
});
// ouve o clique de ao quadrado e executa uma ação
document.getElementById('aoQuadradoCalc').addEventListener('click', () => {
  alterarValorInput(' ^2 ');
  exibirValorInput();
});
// ouve o clique de ao cubo e executa uma ação
document.getElementById('aoCuboCalc').addEventListener('click', () => {
  alterarValorInput(' ^3 ');
  exibirValorInput();
});
// ouve o clique de raiz quadrada e executa uma ação
document.getElementById('raizCalc').addEventListener('click', () => {
  alterarValorInput(' √ ');
  exibirValorInput();
});
// ouve o clique de porcentagem e executa uma ação
document.getElementById('porcentoCalc').addEventListener('click', () => {
  alterarValorInput(' % ');
  exibirValorInput();
});

// ouve o clique de 1 e executa uma ação
document.getElementById('1Calc').addEventListener('click', () => {
  alterarValorInput('1');
  exibirValorInput();
});
// ouve o clique de 2 e executa uma ação
document.getElementById('2Calc').addEventListener('click', () => {
  alterarValorInput('2');
  exibirValorInput();
});
// ouve o clique de 3 e executa uma ação
document.getElementById('3Calc').addEventListener('click', () => {
  alterarValorInput('3');
  exibirValorInput();
});
// ouve o clique de 4 e executa uma ação
document.getElementById('4Calc').addEventListener('click', () => {
  alterarValorInput('4');
  exibirValorInput();
});
// ouve o clique de 5 e executa uma ação
document.getElementById('5Calc').addEventListener('click', () => {
  alterarValorInput('5');
  exibirValorInput();
});
// ouve o clique de 6 e executa uma ação
document.getElementById('6Calc').addEventListener('click', () => {
  alterarValorInput('6');
  exibirValorInput();
});
// ouve o clique de 7 e executa uma ação
document.getElementById('7Calc').addEventListener('click', () => {
  alterarValorInput('7');
  exibirValorInput();
});
// ouve o clique de 8 e executa uma ação
document.getElementById('8Calc').addEventListener('click', () => {
  alterarValorInput('8');
  exibirValorInput();
});
// ouve o clique de 9 e executa uma ação
document.getElementById('9Calc').addEventListener('click', () => {
  alterarValorInput('9');
  exibirValorInput();
});
// ouve o clique de 0 e executa uma ação
document.getElementById('0Calc').addEventListener('click', () => {
  alterarValorInput('0');
  exibirValorInput();
});

// ouve o clique de enter e executa uma ação
document.getElementById('enterCalc').addEventListener('click', () => {
  const input = String(document.getElementById('valorOperacao').value);
  limparInput();
  const calculo = calcular(input);
  alterarValorInput(calculo);
  exibirValorInput();
});




