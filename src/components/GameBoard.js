import React, { Component } from 'react';
import Card from './Card.js';

class GameBoard extends Component {

  constructor(){
    super();
    this.state = {
      currentValue: null,
      currentId: null,
      dimension: 3,
      matches: 0,
      cards: [
        {id: 0, value: 1, flipped: false},
        {id: 1, value: 1, flipped: false},
        {id: 2, value: 2, flipped: false},
        {id: 3, value: 2, flipped: false},
        {id: 4, value: 3, flipped: false},
        {id: 5, value: 3, flipped: false}
      ]
    };
    this.change = this.change.bind(this);
    this.changeCurrentValue = this.changeCurrentValue.bind(this);
    this.showCard = this.showCard.bind(this);
    this.addMatch = this.addMatch.bind(this);
    this.hideCard = this.hideCard.bind(this);
    this.getIndex = this.getIndex.bind(this);
    this.changeId = this.changeId.bind(this);
  }

  addMatch(){
    let matchCount = this.state.matches+1;
    this.setState({
      matches: matchCount
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
          setTimeout(() => {
            this.hideCard(index);
            this.hideCard(this.getIndex(this.state.currentId));
            this.changeCurrentValue(null);
          }, 1000);
        }
      }
    }
  }

  render() {

    let cards = this.state.cards.map(c => {
      return <Card card={c}
                   key={c.id}
                   currentValue={this.state.currentValue}
                   change={this.change}  />
    });


    return (
      <div>
        <h1>Memory Game</h1>
        {cards}
      </div>
    );
  }
}

export default GameBoard;
