// https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

const buscarUsuarios = () => {
  return fetch('http://localhost:3000/usuario', {
    method: 'GET',
    cache: 'default',
    mode: 'cors',
  });
};

const removerUsuario = (email) => {
  if (confirm('Deseja realmente remover o usuário?')) {
    return fetch(`http://localhost:3000/usuario/${email}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json', },
      cache: 'default',
      mode: 'cors',
    })
      .then(() => {
        return buscarUsuarios()
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

const alterarUsuario = (email, body) => {
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
      <th scope="row">${usuario.nome}</th>
      <td>${usuario.email}</td>
      <td><button class="btn btn-primary" onclick="removerUsuario('${usuario.email}')">REMOVER</button></td>
      <td><button class="btn btn-primary" onclick="alterarUsuario('${usuario.email}')">ALTERAR</button></td>
    </tr>
  `;
};

buscarUsuarios()
  .then((response) => response.json())
  .then((bodyObjeto) => {
    const usuarios = bodyObjeto.usuarios;

    const tabelaBody = document.querySelector('#usuariosTabela');

    usuarios.forEach((usuario) => {
      const novaLinha = formatarNovaLinha(usuario);
      tabelaBody.innerHTML += novaLinha;
    });
  });