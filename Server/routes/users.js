const express = require('express');
const userService = require('../services/users');
const route = express.Router();

route.post('/', async(req, res) => {
  userService.createUser(req, res);
})

module.exports = route;
