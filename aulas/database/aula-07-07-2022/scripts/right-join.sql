SELECT
  u.nome,
  u.email,
  l.*
FROM
  usuarios u
RIGHT JOIN
  livros l
ON
  u.usuario_id = l.usuario_id;