import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="bs-header">
        <h1>Battleship</h1>
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
