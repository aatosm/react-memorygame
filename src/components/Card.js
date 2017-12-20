import React, { Component } from 'react';

class Card extends Component {

  constructor(props){
    super(props);
    this.test = this.test.bind(this)
  }

  test(e){
    this.props.change(this.props.card.id);
  }

  render() {

    let cardStyleA = {
      width: 80,
      height: 80,
      border: '2px solid black',
      background: 'yellow',
      margin: '10px',
      float: 'left'
    }

    let cardStyleB = {
      width: 80,
      height: 80,
      border: '2px solid black',
      background: 'red',
      margin: '10px',
      float: 'left'
    }

    if(this.props.card.flipped){
      return(
      <div style={cardStyleA} onClick={this.test}>
        {this.props.card.value}
      </div>);
    } else {
      return(
      <div style={cardStyleB} onClick={this.test.bind(this)}>
        {this.props.card.value}
      </div>);
    }

  }
}

export default Card;
