import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import styled, { css, keyframes } from 'styled-components';
import Box from './Box';
import Message from './Message';

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

  handleAllClicks = (id) => {
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

  // checks state, returns boolean
  isWin = () => {
    let { board, winList } = this.state
    let isWin = false
    //if the board matches a combo in winList, return true
    for (let i = 0; i < winList.length; i++) {
      if (board[winList[i][0]] !== '' &&
          board[winList[i][0]] === board[winList[i][1]] &&
          board[winList[i][1]] === board[winList[i][2]]) {
        isWin = true
        //break out of the loop when true
        return isWin
      } else {
        isWin = false
      }
    }
    return isWin
  }

  // checks state, returns boolean
  isLoss = () => {
    if (this.state.clickCount >= 9) {
      return true
    } else {
      return false
    }
  }

  // called by Message component, returns string
  handleGameOver = () => {
    if (this.isWin()) {
      return 'Winner: '
    } else if (this.isLoss()) {
      return 'Game over, losers'
    } else {
      return ''
    }
  }

  // called by Message component, returns string
  playerMessage = () => {
    if (this.state.clickCount % 2 === 0) {
      return 'X'
    } else {
      return 'O'
    }
  }

  toggleSpin = () => {
    this.setState({ spin: !this.state.spin })
  }

  handleGameReset = () => {
    this.setState({
      spin: false,
      isReset: true,
      clickCount: 0,
      activeGame: true,
      board: ['', '', '', '', '', '', '', '', '']
    })
  }

  render() {
    let { board } = this.state
    let boxes = board.map((box, index) => {
      return (
        <Box  id={index}
              onAllClicks={this.handleAllClicks}
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
          reset={this.handleGameReset}
        />
        <div style={boardStyles}>
          {boxes}
        </div>
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
