import express from 'express';
import { get, post } from './tasks.controller.js';


const indexRoutes = express.Router();

indexRoutes.get('/tasks', get);
indexRoutes.post('/tasks', post);

export default indexRoutes;