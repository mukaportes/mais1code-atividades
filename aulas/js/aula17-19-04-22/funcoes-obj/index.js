const exibirCompras = () => console.log('Minhas compras', this.compras);
function exibirComprasFn() {
  console.log('Minhas compras', this.compras);
}

function MinhasCompras(listaDeCompras) {
  this.compras = listaDeCompras;

  this.getSoma = function() {
    let soma = 0;

    for (let i = 0; i < this.compras.length; i += 1) {
      soma += this.compras[i].valor;
    }

    exibirComprasFn();

    return this.compras.map(item => item.valor);
  }

  this.getSomaArrow = () => {
    let soma = 0;

    for (let i = 0; i < this.compras.length; i += 1) {
      soma += this.compras[i].valor;
    }

    exibirCompras();
    return this.compras.map(item => item.valor);
  };

  function getSomaIncorreta() {
    let soma = 0;

    for (let i = 0; i < this.compras.length; i += 1) {
      soma += this.compras[i].valor;
    }

    return this.compras.map(item => item.valor);
  }

  this.getSomaIncorreta = getSomaIncorreta;
  this.exibirCompras = exibirComprasFn.bind(this);

  this.getUltimaCompra = function() {
    return this.compras[this.compras.length - 1];
  }
}

const compras = new MinhasCompras([
  { valor: 100 },
  { valor: 110 },
  { valor: 120 },
  { valor: 130 },
  { valor: 140 },
  { valor: 150 },
]);

console.log('compras.getSoma()', compras.getSoma());
console.log('compras.getSomaArrow()', compras.getSomaArrow());
console.log('compras.getSomaIncorreta()', compras.getSomaIncorreta());
console.log('compras.getUltimaCompra()', compras.getUltimaCompra());
console.log('compras.exibirCompras()', compras.exibirCompras());