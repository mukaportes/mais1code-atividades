-- consultando usuarios e seus livrosem uma unica query
SELECT 
  u.nome,
  u.email,
  l.*
FROM
  usuarios u,
  livros l
WHERE
  u.usuario_id = l.usuario_id;
