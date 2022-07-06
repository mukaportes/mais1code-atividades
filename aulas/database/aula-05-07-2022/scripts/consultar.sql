-- SELECT nomecolunas FROM nomebanco.nometabela;

SELECT * FROM usuarios;
SELECT usuario_id, nome, email FROM usuarios;

-- aplicando filtros
SELECT * FROM usuarios
WHERE nome='Outro nome' OR email='email@usuario2.com';