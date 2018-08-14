import React, { Component } from "react";
import CardRule from "../../components/CardRule"

class Rules extends Component {
  state = {

  }


  render() {
    return (
      <div >


        <div className="container landing__rules u-mgn-btm-big ">
          <p className="landing__rules-p">Only the most die-hard NBA fans can try their luck at this game.</p>

          <p className="landing__rules-p">The NBA memory game takes you on a time-traveling journey through NBA history.</p>

          <p className="landing__rules-p">Team by team, you'll see if you have what it takes to remember all the greats who have played this game.</p>

          {/* <p className="landing__rules-p">If you have the chops to beat one team, clicking on each of their 12 best players only once, only then will you be ready to face the next team.</p> */}
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-4">
             <CardRule
              num="1"
              rule="Click on play game and select a team."
              />
            </div>
            <div className="col-4">
             <CardRule 
             num="2"
             rule="Click on a player to increase your score. If you click on the same player twice though, you lose."
             />
            </div>
            <div className="col-4">
             <CardRule
              num="3"
              rule="If you click on every player of a team only once, you can pick a new team. If you make it through all the teams, you win!"
              />
            </div>
          </div>
        </div>

        

    
      </div>
    )
  }
}

export default Rules;