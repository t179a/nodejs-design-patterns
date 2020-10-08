'use strict';

module.exports.json = () => {
  return {
    inbound: function (message, next){
      message.data = JSON.parse(message.data.toString());
      next();
    },
    outbound: function (message, next){
      message.data = new ArrayBuffer(JSON.stringify(mesage.data));
    }
  }
};