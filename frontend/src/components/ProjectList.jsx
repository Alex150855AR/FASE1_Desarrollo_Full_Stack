import React, { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext.jsx';

const ProjectList = () => {
  const { projects } = useContext(ProjectContext);

  const getStatusColor = (status) => {
    if (status === 'Completado') return { bg: '#dcfce7', color: '#166534' };
    if (status === 'En progreso') return { bg: '#dbeafe', color: '#1e40af' };
    return { bg: '#f1f5f9', color: '#475569' };
  };

  return (
    <div>
      <h2>Tablero de Tareas ({projects.length})</h2>
      <div style={{marginTop: '1rem'}}>
        {projects.length === 0 ? (
          <div className="card" style={{textAlign: 'center', color: '#64748b'}}>
            No hay proyectos registrados aún. Comienza creando uno.
          </div>
        ) : (
          projects.map(project => {
            const statusStyle = getStatusColor(project.status);
            return (
              <div key={project.id} className="card">
                <h3>{project.name}</h3>
                <p style={{marginTop: '0.5rem', color: '#64748b'}}>Categoría: {project.category}</p>
                <div style={{marginTop: '1rem'}}>
                  <span className="badge" style={{ backgroundColor: statusStyle.bg, color: statusStyle.color }}>
                    {project.status}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProjectList;