SELECT 
  u.nome,
  u.email,
  l.*
FROM
  usuarios u
LEFT JOIN
  livros l
WHERE
  u.usuario_id = l.usuario_id;