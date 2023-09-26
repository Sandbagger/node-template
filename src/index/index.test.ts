const indexRoutes = require('./index.routes.ts');
const request = require('supertest');
const express = require('express');
const app = express();
app.use("/", indexRoutes);

describe('Index Route', () => {
  it('should return status 200 and the expected response', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toEqual("<h1>Hello World!<h1>");
  });
});