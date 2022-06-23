# Introdução a banco de dados

## SQL e noSQL

Temos dois tipos mais comuns de banco de dados: os RELACIONAIS (SQL) e os NÃO RELACIONAIS (noSQL).

Os bancos relacionais possuem relações entre tabelas que armazenam os dados, de diferentes tipos e através de uma ou mais colunas das tabelas. Podemos pensar como várias planilhas de excel (tabelas) que podem ter alguma relação com outras planilhas.

Esse tipo de banco de dados também requer que tenhamos um esquema (estrutura da tabela, suas colunas e tipos delas, etc) pré definidos. Você cria uma tabela com X colunas e, caso futuramente venha a precisar de adicionar uma nova coluna, será necessário atualizar a tabela antes de fazer qualquer operação com a nova coluna.

Já os bancos não relacionais não possuem uma estrutura fixa, mas sim dinâmica. Ou seja, se uma coleção de dados foi criada com X campos send armazenados, ela poderá receber uma adição de novo dado com uma nova coluna Y, tendo assim dados 'antigos' com X campos e os novos tendo também o novo campo Y.

EX: temos essa coleção de usuários sendo armazenada num banco noSQL

[
  {
    nome: "Murilo",
    email: "mport.dev@gmail.com"
  }
]

A partir do momento que adicionamos na API que os usuários tem também um campo de Data de Nascimento, após um novo usuário criado teríamos isso salvo no banco:

[
  {
    nome: "Murilo",
    email: "mport.dev@gmail.com"
  },
  {
    nome: "Novo user",
    email: "user@gmail.com",
    dataNasc: "26/12/1991"
  }
]

Isso não ocorre em um banco não relacional. Ao tentar inserir um usuário com um novo campo, que não existe no SCHEMA da tabela, o banco irá retornar um erro dizendo que essa coluna "dataNasc" não existe. Isso se deve por te ruma estrutura fix e, assim, demandar que primeiro atualize o SCHEMA da tabela, e depois passar a criar os usuários com o novo campo.

## Exemplos - Casos de Uso

1. Plataforma onde os usuários cadastram seus livros favoritos e dão notas para eles

- Armazenar Usuarios e seus respectivos livros
- Um Usuario pode ter vários livros

### NoSQL - MongoDB

- Teríamos uma collection de Usuarios
- Cada usuário teria um array de livros cadastrados por eles

[
  {
    nome: "murilo",
    email: "mport.dev@gmail.com",
    livros: [
      {
        "nome": "Código Limpo",
        "autor": "Robert C. Martin",
        "nota": 10
      }
    ]
  }
]

### SQL - MySQL

- Teríamos as tabelas Usuarios e Livros
- As tabelas Usuarios e Livros teriam um ID unico para cada linha 
- A tabela Usuarios teria uma relação UM-PARA-VARIOS (one-to-many) com a tabela Livros através da coluna usuario_id na tabela Livros

```
CREATE TABLE usuarios (
  usuario_id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  PRIMARY KEY (usuario_id)
) ENGINE=INNODB;

CREATE TABLE livros (
  livro_id INT NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(100) NOT NULL,
  autor VARCHAR(100) NOT NULL,
  nota INT NOT NULL,
  PRIMARY KEY (livro_id)
  usuario_id INT  REFERENCES usuarios(usuario_id) 
) ENGINE=INNODB;
```


## Criando um banco de dados relacional

- Baixar e instalar o mysql em: https://dev.mysql.com/downloads/installer/ (WINDOWS)
- Baixar e instalar o software DBeaver em: https://dbeaver.io/download/
- No DBeaver, clicar na aba Database > New Database Connection
- Selecione MySQL e clique em 'next'
- Digite os seguintes dados:
  - Server Host: localhost
  - Port: 3306
  - Database: deixar em branco
  - Username: root
  - Password: root (ou tentar em branco)
- Clique em 'test connection' para garantir que a conexão irá ser bem sucedida
- Após testar com sucesso, clique em 'Finish' e irá aparecer no topo esquerdo sua nova conexão com localhost:3306
- Clique com o botão direito sobre a conexão, e clique em 'Create new database'
- Dê um nome para seu banco e clique em 'OK'
- Agora temos nosso banco criado e podemos criar nossas primeiras tabelas


