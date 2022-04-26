/**
 * Como ocorre com o construtor de Strings, onde criamos uma string 
 * e seu respectivo prototype contendo métodos como concat(), includes(), indexOf(),
 * iremos criar um módulo para ser um construtor de Contatos, contendo métodos
 * para validar e formatar os dados de um contato, verificar qual categoria se encaixa
 */

/**
 * novoContato tem a seguinte estrutura:
 * {
 *    primeiroNome: string,
 *    sobrenome: string,
 *    idade: number,
 *    telefone: string,
 * } 
 */
const Contato = function(novoContato = {}) {
  this.contato = novoContato;

  this.getContatoErros = () => {
    const listaDeErros = [];

    // Valida primeiro nome
    if (!this.contato.primeiroNome || typeof this.contato.primeiroNome !== 'string') {
      listaDeErros.push('Primeiro nome inválido');
    }

    // Valida sobrenome
    if (!this.contato.sobrenome || typeof this.contato.sobrenome !== 'string') {
      listaDeErros.push('Sobrenome inválido');
    }

    // Valida idade
    if (!this.contato.idade || typeof this.contato.idade !== 'number') {
      listaDeErros.push('Idade inválida');
    }
    
    // Valida telefone
    if (!this.contato.telefone || typeof this.contato.telefone !== 'string') {
      listaDeErros.push('Telefone inválido');
    }

    return listaDeErros;
  };

  // Considerando que tenhamos duas opções para formatação: uma para exibir o contato 
  // e outra para salvar o contato com nome completo em um só campo 
  this.getContatoFormatado = (salvar = false) => {
    if (salvar) {
      return {
        nome: `${this.contato.primeiroNome} ${this.contato.sobrenome}`,
        idade: this.contato.idade,
        telefone: this.contato.telefone,
      };
    } else {
      return {
        ...this.contato,
        categoria: this.getCategoriaIdade(),
      };
    }
  };

  this.getCategoriaIdade = () => {
    const numIdade = Number(this.contato.idade);
  
    if (numIdade < 13) return 'Criança';
    else if (numIdade > 13 && numIdade < 18) return 'Adolescente';
    else if (numIdade > 18 && numIdade < 65) return 'Adulto';
    // else if (numIdade > 65) return 'Idoso';
    else return 'Idoso';
  };
};



// EXEMPLO DE CONSTRUTOR PARA SALVAR/BUSCAR CONTATOS NO BANCO DE DADOS
// Nosso 'Banco de dados' será um Array no código que irá armazenar novos contatos
const contatoLista = [];

const ContatoDB = function(conexaoBancoDeDados) {
  this.conexaoBancoDeDados = conexaoBancoDeDados;

  this.get = () => {
    // return contatoLista;
    return [...contatoLista];
  };

  this.save = (novoContato) => {
    const contato = new Contato(novoContato);
    const errosDeValidacao = contato.getContatoErros();

    if (errosDeValidacao.length > 0) {
      console.error('Erros de validação do novo contato', errosDeValidacao);
      throw 'Novo contato inválido';
    }

    const contatoFormatado = contato.getContatoFormatado(true);
    contatoLista.push(contatoFormatado);

    return 'Novo contato criado com sucesso';
  };
};

// Usando os exemplos acima

const contatoInput = {
  primeiroNome: 'Murilo',
  sobrenome: 'Portescheller',
  idade: 30,
  telefone: '11 998443255',
};

const db = new ContatoDB(contatoInput);
console.log('LISTA VAZIA', db.get());
db.save(contatoInput);
console.log('LISTA', db.get());
db.save(contatoInput);
console.log('LISTA', db.get());