import React, { Component } from 'react';

class Box extends Component {
  handleClick = () => {
    if (this.props.activeGame && this.props.value === '') {
      this.props.handleClicks(this.props.id)
    }
  }

  render() {
    return (
      <div style={boxStyles} onClick={this.handleClick}>
        {this.props.value}
      </div>
    );
  }
}

const boxStyles = {
  width: '100px',
  height: '100px',
  border: '1px solid black',
  fontSize: '75px',
  textAlign: 'center'
};

export default Box;
