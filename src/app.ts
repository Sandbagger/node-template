const express = require('express');
const indexRoutes = require('./index/index.routes.js')

const app = express();

app.use("/", indexRoutes);

app.listen(4000, (): void => {
  console.log('Server is listening on port 4000');
});

