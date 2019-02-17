import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Message from './Message';
import Box from './Box';

class TicTacToe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spin: false,
      isReset: false,
      clickCount: 0,
      activeGame: true,
      board: ['', '', '', '', '', '', '', '', ''],
      winList: [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
      ]
    }
  }

  handleClicks = (id) => {
    let { clickCount, board } = this.state
    if (this.state.activeGame) {
      board[id] = this.playerMessage()
      clickCount++
      this.setState({
        clickCount: clickCount,
        board: board
      })
      // to exit the game, deactivate game board
      if (this.isWin() || this.isLoss()) {
        this.handleGameOver()
        this.setState({
          activeGame: false
        })
      }
    }
  }

  isWin = () => {
    let { board, winList } = this.state
    let isWin = false;
    //if the board matches a combo in winList, return true
    for (let i = 0; i < winList.length; i++) {
      if (board[winList[i][0]] !== '' &&
          board[winList[i][0]] === board[winList[i][1]] &&
          board[winList[i][1]] === board[winList[i][2]]) {
        isWin = true;
        return isWin;
      } else {
        isWin = false;
      }
    }
    return isWin;
  }

  isLoss = () => {
    if (this.state.clickCount >= 9) {
      return true;
    } else {
      return false;
    }
  }

  handleGameOver = () => {
    if (this.isWin()) {
      return 'Winner: ';
    } else if (this.isLoss()) {
      return 'Game over, losers';
    } else {
      return '';
    }
  }

  playerMessage = () => { return this.state.clickCount % 2 === 0 ? 'X' : 'O' }

  toggleSpin = () => {
    this.setState({ spin: !this.state.spin })
  }

  handleGameReset = () => {
    this.setState({
      isReset: true,
      clickCount: 0,
      activeGame: true,
      board: ['', '', '', '', '', '', '', '', '']
    })
  }

  handleLegendary = () => {
    if (!this.state.spin) {
      this.setState({
        spin: true
      })
    } else {
      this.setState({
        spin: false
      })
    }
  }

  render() {
    let { board } = this.state
    let boxes = board.map((box, index) => {
      return (
        <Box  id={index}
              handleClicks={this.handleClicks}
              count={this.state.clickCount}
              activeGame={this.state.activeGame}
              value={this.state.board[index]}
        />
      )
    })

    return (
      <div style={appStyles}>
        <Message
          player={this.playerMessage()}
          endGameMessage={this.handleGameOver()}
          legendary={this.handleLegendary}
          reset={this.handleGameReset}
        />
        {this.state.spin ?
          <Legendary style={boardStyles}>
            {boxes}
          </Legendary>
        :
          <div style={boardStyles}>
            {boxes}
          </div>
        }
      </div>
    );
  }
}

const boardStyles = {
  width: '306px',
  height: '306px',
  border: '3px solid black',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around'
}

const appStyles = {
  width: '500px',
  height: '550px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const BoardSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Legendary = styled.div`
  animation: ${BoardSpin} 20s linear infinite;
`

export default TicTacToe;
