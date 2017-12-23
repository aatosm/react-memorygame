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
      width: 105,
      height: 105,
      border: '2px solid black',
      backgroundColor: 'white',
      backgroundImage: this.props.card.backgroundImage,
      borderRadius: '10px',
      marginTop: '10px',
    }

    let cardStyleB = {
      width: 105,
      height: 104,
      border: '2px solid black',
      borderRadius: '5px',
      backgroundImage: 'url(https://image.spreadshirtmedia.com/image-server/v1/mp/compositions/P15892810T175A2MPC21568379PA296PT14/views/1,width=100,height=100,appearanceId=2,backgroundColor=E8E8E8,version=1452254899/black-question-mark-question-t-shirts-men-s-t-shirt-by-american-apparel.jpg)',
      marginTop: '10px'
    }

    if(this.props.card.flipped){
      return(
      <div style={cardStyleA} onClick={this.handleClick}>
      </div>);
    } else {
      return(
      <div style={cardStyleB} onClick={this.handleClick}>
      </div>);
    }

  }
}

export default Card;
