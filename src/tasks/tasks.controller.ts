import { Request, Response } from 'express';
import Task, { TaskDocument } from './tasks.models.js'

export function get(_: Request, res: Response): void {
  res.send('<h1>Hello World!<h1>');
}

export async function post(req: Request, res: Response): Promise<void> {
  try {
    const newTask = new Task <TaskDocument>({
      title: req.body.title,
      description: req.body.description,
    });

    const savedTask = await newTask.save();

    res.send(savedTask);
  } catch (error) {
    res.status(500).send(error);
  }
}
