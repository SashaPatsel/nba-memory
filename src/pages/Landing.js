import React, { Component } from "react";
import Rules from "./sub-pages/Rules"
import Nav from "./sub-pages/Nav"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
class Landing extends Component {
  state = {

  }


  render() {
    return (
      <section className="landing" >
        <h1 className="landing__heading-primary">The NBA memory game</h1>

        <Router>
          <Switch>
            <Route exact path="/" component={Nav}/>
            <Route exact path="/rules" component={Rules}/>
            {/* <Route path="choices" component={Game}/> */}
          </Switch>  
        </Router>  

         {/* <div className="landing__nav container">
          <div className="row">

            <div className="col-6">

              <a href="/">  
              <figcaption className="landing__img-caption">
                Rules</figcaption>
              <img className="landing__img" src="https://toppng.com/public/uploads/preview/whistle-11530975730zyj5qkg7xt.png" />
            </a>
            </div>

            <div className="col-6">

              <figcaption className="landing__img-caption">
                Play</figcaption>
              <img className="landing__img" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png" />

            </div> 



          </div>
        </div> */}
      </section>
    )
  }
}

export default Landing;