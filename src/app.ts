import 'dotenv/config'
import express, { Express } from 'express';
import Database from '../db/db.js';
import rootRoutes from './root/root.routes.js';
import tasksRoutes from './tasks/tasks.routes.js';

['DEV', 'PRODUCTION'].some(env => process.env.NODE_ENV === env) && Database.getInstance()

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", tasksRoutes);
app.use("/", rootRoutes);

export default app;


