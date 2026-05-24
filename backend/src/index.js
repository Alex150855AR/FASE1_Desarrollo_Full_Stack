const express = require('express');
const cors = require('cors');

// Inicializar la aplicación Express
const app = express();
const PORT = 3000;

// Middlewares (Para permitir peticiones del frontend y leer formato JSON)
app.use(cors());
app.use(express.json());

// --- BASE DE DATOS SIMULADA (Esquema de información) ---
let projects = [
    { id: 1, name: 'Sistema de Gestión', category: 'Desarrollo Web', status: 'Activo' }
];

let tasks = [
    { id: 1, projectId: 1, title: 'Configurar Backend Node', status: 'En progreso' },
    { id: 2, projectId: 1, title: 'Crear Base de Datos', status: 'Pendiente' }
];

let users = [
    { id: 1, name: 'Alex', role: 'Full Stack Developer' }
];

// --- RUTAS DE LA API (ENDPOINTS CRUD) ---

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡API del Sistema de Gestión de Proyectos en línea!');
});

// 1. CRUD de Proyectos
app.get('/api/projects', (req, res) => res.json(projects)); // Leer
app.post('/api/projects', (req, res) => {                   // Crear
    const newProject = { id: Date.now(), ...req.body };
    projects.push(newProject);
    res.status(201).json(newProject);
});

// 2. CRUD de Tareas
app.get('/api/tasks', (req, res) => res.json(tasks));       // Leer
app.post('/api/tasks', (req, res) => {                      // Crear
    const newTask = { id: Date.now(), ...req.body };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// 3. CRUD de Usuarios
app.get('/api/users', (req, res) => res.json(users));       // Leer
app.post('/api/users', (req, res) => {                      // Crear
    const newUser = { id: Date.now(), ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

// --- INICIAR EL SERVIDOR ---
app.listen(PORT, () => {
    console.log(`\n🚀 Servidor Backend Inicializado correctamente`);
    console.log(`➡️  Servidor escuchando en: http://localhost:${PORT}`);
    console.log(`➡️  Prueba ver los proyectos en: http://localhost:${PORT}/api/projects\n`);
});