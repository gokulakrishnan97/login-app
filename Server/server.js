const express = require('express');
const mongoose = require('mongoose');
const userService = require('./models/users');
const users = require('./routes/users');
const auth = require('./routes/auth');
const app = express();

app.use(express.json())
app.use('/users', users);
app.use('/auth', auth);

app.listen('3000', () =>{
  console.log("Server started at 3000");
})

mongoose.connect('mongodb://localhost/login')
  .then(() => console.log('mongodb connected...'))
  .catch( err => console.log('Mongodb not connected'));

