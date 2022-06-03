// https://www.devmedia.com.br/javascript-operadores-rest-e-spread/41200

const usuario = {
  nome: 'Murilo',
  email: 'mport.dev@gmail.com'
};

const usuarioAlterado = {
  nomeCompleto: 'Portescheller Murilo',
  email: 'murilo@outlook.com'
};

const usuarioCopia = {
  ...usuario,
  ...usuarioAlterado,
};

console.log('usuario', usuario);
console.log('usuarioCopia', usuarioCopia);

const usuarios = [{
  nome: 'Murilo',
  email: 'mport.dev@gmail.com'
}];

const usuariosAlterados = [{
  nomeCompleto: 'Portescheller Murilo',
  email: 'murilo@outlook.com'
}];

const usuariosCopia = [
  ...usuarios,
  ...usuariosAlterados,
];

console.log('usuarios', usuarios);
console.log('usuariosCopia', usuariosCopia);