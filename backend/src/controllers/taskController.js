const db = require('../models/db');

exports.getAll = (req, res) => res.json(db.tasks);

exports.getById = (req, res) => {
  const task = db.tasks.find(t => t.id == req.params.id);
  if(task) res.json(task);
  else res.status(404).json({ message: "Tarea no encontrada" });
};

exports.create = (req, res) => {
  const newTask = { id: Date.now(), ...req.body };
  db.tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.update = (req, res) => {
  const index = db.tasks.findIndex(t => t.id == req.params.id);
  if(index !== -1) {
    db.tasks[index] = { ...db.tasks[index], ...req.body };
    res.json(db.tasks[index]);
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
};

exports.delete = (req, res) => {
  db.tasks = db.tasks.filter(t => t.id != req.params.id);
  res.json({ message: "Tarea eliminada exitosamente" });
};