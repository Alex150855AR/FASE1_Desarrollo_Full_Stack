const db = {
  users: [
    { id: 1, name: "Admin", email: "admin@test.com", role: "admin" }
  ],
  projects: [
    { id: 1, name: "Rediseño de Plataforma", status: "En progreso", category: "Diseño UI/UX" }
  ],
  tasks: [
    { id: 1, projectId: 1, title: "Crear Mockups", status: "Pendiente", assignedTo: 1 }
  ]
};

module.exports = db;