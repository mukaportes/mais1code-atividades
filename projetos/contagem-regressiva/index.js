const dataFinal = new Date('2022-05-15').getTime();

// https://bearnithi.com/2019/11/10/how-to-calculate-the-time-difference-days-hours-minutes-between-two-dates-in-javascript/
const calcularDiferenca = (novaData) => {
  let diferenca = (dataFinal - new Date(novaData).getTime()) / 1000;
  const resultado = {
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  };

  resultado.dias = Math.floor(diferenca / 86400);
  diferenca -= resultado.dias * 86400;

  resultado.horas = Math.floor(diferenca / 3600) % 24;
  diferenca -= resultado.horas * 3600;

  resultado.minutos = Math.floor(diferenca / 60) % 60;
  diferenca -= resultado.minutos * 60;

  resultado.segundos = Math.floor(diferenca);

  return resultado;
};

const elementoDias = document.getElementById('contagem-dias');
const elementoHoras = document.getElementById('contagem-horas');
const elementoMinutos = document.getElementById('contagem-minutos');
const elementoSegundos = document.getElementById('contagem-segundos');
setInterval(() => {
  const dataAgora = new Date().toISOString();
  const diferenca = calcularDiferenca(dataAgora);

  elementoDias.innerHTML = diferenca.dias;
  elementoHoras.innerHTML = diferenca.horas;
  elementoMinutos.innerHTML = diferenca.minutos;
  elementoSegundos.innerHTML = diferenca.segundos;
}, 1000); // 1000ms = 1s