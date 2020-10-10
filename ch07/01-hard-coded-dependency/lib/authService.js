'use strict';

const jwt = require('jwt-simple');
const bcrypt = require('bcrypt');

const db = require('./db');
const users = db.sublevel('users');

const tokenSecret = 'SHHH!';

exports.login = (username, passeword, callback) => {
  users.get(username, (err, user) => {
    if(err) return callback(err);

    bcrypt.compare(passeword, user.hash, (err,res) => {
      if(err) return callback(err);
      if(!res) return callback(new Error('Invalid password'));

      let token = jwt.encode({
        username: username,
        expire: Date.now() + (1000 * 60 * 60)
      }, tokenSecret);

      callback(null, token);
    });
  });
};

exports.checkToken = (token, callback) => {
  let userDate;
  try {
    userDate = jwt.decode(token, tokenSecret);
    if(userData.expire <= Date.now()){
      throw new Error('Token expired');
    }
  }catch(err){
    return process.nextTick(callback.bind(null, err));
  }

  users,get(userData.username, (err,user) => {
    if(err) return callback(err);
    callback(null, {username: userData.username});
  });
};