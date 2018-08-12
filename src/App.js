import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Game from "./pages/Game"
import Landing from "./pages/Landing"


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Landing} />
          <Route path="/game" component={Game} />
        </Switch>
      </Router>  
    );
  }
}

export default App;
