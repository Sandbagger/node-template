import express from 'express';
import { get, post } from './tasks.controller.js';


const taskRoutes = express.Router();

taskRoutes.get('/tasks', get);
taskRoutes.post('/tasks', post);

export default taskRoutes;