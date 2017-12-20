/*import React, { Component } from 'react';
import GameBoard from './components/GameBoard';

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentValue: 1,
      dimension: 3,
      cards: [
        {value: 1, flipped: false},
        {value: 1, flipped: false},
        {value: 2, flipped: false},
        {value: 2, flipped: false},
        {value: 3, flipped: false},
        {value: 3, flipped: false}
      ]
    };
    this.checkMatch = this.checkMatch.bind(this);
  }

  checkMatch(){

  }

  componentDidMount(){
    this.setState = {
      cards: this.initCards()
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Memory Game</h1>
        <GameBoard
          cards={this.state.cards}
          dim={this.state.dimension}
          currentValue={this.state.currentValue} />
      </div>
    );
  }
}

export default App;*/
