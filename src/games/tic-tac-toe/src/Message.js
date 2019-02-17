import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props)
  }
  
  formatMessage = () => {
    let { player, endGameMessage } = this.props
    if (endGameMessage === 'Game over, losers') {     // if no one wins
      return endGameMessage;
    } else if (endGameMessage !== '') {               // if there is a winner
      let winner = '';
      if (player === 'X') {
        winner = 'O';
      } else {
        winner = 'X';
      };
      return endGameMessage + ' ' + winner;
    } else {                                         // if the game isn't over yet
      return 'Current Player: ' + player;
    };
  }

  render() {
    return (
      <div style={messageBox}>
        <div style={messageStyles}>
          <h1>Tic Tac Toe</h1>
          <div style={buttonStyles}>
            <button>Legendary Mode</button>
            <button onClick={this.props.reset}>Reset Game</button>
          </div>
        </div>
        <p>{this.formatMessage()}</p>
      </div>
    );
  }
}

const messageBox = {
  width: '475px',
  paddingBottom: '50px',
  textAlign: 'center'
}

const messageStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingTop: '15px'
}

const buttonStyles = {
  paddingTop: '15px'
}

export default Message;
