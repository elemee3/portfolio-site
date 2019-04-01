import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue'
    }
  }

  handleClick = () => {
    this.props.handleClick(this.props.id);
    if (this.props.isActive) {
      this.props.isShip ? this.setState({ color: 'red' }) : this.setState({ color: 'white' });
    };
  }

  render() {
    let color;
    if (!this.props.isActive && this.props.isShip) {
      color = 'red';
    } else if (this.props.isActive) {
      color = 'blue';
    };
    return (
      <div style={boxStyles} className={color ? color : this.state.color} onClick={this.handleClick}></div>
    );
  }
}

const boxStyles = {
  border: '1px solid black',
  width: '100px',
  height: '100px'
};

export default Box;
