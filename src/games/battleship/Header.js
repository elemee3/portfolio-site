import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="bs-header">
        <div className="title">
          <h2>Battleship</h2>
          <button onClick={this.props.resetGame}>Reset Game</button>
        </div>
        <h3>{this.props.endGameMessage}</h3>
        <div>
          <p>Ships Hit: {this.props.hits}</p>
          <p>Remaining Torpedos: {this.props.torpedos}</p>
        </div>
      </div>
    );
  }
}

export default Header;
