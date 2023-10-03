import { Request, Response } from 'express';
import Task, { TaskDocument } from './tasks.models.js'

interface TaskRequest extends Request{
  title: string;
  description?: string;
}

export async function get(req: Request, res: Response): Promise<void> {
try {
    const task = await Task.findById({_id: req.params.id});

    if (!task) {
      res.status(400).send({message: 'Task not found'});
    
    } else {
      res.send(task);
    }
  
  } catch (error) {
    res.status(400).send(error);
  }

}

export async function post(req: Request, res: Response): Promise<void> {
  try {
    const savedTask = await Task.create<TaskDocument>({
      title: (req.body as TaskRequest).title,
      description: (req.body as TaskRequest).description,
    });

    res.send(savedTask);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function patch(req: Request, res: Response): Promise<void> {

  try {
    const {id} = req.params;
    const { title, description, ...rest } = req.body as TaskRequest;
    const invalid = Object.keys(rest).length;
    const task = await Task.findById({_id: req.params.id});

    if (invalid){
      res.status(400).send({message: 'Invalid request body'});
    } else if (!task) {
      res.status(400).send({message: 'Task not found'});
    } else {
      const update = await Task.findByIdAndUpdate(id, {title, description}, {new: true});
      res.send(update);
    }
  
  } catch (error) {
    res.status(400).send(error);
  }

}