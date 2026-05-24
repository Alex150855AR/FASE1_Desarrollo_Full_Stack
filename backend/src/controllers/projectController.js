const db = require('../models/db');

exports.getAll = (req, res) => res.json(db.projects);

exports.getById = (req, res) => {
  const project = db.projects.find(p => p.id == req.params.id);
  if(project) res.json(project);
  else res.status(404).json({ message: "Proyecto no encontrado" });
};

exports.create = (req, res) => {
  const newProject = { id: Date.now(), ...req.body };
  db.projects.push(newProject);
  res.status(201).json(newProject);
};

exports.update = (req, res) => {
  const index = db.projects.findIndex(p => p.id == req.params.id);
  if(index !== -1) {
    db.projects[index] = { ...db.projects[index], ...req.body };
    res.json(db.projects[index]);
  } else {
    res.status(404).json({ message: "Proyecto no encontrado" });
  }
};

exports.delete = (req, res) => {
  db.projects = db.projects.filter(p => p.id != req.params.id);
  res.json({ message: "Proyecto eliminado exitosamente" });
};