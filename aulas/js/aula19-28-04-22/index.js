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

const calcular = (valores) => {
  const operacao = String(valores);
  const removerEspacos = operacao.split(' ');
  let sinal;
  let nums1 = '';
  let nums2 = '';

  console.log(removerEspacos);
  removerEspacos.forEach((item) => {
    if (Number.isInteger(Number(item))) {
      if (!sinal) {
        nums1 += item;
      } else {
        nums2 += item
      }
    } else {
      sinal = item;
    }
  });

  console.log('nums1', nums1);
  console.log('nums2', nums2);

  if (sinal === '+') {
    return Number(nums1) + Number(nums2);
  } else if (sinal === '-') {
    return Number(nums1) - Number(nums2);
  } else if (sinal === '/') {
    return Number(nums1) / Number(nums2);
  } else if (sinal === '*') {
    return Number(nums1) * Number(nums2);
  }
};

console.log("document.getElementById('resetCalc')", document.getElementById('resetCalc'));
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




