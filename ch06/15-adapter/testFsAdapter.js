'use strict'

const levelup = require('level');
const fsAdapter = require('./fsAdapter');
const { RSA_NO_PADDING } = require('constants');

const db = levelup('./fsDB', {valueEncoding: 'binary'});
const fs = fsAdapter(db);

fs.writeFile('file.txt', 'Hello!', () => {
  fs.readFile('file.txt', {encoding: 'utf8'}, (err, res) => {
    console.log(res);
  });
});

fs.readFile('missing.txt', {encoding: 'utf8'}, (err, res) => {
  console.log(err);
});