'use strict';

const level = require('level');
const sublevel = require('level-sublevel');

module.exports = sublevel(
  level('exapmle-db', {valueEncoding: 'json'})
);