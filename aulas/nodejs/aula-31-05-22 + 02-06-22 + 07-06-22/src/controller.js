const { alterarConteudoArquivo, lerConteudoArquivo } = require('./modulos/arquivo');

const caminhoArquivoDb = `${process.cwd()}/src/db.json`;

const criarUsuario = async (req, res) => {
  try {
    console.log('req', req);
    const novoUsuario = { nome: req.body.nome, email: req.body.email };

    const conteudoArquivo = await lerConteudoArquivo(caminhoArquivoDb); // retorna conteudo COMO STRING
    const conteudoConvertidoEmObjeto = JSON.parse(conteudoArquivo); // converte string em objeto

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

module.exports = {
  criarUsuario,
};