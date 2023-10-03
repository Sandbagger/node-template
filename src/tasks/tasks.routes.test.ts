import app from '../app.js'
import * as db from '../../db/dbTest.js'
import request from 'supertest'
import Task from './tasks.models.js'
import mongoose from 'mongoose'

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

  describe('GET', () => {
    test('returns task', async () => {
      const task = await Task.create({title: 'existing title', description: 'existing description'})
      const response = await request(app).get(`/tasks/${task._id}`);

      expect(response.status).toEqual(200);
      expect(response.body.title).toEqual('existing title');
      expect(response.body.description).toEqual('existing description');
    });

    test('returns error when task is not found', async () => {
      const objectId = new mongoose.Types.ObjectId();
      const response = await request(app).get(`/tasks/${objectId}`);
      const error = JSON.parse(response.text)
      expect(response.status).toEqual(400);
      expect(error.message).toEqual('Task not found');
    });

    test('returns error when task id is not valid', async () => {
      const response = await request(app).get(`/tasks/123`);
      const error = JSON.parse(response.text)
      expect(response.status).toEqual(400);
      expect(error.message).toEqual("Cast to ObjectId failed for value \"{ _id: '123' }\" (type Object) at path \"_id\" for model \"Task\"");
    })
  })

  describe('POST', () => {
    test('returns error when task is not created', async () => {
      const response = await request(app).post('/tasks').send({description: 'some description'});
      const error = JSON.parse(response.text)
      expect(response.status).toEqual(400);
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
