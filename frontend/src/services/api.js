// Servicio para manejar peticiones HTTP con Fetch API
const API_URL = 'http://localhost:3000/api';

export const getProjects = async () => {
    const response = await fetch(`${API_URL}/projects`);
    if (!response.ok) throw new Error('Error al obtener proyectos');
    return response.json();
};

export const createProject = async (project) => {
    const response = await fetch(`${API_URL}/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project)
    });
    if (!response.ok) throw new Error('Error al crear proyecto');
    return response.json();
};
