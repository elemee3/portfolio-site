import React, { Component } from 'react';
import './battleship.css';

import Header from './Header.js';
import Box from './Box.js';

class Battleship extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStart: true,
      gameBoard: [],
      emptyBoard: [
        "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "",
      ]
    }
  }

  generateBoard = () => {
    let gameBoard = this.generateShips()
    let boxes = gameBoard.map((box, index) => {
      return (
        <Box id={index} isClicked="unclicked" isShip={box === "X" ? true : false} />
      )
    });
    this.setState({
      gameBoard: boxes,
      isStart: false
    });
  }

  getRandomThruHundred = () => {
    return Math.floor(Math.random() * 100);
  }

  // given array of boxes, return array of neighbor boxes
  getNeighbors = (shipBoxes) => {
    let neighbors = [];
    for (let i = 0; i < shipBoxes.length; i++) {
      let digits = shipBoxes[i].toString().split("").length;
      // Right neighbor (only if tens place is not 9)
      if (shipBoxes[i].toString()[digits - 1] !== 9) {
        neighbors.push(shipBoxes[i] + 1);
      };
      // Left neighbor (only if tens place is not 0)
      if (shipBoxes[i].toString()[digits - 1] !== 0) {
        neighbors.push(shipBoxes[i] - 1);
      };
      // Top neighbor (only if num is greater than 9)
      if (shipBoxes[i] > 9) {
        neighbors.push(shipBoxes[i] - 10);
      };
      // Bottom neighbor (only if num is less than 90)
      if (shipBoxes[i] < 90) {
        neighbors.push(shipBoxes[i] + 10);
      };
    };
    neighbors = neighbors.filter((item, index) => {
      return neighbors.indexOf(item) >= index;
    });
    return neighbors;
  }

  checkForMatch = (newShip, neighbors) => {
    let isMatch = false;
    for (let i = 0; i < newShip.length; i++) {
      if (neighbors.includes(newShip[i])) {
        isMatch = true;
        break;
      };
    };
    return isMatch;
  }

  // TODO: consolidate generate ship functions
  generateHorizontialFour = () => {
    let shipPositions;
    let random = this.getRandomThruHundred();
    let digits = random.toString().split("").length;
    if (random.toString()[digits - 1] >= 7) {
      // if last digit is 7, 8, or 9, build backwards
      shipPositions = [random, random - 1, random - 2, random - 3];
    } else {
      // otherwise, build forwards
      shipPositions = [random, random + 1, random + 2, random + 3];
    };
    return shipPositions;
  }

  generateVerticalFour = () => {
    let shipPositions;
    let random = this.getRandomThruHundred();
    if (random > 69) {
      // if num is greater than 69, build up
      shipPositions = [random, random - 10, random - 20, random - 30];
    } else {
      // otherwise, build down
      shipPositions = [random, random + 10, random + 20, random + 30];
    };
    return shipPositions;
  }

  generateHorizontialThree = () => {
    let shipPositions;
    let random = this.getRandomThruHundred();
    let digits = random.toString().split("").length;
    if (random.toString()[digits - 1] >= 8) {
      // if last digit is 8 or 9, build backwards
      shipPositions = [random, random - 1, random - 2];
    } else {
      // otherwise, build forwards
      shipPositions = [random, random + 1, random + 2];
    };
    return shipPositions;
  }

  generateVerticalThree = () => {
    let shipPositions;
    let random = this.getRandomThruHundred();
    if (random > 79) {
      // if num is greater than 79, build up
      shipPositions = [random, random - 10, random - 20];
    } else {
      // otherwise, build down
      shipPositions = [random, random + 10, random + 20];
    };
    return shipPositions;
  }

  generateShips = () => {
    let positions = [];
    // generate first four-piece horizontial ship
    positions.push(this.generateHorizontialFour());
    positions = positions.flat(2)

    // second four-piece horizontial ship
    let currentShip, neighbors;
    neighbors = this.getNeighbors(positions);
    do {
      currentShip = this.generateHorizontialFour();
    } while (this.checkForMatch(currentShip, neighbors))
    positions.push(currentShip);
    positions = positions.flat(2);

    // first four-piece vertical ship
    neighbors = this.getNeighbors(positions);
    do {
      currentShip = this.generateVerticalFour();
    } while (this.checkForMatch(currentShip, neighbors));
    positions.push(currentShip);
    positions = positions.flat(2);

    // second four-piece vertical ship
    neighbors = this.getNeighbors(positions);
    do {
      currentShip = this.generateVerticalFour();
    } while (this.checkForMatch(currentShip, neighbors));
    positions.push(currentShip);
    positions = positions.flat(2);

    // first three-piece horizontial ship
    neighbors = this.getNeighbors(positions);
    do {
      currentShip = this.generateHorizontialThree();
    } while (this.checkForMatch(currentShip, neighbors));
    positions.push(currentShip);
    positions = positions.flat(2);

    // second three-piece horizontial ship
    neighbors = this.getNeighbors(positions);
    do {
      currentShip = this.generateHorizontialThree();
    } while (this.checkForMatch(currentShip, neighbors));
    positions.push(currentShip);
    positions = positions.flat(2);

    // first three-piece vertical ship
    neighbors = this.getNeighbors(positions);
    do {
      currentShip = this.generateVerticalThree();
    } while (this.checkForMatch(currentShip, neighbors));
    positions.push(currentShip);
    positions = positions.flat(2);

    // second three-piece vertical ship
    neighbors = this.getNeighbors(positions);
    do {
      currentShip = this.generateVerticalThree();
    } while (this.checkForMatch(currentShip, neighbors));
    positions.push(currentShip);
    positions = positions.flat(2);

    // make a copy of the empty board
    let ships = this.state.emptyBoard;
    // add ships to copied board
    for (let i = 0; i < positions.length; i++) {
      ships[positions[i]] = "X"
    };
    return ships;
  }

  render() {
    return (
      <div className="battleship-game">
        <Header />
        <div className="board">
          {this.state.isStart ? this.generateBoard() : this.state.gameBoard}
        </div>
      </div>
    );
  }
}

export default Battleship;
