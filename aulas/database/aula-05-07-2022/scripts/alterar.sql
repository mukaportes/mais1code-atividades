-- alterar somente linha com coluna usuario_id = 1
UPDATE usuarios
SET nome='Outro nome', email='outro@email.com'
WHERE usuario_id=1;

-- alterar somente LINHAS com coluna nome=Nome do usuario
UPDATE usuarios
SET nome='Outro nome'
WHERE nome='Nome do usuario';