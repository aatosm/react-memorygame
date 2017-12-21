import React, { Component } from 'react';

class Card extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    this.props.change(this.props.card.id);
  }

  render() {

    let cardStyleA = {
      width: 100,
      height: 100,
      border: '2px solid black',
      borderRadius: '10px',
      background: 'yellow',
      margin: '10px'
    }

    let cardStyleB = {
      width: 100,
      height: 100,
      border: '2px solid black',
      borderRadius: '10px',
      background: 'red',
      margin: '10px'
    }

    if(this.props.card.flipped){
      return(
      <div style={cardStyleA} onClick={this.handleClick}>
        {this.props.card.value}
      </div>);
    } else {
      return(
      <div style={cardStyleB} onClick={this.handleClick}>
        {this.props.card.value}
      </div>);
    }

  }
}

export default Card;
