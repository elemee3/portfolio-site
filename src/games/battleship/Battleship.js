import React, { Component } from 'react';
import './battleship.css';

import Header from './Header.js';
import Box from './Box.js';

class Battleship extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStart: true,
      shipLocations: [],
      deactivated: [],
      shipHits: 0,
      torpedos: 25,
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

  resetGame = () => {
    let ships = this.generateShips();
    this.setState({
      isStart: true,
      shipLocations: ships,
      deactivated: [],
      shipHits: 0,
      torpedos: 25,
    })
  }

  handleClick = (boxId) => {
    let { shipHits, torpedos, deactivated, shipLocations } = this.state;
    if (!deactivated.includes(boxId)) {
      this.deactivateBox(boxId);
      if (shipLocations.includes(boxId)) {
        this.handleShipHit(boxId)
        this.setState({
          torpedos: torpedos-1,
          shipHits: shipHits+1
        });
      } else {
        this.setState({ torpedos: torpedos-1 });
      };
    };
  }

  handleShipHit = (id) => {
    let { shipLocations } = this.state;
    let restOfShip = [];
    let digits = id.toString().split("").length;
    let lastDigit = id.toString()[digits - 1]

    // check in each direction, up to 3 blocks away
    // RIGHT
    if (lastDigit < 9 && shipLocations.includes(id+1)) {
      restOfShip.push(id+1);
      if (lastDigit < 8 && shipLocations.includes(id+2)) {
        restOfShip.push(id+2);
        if (lastDigit < 7 && shipLocations.includes(id+3)) {
          restOfShip.push(id+3);
        };
      };
    };
    // LEFT
    if (lastDigit > 0 && shipLocations.includes(id-1)) {
      restOfShip.push(id-1);
      if (lastDigit > 1 && shipLocations.includes(id-2)) {
        restOfShip.push(id-2);
        if (lastDigit > 2 && shipLocations.includes(id-3)) {
          restOfShip.push(id-3);
        };
      };
    };
    // TOP
    if (id > 9 && shipLocations.includes(id-10)) {
      restOfShip.push(id-10);
      if (id > 19 && shipLocations.includes(id-20)) {
        restOfShip.push(id-20);
        if (id > 29 && shipLocations.includes(id-30)) {
          restOfShip.push(id-30);
        };
      };
    };
    // BOTTOM
    if (id < 90 && shipLocations.includes(id+10)) {
      restOfShip.push(id+10);
      if (id < 80 && shipLocations.includes(id+20)) {
        restOfShip.push(id+20);
        if (id < 70 && shipLocations.includes(id+30)) {
          restOfShip.push(id+30);
        };
      };
    };
    this.deactivateBox(restOfShip);
  }

  deactivateBox = (ids) => {
    let { deactivated } = this.state;
    if (ids.length === 0) {
      return;
    } else if (ids.length > 0) {
      for (let i = 0; i < ids.length; i++) {
        deactivated.push(ids[i]);
      };
    } else {
      deactivated.push(ids);
    };
    this.setState({ deactivated});
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

    return positions;
  }
  /////////////////////////////////// helpers for generateShips()
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
  getRandomThruHundred = () => {
    return Math.floor(Math.random() * 100);
  }
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
  ///////////////////////////////////////////////////////////////

  componentDidMount = () => {
    let ships = this.generateShips();
    this.setState({
      shipLocations: ships,
      isStart: false
    });
  }

  render() {
    let boxes = this.state.emptyBoard.map((box, id) => {
      let isShip = false;
      let isActive = true;
      if (this.state.deactivated.includes(id)) {
        console.log(id + ' is deactivated')
        isActive = false;
      };
      if (this.state.shipLocations.includes(id)) {
        console.log(id + ' is a ship')
        isShip = true;
      };
      return (
        <Box key={id} id={id} isShip={isShip} isActive={isActive} handleClick={this.handleClick} />
      )
    });

    return (
      <div className="battleship-game">
        <Header hits={this.state.shipHits} torpedos={this.state.torpedos} resetGame={this.resetGame} />
        <div className="board">
          {boxes}
        </div>
      </div>
    );
  }
}

export default Battleship;
