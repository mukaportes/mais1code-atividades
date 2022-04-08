const meuNumero = 10;
console.log('meuNumero', meuNumero);

const minhaString = `palavra${meuNumero}`;
console.log('minhaString', minhaString);

const meuBooleano = true;
console.log('meuBooleano', meuBooleano);

let minhaVar;
console.log('minhaVar', minhaVar);
const indefinido = undefined;
console.log('indefinido', indefinido);
console.log('indefinido nao existe?', !indefinido);

const nulo = null;
console.log('nulo', nulo);
console.log('nulo nao existe?', !nulo);

const objeto = {
  chaveString: 'valor',
  chaveNumber: 132,
  chaveBoolean: true,
  chaveUndefined: undefined,
  chaveNull: null,
  chaveArray: [],
  chaveObject: {},
};
console.log('objeto', objeto);
console.log('objeto -> chaveString', objeto.chaveString);
console.log('objeto -> chaveNumber', objeto.chaveNumber);
console.log('objeto -> chaveBoolean', objeto.chaveBoolean);
console.log('objeto -> chaveUndefined', objeto.chaveUndefined);
console.log('objeto -> chaveNull', objeto.chaveNull);
console.log('objeto -> chaveArray', objeto.chaveArray);
console.log('objeto -> chaveObject', objeto.chaveObject);
console.log('objeto -> chaveNadaVer', objeto.chaveNadaVer);

objeto.novaChave = 'novoValor';
console.log('objeto -> novaChave', objeto.novaChave);

const lista = [
  'valor',
  132,
  true,
  undefined,
  null,
  ['valor'],
  { chave: 'valor' },
];
console.log('lista', lista);
console.log('lista - tamanho', lista.length);
console.log('lista -> itemString', lista[0]);
console.log('lista -> itemNumber', lista[1]);
console.log('lista -> itemBoolean', lista[2]);
console.log('lista -> itemUndefined', lista[3]);
console.log('lista -> itemNull', lista[4]);
console.log('lista -> itemArray', lista[5]);
console.log('lista -> itemObject', lista[6]);
console.log('lista -> itemNadaVer', lista[66]);
lista.push('novoItem');
console.log('lista -> novoItem', lista[7]);
console.log('lista', lista);


