import React, { useState, useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext.jsx';

const ProjectForm = () => {
  const { addProject } = useContext(ProjectContext);
  const [formData, setFormData] = useState({ name: '', status: 'Pendiente', category: '' });
  const [error, setError] = useState('');

  // Manipulación del DOM y Eventos
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if(error) setError(''); // Limpia el error al escribir
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página
    
    // Validación de formulario
    if (!formData.name.trim() || !formData.category.trim()) {
      setError('⚠️ El nombre y la categoría son obligatorios.');
      return;
    }

    addProject(formData);
    setFormData({ name: '', status: 'Pendiente', category: '' }); // Resetea el formulario
  };

  return (
    <div className="card">
      <h2>Nuevo Proyecto</h2>
      <form onSubmit={handleSubmit} style={{marginTop: '1rem'}}>
        <div className="form-group">
          <label>Nombre de la Tarea/Proyecto</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ej. Crear API Rest" />
        </div>
        
        <div className="form-group">
          <label>Categoría (Sugerencias dinámicas)</label>
          {/* Implementación de Autocompletado nativo */}
          <input type="text" name="category" list="categories" value={formData.category} onChange={handleChange} placeholder="Doble clic para sugerencias..." />
          <datalist id="categories">
            <option value="Desarrollo Frontend" />
            <option value="Desarrollo Backend" />
            <option value="Diseño UI/UX" />
            <option value="DevOps & Infraestructura" />
          </datalist>
        </div>

        <div className="form-group">
          <label>Estado Inicial</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Pendiente">Pendiente</option>
            <option value="En progreso">En progreso</option>
            <option value="Completado">Completado</option>
          </select>
        </div>

        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn">Crear Tarea</button>
      </form>
    </div>
  );
};

export default ProjectForm;