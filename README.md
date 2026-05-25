# 🚀 TeamTask - Sistema de Gestión de Proyectos (Fase 1)

Una aplicación web Full Stack diseñada para facilitar la planificación, asignación y seguimiento de proyectos para equipos de desarrollo de software. Esta primera fase implementa la arquitectura base, la interfaz de usuario responsiva y una API RESTful funcional.

## 🏗️ Arquitectura del Proyecto

El sistema utiliza una arquitectura **Cliente-Servidor** comunicada a través de una API REST.

* **Frontend (Cliente):** Construido con React. Gestiona el estado de la UI y consume los servicios del servidor mediante la *Fetch API*.
* **Backend (Servidor):** Construido con Node.js y Express. Expone los endpoints CRUD y maneja la lógica de negocio. Actúa como controlador de tráfico hacia la base de datos.
* **Base de Datos (Simulada):** Estructuras de datos en memoria para la gestión de Proyectos, Tareas y Usuarios durante esta fase de desarrollo.

## 🛠️ Stack Tecnológico

**Frontend:**
* React (Vite)
* HTML5 & CSS3 puro (Diseño minimalista y responsivo)
* JavaScript (ES6+)

**Backend:**
* Node.js
* Express.js
* CORS

**Testing & Herramientas:**
* Jest & Supertest (Pruebas automatizadas)
* Git & GitHub (Control de versiones con *Feature Branching*)

## 📂 Estructura de Directorios

\`\`\`text
FASE1_Desarrollo_Full_Stack/
├── frontend/                 # Aplicación Cliente (React)
│   ├── public/
│   └── src/
│       ├── services/         # Peticiones HTTP (api.js)
│       ├── App.jsx           # Componente Principal UI
│       └── App.css           # Estilos Globales
├── backend/                  # Servidor API (Node.js)
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/      # Lógica de negocio
│   │   ├── middlewares/
│   │   ├── models/           # Simulación de DB
│   │   ├── routes/           # Definición de Endpoints
│   │   └── index.js          # Punto de entrada del servidor
│   └── tests/                # Pruebas automatizadas (api.test.js)
\`\`\`

## 🚀 Instalación y Uso Local

Para ejecutar este proyecto en tu entorno local, necesitas tener [Node.js](https://nodejs.org/) instalado.

**1. Clonar el repositorio:**
\`\`\`bash
git clone https://github.com/Alex150855AR/FASE1_Desarrollo_Full_Stack.git
cd FASE1_Desarrollo_Full_Stack
\`\`\`

**2. Iniciar el Backend:**
\`\`\`bash
cd backend
npm install
npm run dev
# El servidor correrá en http://localhost:3000
\`\`\`

**3. Iniciar el Frontend (En una nueva terminal):**
\`\`\`bash
cd frontend
npm install
npm run dev
# La aplicación web correrá en http://localhost:5173
\`\`\`

## 🧪 Pruebas Automatizadas

Para correr las pruebas de la API en el backend, navega a la carpeta `backend` y ejecuta:
\`\`\`bash
npm run test
\`\`\`

---
*Desarrollado y mantenido por Alex.*