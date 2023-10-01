import express from 'express';
import { get, post } from './root.controller.js';


const indexRoutes = express.Router();

indexRoutes.get('/', get);
indexRoutes.post('/', post);

export default indexRoutes;