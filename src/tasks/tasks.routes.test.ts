import app from '../app.js'
import * as db from '../../db/dbTest.js'
import request from 'supertest'

describe('Tasks', () => {
  beforeAll(async () => {
     await db.connect()
  });
  afterEach(async () => {
    await db.clearDatabase()
  });
  afterAll(async () => {
    await db.closeDatabase()
  });

  describe('POST', () => {
    test('returns error when task is not created', async () => {
      const response = await request(app).post('/tasks').send({description: 'some description'});
      const error = JSON.parse(response.text)
      expect(response.status).toEqual(500);
      expect(error.message).toEqual("Task validation failed: title: Path `title` is required.");
    })
    
    test('Task successfully created', async () => {
        const response = await request(app).post('/tasks').send({title: 'some title', description: 'some description'});
        expect(response.status).toEqual(200);
        expect(response.body.title).toEqual('some title');
        expect(response.body.description).toEqual('some description');
    })
  });
});
