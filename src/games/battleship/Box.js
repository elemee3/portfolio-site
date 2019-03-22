import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickStatus: "unclicked"
    }
  }

  handleClick = () => {
    let status;
    if (this.props.isShip) {
      status = "ship-box"
    } else {
      status = "non-ship-box"
    }
    this.setState({
      clickStatus: status
    })
  }

  render() {
    console.log(this.props.isShip)
    return (
      <div style={boxStyles} className={this.state.clickStatus} onClick={this.handleClick}>
        {this.props.id}
      </div>
    );
  }
}

const boxStyles = {
  border: '1px solid black',
  width: '100px',
  height: '100px'
};

export default Box;
