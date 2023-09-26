import express from 'express';
import { get } from './index.controller.js';


const indexRoutes = express.Router();

indexRoutes.get('/', get);

export default indexRoutes;