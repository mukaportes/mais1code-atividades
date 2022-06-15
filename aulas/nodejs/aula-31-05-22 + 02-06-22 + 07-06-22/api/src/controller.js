const { alterarConteudoArquivo, lerConteudoArquivo } = require('./modulos/arquivo');

const caminhoArquivoDb = `${process.cwd()}/src/db.json`;

const criarUsuario = async (req, res) => {
  try {
    const novoUsuario = {
      nome: req.body.nome,
      email: req.body.email,
      books: [],
    };

    // validacao do body
    if (!novoUsuario.nome || !novoUsuario.email) {
      res.status(400).json({ message: 'Nome e email são obrigatórios' });
      return;
    }

    const conteudoArquivo = await lerConteudoArquivo(caminhoArquivoDb); // retorna conteudo COMO STRING
    const conteudoConvertidoEmObjeto = JSON.parse(conteudoArquivo); // converte string em objeto

    /**
     * {"users":[{"nome":"Murilo","email":"mport.dev@gmail.com"}]}
     * find()
     * -> recebe uma funcao pra ser executada com cada item do array
     * -> se o retorno da funcao for TRUE, retorna o item encontrado
     */
    // verifica se o email ja existe no 'banco'
    if (conteudoConvertidoEmObjeto.users.find(usuario => usuario.email === novoUsuario.email)) {
      res.status(400).json({ message: 'Email já cadastrado' });
      return;
    }

    conteudoConvertidoEmObjeto.users.push(novoUsuario);

    const conteudoConvertidoEmString = JSON.stringify(conteudoConvertidoEmObjeto);

    await alterarConteudoArquivo(caminhoArquivoDb, conteudoConvertidoEmString);

    // status 200 = SUCESSO
    res.status(200).json({ message: 'Usuário criado com sucesso' });
  } catch (error) {
    console.error('Deu erro ao criar usuario', error);
    // STATUS 500 = ERRO INTERNO NO SERVIDOR
    res.status(500).json({ message: 'Erro ao criar usuário' });
  }
};

const listarUsuarios = async (_, res) => {
  try {
    const conteudoArquivo = await lerConteudoArquivo(caminhoArquivoDb); // retorna conteudo COMO STRING
    const conteudoConvertidoEmObjeto = JSON.parse(conteudoArquivo); // converte string em objeto

    // status 200 = SUCESSO
    res.status(200).json({ usuarios: conteudoConvertidoEmObjeto.users });
  } catch (error) {
    console.error('Deu erro ao listar usuarios', error);
    // STATUS 500 = ERRO INTERNO NO SERVIDOR
    res.status(500).json({ message: 'Erro ao listar usuários' });
  }
};

const alterarUsuario = async (req, res) => {
  try {
    const emailUsuario = req.params.email; // lê email dos params da URL
    const novoUsuario = req.body; // usa o body da chamada como novoUsuario

    // validacao

    const conteudoArquivo = await lerConteudoArquivo(caminhoArquivoDb); // retorna conteudo COMO STRING
    const conteudoConvertidoEmObjeto = JSON.parse(conteudoArquivo); // converte string em objeto

    let indice;

    const usuario = conteudoConvertidoEmObjeto.users.find((usuario, findIndex) => {
      if (usuario.email === emailUsuario) indice = findIndex;

      return usuario.email === emailUsuario;
    });

    if (usuario) {
      conteudoConvertidoEmObjeto.users[indice] = {
        ...usuario, // copia o objeto usuario
        ...novoUsuario, // copia o objeto novoUsuario
        // caso tenham propriedades iguais/comuns entre os dois obj,
        // é obedecida a ordem, com novoUsuario sobrescrevendo as de usuario
      };
    }

    const conteudoConvertidoEmString = JSON.stringify(conteudoConvertidoEmObjeto);

    await alterarConteudoArquivo(caminhoArquivoDb, conteudoConvertidoEmString);

    // status 200 = SUCESSO
    res.status(200).json({ message: 'Usuário alterado com sucesso' });
  } catch (error) {
    console.error('Deu erro ao alterar usuario', error);
    // STATUS 500 = ERRO INTERNO NO SERVIDOR
    res.status(500).json({ message: 'Erro ao alterar usuário' });
  }
};

const deletarUsuario = async (req, res) => {
  try {
    const emailUsuario = req.params.email; // lê email dos params da URL

    const conteudoArquivo = await lerConteudoArquivo(caminhoArquivoDb); // retorna conteudo COMO STRING
    const conteudoConvertidoEmObjeto = JSON.parse(conteudoArquivo); // converte string em objeto

    let usuarioIndex;
    for (let i = 0; i < conteudoConvertidoEmObjeto.users.length; i += 1) {
      if (conteudoConvertidoEmObjeto.users[i].email === emailUsuario) {
        usuarioIndex = i;
        break;
      }
    }

    if (!usuarioIndex && usuarioIndex !== 0) { // verifica se é diferente de 0 pois o primeiro indice seria TRUE para !usuarioIndex
      res.status(400).json({ message: 'Email nao encontrado' });
    } else {
      conteudoConvertidoEmObjeto.users.splice(usuarioIndex, 1); // remove do arr um item a partir de usuarioIndex
      const conteudoConvertidoEmString = JSON.stringify(conteudoConvertidoEmObjeto);

      await alterarConteudoArquivo(caminhoArquivoDb, conteudoConvertidoEmString);

      // status 200 = SUCESSO
      res.status(200).json({ message: `Usuario ${emailUsuario} removido com sucesso` });
    }
  } catch (error) {
    console.error('Deu erro ao remover usuário', error);
    // STATUS 500 = ERRO INTERNO NO SERVIDOR
    res.status(500).json({ message: 'Erro ao remover usuário' });
  }
};

const criarLivroUsuario = async (req, res) => {
  try {
    const emailUsuario = req.params.email; // lê email dos params da URL
    const novoLivro = {
      titulo: req.body.titulo,
      autor: req.body.autor,
    };

    const conteudoArquivo = await lerConteudoArquivo(caminhoArquivoDb); // retorna conteudo COMO STRING
    const conteudoConvertidoEmObjeto = JSON.parse(conteudoArquivo); // converte string em objeto

    // buscar usuario com email fornecido
    let usuarioIndex;
    for (let i = 0; i < conteudoConvertidoEmObjeto.users.length; i += 1) {
      if (conteudoConvertidoEmObjeto.users[i].email === emailUsuario) {
        usuarioIndex = i;
        break;
      }
    }
    const usuario = conteudoConvertidoEmObjeto.users[usuarioIndex];

    // adicionar um item no array books do usuario
    usuario.books.push(novoLivro);

    const conteudoConvertidoEmString = JSON.stringify(conteudoConvertidoEmObjeto);

    await alterarConteudoArquivo(caminhoArquivoDb, conteudoConvertidoEmString);

    // status 200 = SUCESSO
    res.status(200).json({ message: `Livro do usuário ${emailUsuario} criado com sucesso` });
  } catch (error) {
    console.error('Deu erro ao listar usuarios', error);
    // STATUS 500 = ERRO INTERNO NO SERVIDOR
    res.status(500).json({ message: 'Erro ao listar usuários' });
  }
};

// const alterarLivroUsuario = () => { };

module.exports = {
  criarUsuario,
  listarUsuarios,
  alterarUsuario,
  deletarUsuario,
  criarLivroUsuario,
};