'use strict';

const React = require('react');
const ReactRouterDOM = require('react-router-dom');
const Route = ReactRouterDOM.Route;
const BrowserRouter= ReactRouterDOM.BrowserRouter;
const AuthorsIndex = require('./components/authorsIndex');
const JoyceBooks = require('./components/joyceBooks');
const WellsBooks = require('./components/wellsBooks');
const NotFound = require('./components/notFound');

class Routes extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Route path="/" component={AuthorsIndex}/>
        <Route path="/author/joyce" component={JoyceBooks}/>
        <Route path="/author/h-g-wells" component={WellsBooks}/>
        <Route path="*" component={NotFound}/>
      </BrowserRouter>
    )
  }
}

module.exports = Routes;