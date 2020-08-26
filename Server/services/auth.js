const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users');

async function getUser(req, res){
  const user = await User.findOne({ email: req.body.email })
  if(!user) {
    return res.status(400).send('Invalid username or password');
  }
  const password = await bcrypt.compare(req.body.password, user.password);
  if(!password) {
    return res.status(400).send('Invalid username or password');
  }
  let token = jwt.sign({ _id: user._id, name: user.name}, 'secretKey');
  res.status(200).send(token);
}

module.exports.getUser = getUser;