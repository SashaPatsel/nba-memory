import React, {Component} from "react";
import warriors from "./data/nba/warriors.json";
import Card from "./components/Card";
import Nav from "./components/Nav";

class Game extends Component {
  state = {
    cards: [...warriors],
    score: 0,
    lossMessage: ""
  }

componentDidMount() {
  console.log(this.state.cards)
}

clickCard = (id) => {
  // this.state.cards.map(card => {
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
          cards: [...warriors]
        })
    }

    // if(id === card.id && card.clicked === true) {
    //   console.log(id)
    //   console.log(card.id)
    //   this.setState({
    //     score: 0,
    //     lossMessage: "Getcho trash ass outta hurr",
    //     cards: [...warriors]
    //   })

    // } else {

    //   card.clicked = true;

    //   this.setState({
    //     score: this.state.score + 1
    //   })

    //    this.shuffle(this.state.cards) 
    // }

  // })
  // console.log(this.state.cards)
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
      <div className="game">
      <Nav>
        <p>Current Score: {this.state.score}</p>
        <p>{this.state.lossMessage}</p>
      </Nav>

        <div className="game__container">
          {this.state.cards.map(x => (
            <Card img={x.img} alt={x.name} key={x.id}
          id={x.id}  memory={this.clickCard}/>
          ))}

        </div>

      </div>
    )
  }
}

export default Game;