import React, { Component } from 'react';
import styled from 'styled-components';

class Message extends Component {
  formatMessage = () => {
    let { player, endGameMessage } = this.props
    if (endGameMessage[0] === 'G') {          // if Game Over
      return endGameMessage;
    } else if (endGameMessage[0] === 'W') {   // if Winner
      return `${endGameMessage} ${player === 'X' ? 'O' : 'X'}`;
    } else {                                  // if Still In Play
      return 'Current Player: ' + player;
    }
  }

  render() {
    return (
      <div style={messageBox}>
        <div style={headerStyles}>
          <h1>Tic Tac Toe</h1>
          <div>
            <CustomButton onClick={this.props.legendary}>Legendary Mode</CustomButton>
            <CustomButton onClick={this.props.reset}>Reset Game</CustomButton>
          </div>
        </div>
        <p>{this.formatMessage()}</p>
      </div>
    );
  }
}

const CustomButton = styled.button`
  margin: 10px 0 0 5px;
  padding: 5px;
  background: gray;
  border-radius: 5px;
  color: white;
  border: 0;

  :hover {
    background: #212529;
  }
`

const messageBox = {
  width: '475px',
  maxWidth: '75vw',
  paddingBottom: '50px',
  textAlign: 'center'
};

const headerStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-around',
  padding: '15px 0 5px 0'
};

export default Message;
