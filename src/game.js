import React, {Component} from "react";
import warriors from "./data/nba/warriors.json";
import Card from "./components/Card";

class Game extends Component {
  state = {
    cards: [...warriors]
  }

componentDidMount() {
  console.log(this.state.cards)
}

  render () {
    return (
      <div>
        <div className="row game__container">
          <div className="card__container">
        {this.state.cards.map(x => (
          <Card img={x.img} alt={x.name}/>
        ))}
        {/* <Card img={this.state.cards[0].img} alt={this.state.cards[0].name}/>  */}
        </div>
        </div>
      </div>
    )
  }
}

export default Game;