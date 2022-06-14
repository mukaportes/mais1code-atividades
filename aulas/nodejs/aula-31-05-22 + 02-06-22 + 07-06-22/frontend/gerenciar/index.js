// https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

const getUsuarios = () => {
  return fetch('http://localhost:3000/usuario', {
    method: 'GET',
    cache: 'default',
    mode: 'cors',
  });
};

const deleteUsuario = (email) => {
  if (confirm('Deseja realmente remover o usuário?')) {
    return fetch(`http://localhost:3000/usuario/${email}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json', },
      cache: 'default',
      mode: 'cors',
    })
      .then(() => {
        return getUsuarios()
          .then((response) => response.json())
          .then((bodyObjeto) => {
            const usuarios = bodyObjeto.usuarios;

            const tabelaBody = document.querySelector('#usuariosTabela');

            usuarios.forEach((usuario) => {
              const novaLinha = formatarNovaLinha(usuario);
              tabelaBody.innerHTML += novaLinha;
            });
          });
      });
  }
};

const patchUsuario = (email, body) => {
  return fetch(`http://localhost:3000/usuario/${email}`, {
    method: 'PATCH',
    headers: { 'content-type': 'application/json', },
    cache: 'default',
    mode: 'cors',
    body: JSON.stringify(body),
  });
};

const formatarNovaLinha = (usuario) => {
  return `
    <tr>
      <td scope="row">${usuario.nome}</td>
      <td>${usuario.email}</td>
      <td><button class="btn btn-primary" onclick="deleteUsuario('${usuario.email}')">REMOVER</button></td>
      <td><button class="btn btn-primary" onclick="patchUsuario('${usuario.email}')">ALTERAR</button></td>
    </tr>
  `;
};

getUsuarios()
  .then((response) => response.json())
  .then((bodyObjeto) => {
    const usuarios = bodyObjeto.usuarios;

    const tabelaBody = document.querySelector('#usuariosTabela');

    usuarios.forEach((usuario) => {
      const novaLinha = formatarNovaLinha(usuario);
      tabelaBody.innerHTML += novaLinha;
    });
  });

// EXEMPLO -> atualizando a cada 1s
// setInterval(() => {
//   getUsuarios()
//     .then((response) => response.json())
//     .then((bodyObjeto) => {
//       const usuarios = bodyObjeto.usuarios;

//       const tabelaBody = document.querySelector('#usuariosTabela');

//       usuarios.forEach((usuario) => {
//         const novaLinha = formatarNovaLinha(usuario);
//         tabelaBody.innerHTML += novaLinha;
//       });
//     });
// }, 1000)