import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: '',
      isActive: true
    }
  }

  // if the game and the particular square are active, set player val based on counter,
  // call onAllClicks() in the parent, and setState
  handleClick = () => {
    let { player, isActive } = this.state
    if (isActive && this.props.activeGame) {
      if (this.props.count % 2 === 0) {
        player = 'X'
        this.props.onAllClicks(this.props.id, player)
        this.setState({
          player: player,
          isActive: false
        })
      } else {
        player = 'O'
        this.props.onAllClicks(this.props.id, player)
        this.setState({
          player: player,
          isActive: false
        })
      }
    }
  }

  render() {
    return (
      <div style={boxStyles} onClick={this.handleClick} key={this.props.id} >
        {this.state.player}
      </div>
    );
  }
}

const boxStyles = {
  width: '100px',
  height: '100px',
  border: '1px solid black',
  fontSize: '75px'
};

export default Box;
