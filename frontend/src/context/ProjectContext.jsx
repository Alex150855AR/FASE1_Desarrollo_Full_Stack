import React, { createContext, useState } from 'react';

// Creación del Contexto para el manejo de estados global
export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Rediseño de Plataforma', status: 'En progreso', category: 'Diseño UI/UX' }
  ]);

  const addProject = (project) => {
    // Agrega un nuevo proyecto simulando un ID único
    setProjects([...projects, { ...project, id: Date.now() }]);
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject }}>
      {children}
    </ProjectContext.Provider>
  );
};