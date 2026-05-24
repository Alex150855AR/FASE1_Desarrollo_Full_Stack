import { useState, useEffect } from 'react';
import { getProjects, createProject } from './services/api';

function App() {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');

  // Efecto para cargar los proyectos al iniciar
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
    if (!newProjectName) return;
    try {
      await createProject({ name: newProjectName, category: 'Nueva Categoría', status: 'Pendiente' });
      setNewProjectName(''); // Limpiar input
      loadProjects(); // Recargar lista desde el backend
    } catch (error) {
      console.error("Error al crear:", error);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#0056b3' }}>🚀 TeamTask - Conectado al Backend</h1>
      
      <form onSubmit={handleCreateProject} style={{ marginBottom: '20px', padding: '15px', background: '#f4f4f4', borderRadius: '8px' }}>
        <h3>Crear Nuevo Proyecto</h3>
        <input 
          type="text" 
          value={newProjectName} 
          onChange={(e) => setNewProjectName(e.target.value)} 
          placeholder="Nombre del proyecto..." 
          style={{ padding: '10px', marginRight: '10px', width: '250px' }}
        />
        <button type="submit" style={{ padding: '10px 15px', background: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}>
          Guardar Proyecto
        </button>
      </form>

      <h3>Lista de Proyectos (Desde Express.js)</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {projects.map(proj => (
          <li key={proj.id} style={{ background: '#fff', border: '1px solid #ddd', margin: '5px 0', padding: '10px', borderRadius: '5px' }}>
            <strong>{proj.name}</strong> - <em>{proj.category}</em> <span style={{ color: '#888', fontSize: '12px' }}>({proj.status})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
