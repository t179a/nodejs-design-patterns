'use strict'

  function decorate(component){
    component.greetings = function(){
      return 'Hi!';
    };

    return component;
  }

  class Greeter {
    hello(subject){
      return `Hello ${subject}`;
    }
  }

  const decoratedGreeter = decorate(new Greeter());
  console.log(decoratedGreeter.hello('world'));
  console.log(decoratedGreeter.greetings());