const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const User = require('../models/users');

async function createUser(req, res){
  const {name, email, password} = req.body;
  let existingUser = await User.findOne({ email: email });
  if(existingUser){
    return res.status(400).send('User already exists');
  }
  const user = new User({
    name: name,
    email: email,
    password: password
  })
  let salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  const savedData = await user.save();
  let token = jwt.sign({_id: savedData._id, name: savedData.name}, 'privateKey');

  res.header({'x-auth-token': token}).status(200).send(_.pick(savedData, ['name', 'email']));
}

module.exports.createUser = createUser;