import { useState, useEffect } from 'react';
import { getProjects, createProject } from './services/api';
import './App.css'; // Importamos el nuevo diseño

function App() {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error("Error cargando proyectos:", error);
    }
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();
    if (!newProjectName.trim()) return;
    try {
      await createProject({ name: newProjectName, category: 'Desarrollo General', status: 'Pendiente' });
      setNewProjectName('');
      loadProjects();
    } catch (error) {
      console.error("Error al crear:", error);
    }
  };

  // Función para asignar colores al estado
  const getStatusClass = (status) => {
    const s = status.toLowerCase();
    if (s === 'activo') return 'status-badge activo';
    if (s === 'pendiente') return 'status-badge pendiente';
    return 'status-badge default';
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-icon">📊</div>
        <h1>TeamTask</h1>
      </header>
      
      <main>
        <section className="card">
          <h3>Crear Nuevo Proyecto</h3>
          <form onSubmit={handleCreateProject} className="form-group">
            <input 
              type="text" 
              className="input-field"
              value={newProjectName} 
              onChange={(e) => setNewProjectName(e.target.value)} 
              placeholder="Ej. Rediseño de la API..." 
            />
            <button type="submit" className="btn-primary">
              Añadir Proyecto
            </button>
          </form>
        </section>

        <section>
          <h2 className="section-title">Proyectos Recientes</h2>
          <ul className="project-list">
            {projects.map(proj => (
              <li key={proj.id} className="project-item">
                <div className="project-info">
                  <h4>{proj.name}</h4>
                  <p>{proj.category}</p>
                </div>
                <span className={getStatusClass(proj.status)}>
                  {proj.status}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
