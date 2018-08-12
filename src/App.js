import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Game from "./pages/Game"


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Game/>
        </Switch>
      </Router>  
    );
  }
}

export default App;
