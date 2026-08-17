const { users, generateId } = require('../data/connectDatabase');

const listarUsuarios = (req, res) => {
  res.status(200).json(users);
};

const cadastrarUsuario = (req, res) => {
  const { nome, email } = req.body;

  if (!nome || typeof nome !== 'string' || nome.trim() === '') {
    return res.status(400).json({ error: "O campo 'nome' é obrigatório." });
  }

  if (!email || typeof email !== 'string' || email.trim() === '') {
    return res.status(400).json({ error: "O campo 'email' é obrigatório." });
  }

  const novoUsuario = {
    id: generateId(),
    nome: nome.trim(),
    email: email.trim()
  };

  users.push(novoUsuario);

  res.status(201).json({ data: novoUsuario });
};

const buscarUsuarioPorId = (req, res) => {
  const idBuscado = parseInt(req.params.id, 10);
  const usuarioEncontrado = users.find(usuario => usuario.id === idBuscado);

  if (!usuarioEncontrado) {
    return res.status(404).json({ 
      erro: "Not Found",
      mensagem: `Usuário com ID ${idBuscado} não foi encontrado.` 
    });
  }

  res.status(200).json(usuarioEncontrado);
};

module.exports = {
  listarUsuarios,
  cadastrarUsuario,
  buscarUsuarioPorId
};