import express from 'express';
import indexRoutes from './index/index.routes.mjs';


const app = express();

app.use("/", indexRoutes);

app.listen(4000, (): void => {
  console.log('Server is listening on port 4000');
});

