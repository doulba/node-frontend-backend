const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const config = require('../config.json')
const User = require('../models/user');
const user = require("../models/user");
const tokenList = {}

exports.apiCheckuser = (req, res, next) => { 
  User.findOne({ email: req.body.email })
  .then(user => {
    console.log(user);
      if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
          .then(valid => {
              if (!valid) {
                  return res.status(401).json({ error: 'Mot de passe incorrect !' });
              }
              const token= jwt.sign({ email: user.email }, config.secret, { expiresIn: config.tokenLife})
              const refreshToken = jwt.sign({ email: user.email }, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife})
              const response = {
                  fullname: user.fullname,
                  email: user.email,
                  role: user.role,
                  message: "success",
                  token,
                  refreshToken,
                  expiration: '1m'
              }
              tokenList[refreshToken] = response
              console.log(tokenList);
              res.status(200).json(response);
          })
          .catch(error => res.status(500).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
}

exports.refreshToken = (req, res, next) => {
  // refresh the damn token
  const postData = req.body
  // if refresh token exists
  if((postData.refreshToken) && (postData.refreshToken in tokenList)) {
      const user = {
          "fullname": postData.fullname
      }
      const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife})
      const response = {
          "token": token,
      }
      // update the token in the list
      tokenList[postData.refreshToken].token = token
      res.status(200).json(response);        
  } else {
      res.status(404).send('Invalid request')
  }
}

exports.apiGetAllusers = (req, res, next) => {
  User.find()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(400).json({ error }));
}

exports.apiCreateuser = (req, res, next) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = new User({
      fullname: req.body.fullname,
      role: req.body.role,
      email: req.body.email,
      password: hash,
      termAgree: req.body.termAgree
    });
    user.save()
      .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
      .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
}

exports.apiDeleteuser = (req, res, next) => {
  user.deleteOne({ _id: req.params.id })
  .then(() => res.status(200).json({ message: 'Utilisateur supprimé !'}))
  .catch(error => res.status(400).json({ error }));
}

exports.apiUpdateuser = (req, res, next) => {
  User.updateOne({_id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'user modifié !'}))
      .catch(error => res.status(400).json({ error }));
}