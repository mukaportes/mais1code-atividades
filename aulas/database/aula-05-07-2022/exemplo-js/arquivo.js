const scriptListarMinhaTabela = `
SELECT * FROM minhatabela WHERE coluna = 1;
`;

db.execute(scriptListarMinhaTabela);
