import React, { Component } from 'react';
import Card from './Card.js';

class GameBoard extends Component {

  constructor(){
    super();
    this.state = {
      currentValue: null,
      currentId: null,
      disabled: false,
      matches: 0,
      cards: this.initCards()
    };
    this.change = this.change.bind(this);
    this.changeCurrentValue = this.changeCurrentValue.bind(this);
    this.showCard = this.showCard.bind(this);
    this.addMatch = this.addMatch.bind(this);
    this.hideCard = this.hideCard.bind(this);
    this.getIndex = this.getIndex.bind(this);
    this.changeId = this.changeId.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.initCards = this.initCards.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  addMatch(){
    let matchCount = this.state.matches+1;
    this.setState({
      matches: matchCount
    }, () => {
      if(this.state.matches === this.state.cards.length/2){
        console.log("win");
      }
    });
  }


  // Fisher-Yates (Knuth) Shuffle algorithm
  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }


  // Hard coded, will fix later
  initCards(){
    let def = [
      {id: 0, value: 1, image: 'red', flipped: false},
      {id: 1, value: 1, image: 'red', flipped: false},
      {id: 2, value: 2, image: 'red', flipped: false},
      {id: 3, value: 2, image: 'red', flipped: false},
      {id: 4, value: 3, image: 'red', flipped: false},
      {id: 5, value: 3, image: 'red', flipped: false},
      {id: 6, value: 4, image: 'red', flipped: false},
      {id: 7, value: 4, image: 'red', flipped: false},
      {id: 8, value: 5, image: 'red', flipped: false},
      {id: 9, value: 5, image: 'red', flipped: false},
      {id: 10, value: 6, image: 'red', flipped: false},
      {id: 11, value: 6, image: 'red', flipped: false},
      {id: 12, value: 7, image: 'red', flipped: false},
      {id: 13, value: 7, image: 'red', flipped: false},
      {id: 14, value: 8, image: 'red', flipped: false},
      {id: 15, value: 8, image: 'red', flipped: false}
    ];
    return this.shuffle(def);
  }

  resetGame(){
    this.setState({
      currentValue: null,
      currentId: null,
      disabled: false,
      matches: 0,
      cards: this.initCards()
    });
  }

  changeId(id){
    this.setState({
      currentId: id
    });
  }

  changeCurrentValue(value){
    this.setState({
      currentValue: value
    });
  }

  showCard(i){
    let cardsList = this.state.cards;
    cardsList[i].flipped = true;
    this.setState({
      cards: cardsList
    });
  }

  hideCard(i){
    let cardsList = this.state.cards;
    cardsList[i].flipped = false;
    this.setState({
      cards: cardsList
    });
  }

  getIndex(id){
    let cards = this.state.cards;
    for(let i = 0; i < cards.length; i++){
      if(cards[i].id === id){
        return i;
      }
    }
  }

  change(id){
    let cards = this.state.cards;
    let index = this.getIndex(id);

    if(!this.state.disabled){

    // Only accect click if card is not flipped
      if(cards[index].flipped === false){
        // If first click of current "turn"
        if(this.state.currentValue === null){
          this.changeCurrentValue(cards[index].value);
          this.changeId(id);
          this.showCard(index);
        }
        // Second click of current "turn"
        else {

          // Got right
          if(this.state.currentValue === cards[index].value){
            this.changeCurrentValue(null);
            this.showCard(index);
            this.addMatch();
          }

          // Got wrong
          else {
            this.showCard(index);
            this.setState({disabled: true});
            setTimeout(() => {
              this.setState({disabled: false});
              this.hideCard(index);
              this.hideCard(this.getIndex(this.state.currentId));
              this.changeCurrentValue(null);
            }, 1000);

          }
        }
      }
    }
  }

  render() {

    let gridStyle = {display: 'grid', gridTemplateColumns: 'repeat(4, 125px)',
                    gridGap: '10px'}

    let cards = this.state.cards.map(c => {
      return <Card card={c}
                   key={c.id}
                   currentValue={this.state.currentValue}
                   change={this.change}  />
    });

    return (
      <div>
        <h1>Memory Game</h1>
        <div style={gridStyle}>
          {cards}
        </div>
        <button onClick={this.resetGame}>New Game</button>
      </div>
    );
  }
}

export default GameBoard;
