// QUANDO UM FORM É ENVIADO
// NO NAVEGADOR
function enviarFormulario(respostasForm) {
  enviarParaAPI(respostasForm);
}

// QUANDO UM FORM É RECEBIDO
// NO BACK-END
function receberFormulario(respostasForm) {
  salvarNoBancoDeDados(respostasForm);
}