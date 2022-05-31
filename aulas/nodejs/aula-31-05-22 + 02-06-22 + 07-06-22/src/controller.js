const { alterarConteudoArquivo, lerConteudoArquivo } = require('./modulos/arquivo');

const caminhoArquivoDb = `${process.cwd()}/src/db.json`;

const criarUsuario = async (req, res) => {
  try {
    console.log('req', req);
    const novoUsuario = { nome: req.body.nome, email: req.body.email };

    const conteudoArquivo = await lerConteudoArquivo(caminhoArquivoDb);
    const conteudoConvertidoEmObjeto = JSON.parse(conteudoArquivo);

    conteudoConvertidoEmObjeto.users.push(novoUsuario);

    const conteudoConvertidoEmString = JSON.stringify(conteudoConvertidoEmObjeto);

    await alterarConteudoArquivo(caminhoArquivoDb, conteudoConvertidoEmString);

    res.status(200).json({ message: 'Usuário criado com sucesso' });
  } catch (error) {
    console.error('Deu erro ao criar usuario', error);
    res.status(500).json({ message: 'Erro ao criar usuário' });
  }
};

module.exports = { criarUsuario };