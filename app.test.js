const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return 200 status code', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  it('should return welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Bienvenue sur notre application CI/CD !');
  });
});
