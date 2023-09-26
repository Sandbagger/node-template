import request from 'supertest';
import express from 'express';
import indexRoutes from './index.routes.js';

const app = express();
app.use("/", indexRoutes);

describe('Index Route', () => {
  it('GET should return status 200 and the expected response', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toEqual("<h1>Hello World!<h1>");
  });

  it('POST should return status 200 and the expected response', async () => {
    const payload = {
      title: "Test Title",
      message: "Test Message"
    };

    const response = await request(app)
      .post('/')
      .send(payload)
      .set('Content-Type', 'application/json');

    expect(response.request.body).toEqual("<h1>Hello World!<h1>");
  })
});