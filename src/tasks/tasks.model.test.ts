import * as db from '../../db/dbTest.js'
import Task from './tasks.models.js'

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


  describe('Insert task with title and description', () => {
    test('Task successfully created', async () => {
    
        const task = await new Task({title: 'some title', description: 'some description'}).save();
    
        expect(task.title).toEqual('some title');
        expect(task.description).toEqual('some description');
    });
  });

  describe('Insert task without a required title', () => {
    test('throws a validation error', async () => {
      const task = new Task({description: 'some description'}).validate();
      await expect(task).rejects.toThrow("Task validation failed: title: Path `title` is required.");
    })
  })
});
