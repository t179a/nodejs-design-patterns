'use strict';

(function(root, factory) {
  if(typeof define === 'function' && define.amd){
    define(['mustache'], factory);
  }else if (typeof module === 'object' &&
  typeof module.exports === 'object'){
    const mustache = require('mustache');
    module.exports = factory(mustache);
  }else{
    root.UmdModule = factory(root.Mustache);
  }
}(this, function(mustache){
  const template = '<h1>Hello <i>{{name}}</i></h1>';
  mustache.parse(template);

  return {
    sayHello: function(toWhom){
      return mustache.render(template, {name: toWhom});
    }
  };
}));