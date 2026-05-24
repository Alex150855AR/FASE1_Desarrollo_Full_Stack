const request = require('supertest');
const API_URL = 'http://localhost:3000/api';

describe('🧪 Pruebas Automatizadas de la API (Backend)', () => {
    it('Debería obtener un status 200 y una lista de proyectos', async () => {
        const response = await request(API_URL).get('/projects');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('Debería poder crear un nuevo proyecto (POST)', async () => {
        const nuevoProyecto = { name: 'Test Automatizado', category: 'QA', status: 'Testing' };
        const response = await request(API_URL).post('/projects').send(nuevoProyecto);
        
        expect(response.statusCode).toBe(201);
        expect(response.body.name).toBe('Test Automatizado');
    });
});
