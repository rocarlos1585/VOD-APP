import React, { Component } from 'react';
import {Route, HashRouter, BrowserRouter, Switch,Router} from 'react-router-dom'
import Home from './homePage.js';
import MovieDescription from './movieDescription.js';
import Player from './player.js';
import History from './history.js';




class MainRouter extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/movieDescription/:movieId" component={MovieDescription}/>
          <Route exact path="/player/:movieId" component={Player}/>
          <Route exact path="/History" component={History}/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default MainRouter;
