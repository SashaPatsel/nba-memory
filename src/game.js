import React, {Component} from "react";

//COMPONENTS
import Card from "./components/Card";
import Nav from "./components/Nav";

//DATA
import warriors from "./data/nba/warriors.json";
import celtics from "./data/nba/celtics.json";

//TEAM COLORS
const colorCeltics = {
  backgroundImage: 'radial-gradient(rgb(255,255,255), rgb(16,130,74))'
}

const colorWarriors = {
  backgroundImage: 'radial-gradient(rgb(248,175,50), rgb(14,74,169))'
}


class Game extends Component {
  state = {
    cards: [...warriors],
    score: 0,
    lossMessage: "",
    arena: {backgroundImage: 'url("/assets/images/nba/arenas/warriors.png")'},
    colors: colorWarriors
  }

componentDidMount() {
  console.log(this.state.cards)
}

clickCard = (id) => {
 
    const chosen = this.state.cards.filter(card => card.id === id)[0]
    
    if (chosen.clicked === false) {

      chosen.clicked = true;

      this.setState({
        score: this.state.score + 1
      })

       this.shuffle(this.state.cards) 
    } else {

        this.setState({
          score: 0,
          lossMessage: "Getcho trash ass outta hurr",
          cards: [...celtics],
          arena: {backgroundImage: 'url("/assets/images/nba/arenas/celtics.png")'},
          colors: colorCeltics
        })
    }
}

//Knuth Shuffle
shuffle = (arr) => {
    let currentIndex = arr.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
  
    this.setState({
      cards: arr
    });
}

  render () {
    return (
      <div className="game" style={this.state.arena}>
      <Nav>
        <p>Current Score: {this.state.score}</p>
        <p>{this.state.lossMessage}</p>
      </Nav>

        <div className="game__container">
          {this.state.cards.map(x => (
            <Card img={x.img} alt={x.name} key={x.id}
          id={x.id}  memory={this.clickCard} team={this.state.colors}/>
          ))}

        </div>

      </div>
    )
  }
}

export default Game;