import React, { Component } from "react";
import CardRule from "../../components/CardRule"

class Rules extends Component {
  state = {

  }


  render() {
    return (
      <div >


        <div className="container landing__rules">
          <p className="landing__rules-p">Only the most die-hard NBA fans can try their luck at this game.</p>

          <p className="landing__rules-p">The NBA memory game takes you on a time-traveling journey through NBA history.</p>

          <p className="landing__rules-p">Team by team, you'll see if you have what it takes to remember all the greats who have played this game.</p>

          <p className="landing__rules-p">If you have the chops to beat one team, clicking on each of their 12 best players only once, only then will you be ready to face the next team.</p>
        </div>

        <CardRule/>
      </div>
    )
  }
}

export default Rules;