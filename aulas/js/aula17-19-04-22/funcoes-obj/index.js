// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions#the_function_constructor

const exibirCompras = () => {
  this.compras = 'compras';
  console.log('Minhas compras', this.compras)
};
function exibirComprasFn() {
  console.log('Minhas compras', this.compras);
}

// É POSSIVEL TRABALHAR COM CLASSES - FUNCIONAM DA MESMA FORMA QUE A function Compras()
// class MinhaClasse extends OutraClasse {

// }

// OBJECT FUNCTIONS SÓ FUNCIONAM COM function NAO COM arrow function
function Compras(listaDeCompras) {
  this.compras = listaDeCompras;

  this.getSoma = function() {
    let soma = 0;

    for (let i = 0; i < this.compras.length; i += 1) {
      soma += this.compras[i].valor;
    }

    // exibirComprasFn();

    return soma;
  }

  this.getSomaArrow = () => {
    let soma = 0;

    for (let i = 0; i < this.compras.length; i += 1) {
      soma += this.compras[i].valor;
    }

    // exibirCompras();
    return soma;
  };

  function getSomaAlternativo() {
    let soma = 0;

    for (let i = 0; i < this.compras.length; i += 1) {
      soma += this.compras[i].valor;
    }

    return soma;
  }

  this.getSomaAlternativo = getSomaAlternativo;
  this.exibirCompras = exibirComprasFn.bind(this);

  this.getUltimaCompra = function() {
    return this.compras[this.compras.length - 1];
  }
}

const numero = new Number(23);
const compras = new Compras([
  { valor: 100 },
  { valor: 110 },
  { valor: 120 },
  { valor: 130 },
  { valor: 140 },
  { valor: 150 },
]);

console.log('compras.getSoma()', compras.getSoma());
console.log('compras.getSomaArrow()', compras.getSomaArrow());
console.log('compras.getSomaAlternativo()', compras.getSomaAlternativo());
console.log('compras.getUltimaCompra()', compras.getUltimaCompra());
console.log('compras.exibirCompras()', compras.exibirCompras());

const compras2 = new Compras([
  { valor: 200 },
  { valor: 210 },
  { valor: 220 },
  { valor: 230 },
  { valor: 240 },
  { valor: 250 },
]);

console.log('compras2.getSoma()', compras2.getSoma());
console.log('compras2.getSomaArrow()', compras2.getSomaArrow());
console.log('compras2.getSomaAlternativo()', compras2.getSomaAlternativo());
console.log('compras2.getUltimaCompra()', compras2.getUltimaCompra());
console.log('compras2.exibircompras2()', compras2.exibirCompras());