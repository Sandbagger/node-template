import express from 'express';
import { get, post, patch } from './tasks.controller.js';


const taskRoutes = express.Router();

taskRoutes.get('/tasks/:id', get);
taskRoutes.post('/tasks', post);
taskRoutes.patch('/tasks/:id', patch);

export default taskRoutes;