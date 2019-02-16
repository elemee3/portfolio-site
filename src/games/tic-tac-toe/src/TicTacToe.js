import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import styled, { css, keyframes } from 'styled-components';
import Board from './Board';

class TicTacToe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spin: false
    }
  }

  toggleSpin = () => {
    this.setState({ spin: !this.state.spin })
  }

  handleGameReset = () => {
    window.location.reload()
  }

  render() {
    return (
      <div style={appStyles}>
        <header style={headerStyles}>
          <h1>Tic Tac Toe</h1>
          <ButtonGroup>
            <Button onClick={() => this.toggleSpin()}
            active={this.state.spin}>
              Legendary Mode
            </Button>
            <br />
            <Button onClick={this.handleGameReset}>
              Reset Game
            </Button>
          </ButtonGroup>
        </header>
        {this.state.spin ?
          <Legendary>
            <Board />
          </Legendary>
        :
          <div>
            <Board />
          </div>
        }
      </div>
    );
  }
}

const headerStyles = {
  marginTop: '-50px',

  paddingBottom: '75px'
}

const appStyles = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '80px'
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
