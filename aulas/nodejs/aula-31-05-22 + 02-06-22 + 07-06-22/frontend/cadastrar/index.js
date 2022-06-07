// https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

const postUsuario = (body) => {
  return fetch('http://localhost:3000/usuario', {
    method: 'POST',
    headers: { 'content-type': 'application/json', },
    cache: 'default',
    mode: 'cors',
    body: JSON.stringify(body),
  });
};

document.querySelector('#cadastroUsuario').addEventListener('submit', function (evento) {
  evento.preventDefault(); // previne envio nativo do formulario

  const formData = new FormData(evento.target);
  const formProps = Object.fromEntries(formData);

  postUsuario(formProps)
    .then(() => alert('Usuário criado com sucesso'))
    .catch((error) => {
      console.error('Erro ao criar usuário', error);
      alert('Falha ao criar usuário');
    });
});