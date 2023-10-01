import app from '../app.js'
import * as db from '../../db/dbTest.js'
import request from 'supertest'

describe('/', () => {
  beforeAll(async () => {
    await db.connect()
  });
  afterEach(async () => {
    await db.clearDatabase()
  });
  afterAll(async () => {
    await db.closeDatabase()
  });


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

    expect(response.text).toEqual('posted');
  })
});