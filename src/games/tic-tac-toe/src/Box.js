import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: true
    }
  }

  handleClick = () => {
    if (this.props.activeGame && this.props.value === '') {
      if (this.props.count % 2 === 0) {
        this.props.onAllClicks(this.props.id)
        this.setState({
          isActive: false
        })
      } else {
        this.props.onAllClicks(this.props.id)
        this.setState({
          isActive: false
        })
      }
    }
  }

  render() {
    return (
      <div style={boxStyles} onClick={this.handleClick} key={this.props.id}>
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
