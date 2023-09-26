const express = require('express');
const { get } = require('./index.controller.js');

const indexRoutes = express.Router();

indexRoutes.get('/', get);

module.exports = indexRoutes;