const express = require('express');
const authService = require('../services/auth');
const route = express.Router();

route.post('/', (req, res) => {
  authService.getUser(req, res);
})

module.exports = route;