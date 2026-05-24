const db = require('../models/db');

exports.getAll = (req, res) => res.json(db.users);

exports.getById = (req, res) => {
  const user = db.users.find(u => u.id == req.params.id);
  if(user) res.json(user);
  else res.status(404).json({ message: "Usuario no encontrado" });
};

exports.create = (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  db.users.push(newUser);
  res.status(201).json(newUser);
};

exports.update = (req, res) => {
  const index = db.users.findIndex(u => u.id == req.params.id);
  if(index !== -1) {
    db.users[index] = { ...db.users[index], ...req.body };
    res.json(db.users[index]);
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
};

exports.delete = (req, res) => {
  db.users = db.users.filter(u => u.id != req.params.id);
  res.json({ message: "Usuario eliminado exitosamente" });
};