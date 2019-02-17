import React, { Component } from 'react';
import { Card, Button, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import ReactModal from 'react-responsive-modal';
import TicTacToe from '../games/tic-tac-toe/TicTacToe';

const modalStyle = {
  content: {
    height: '750px',
    width: '750px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }
  }

  onOpenModal = () => {
    this.setState({ modalIsOpen: true });
  }

  onCloseModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="page">
        <h3>Portfolio</h3>
        <div className="portfolio">

            <Card body className="single-card">
              <CardTitle>Cat Tinder</CardTitle>
              <CardSubtitle>ReactJS frontend, Ruby on Rails backend</CardSubtitle>
              <br/>
              <CardText>Cat Tinder is currently a database of cats that can be viewed, added, or deleted by users. Going forward, my goal is to implement a voting mechanism where users can up/down vote cats.</CardText>
              <Button className="portfolio-button" href="https://protected-citadel-24964.herokuapp.com/">Launch (Heroku)</Button>
            </Card>

            <Card body className="single-card">
              <CardTitle>Activity Buddy</CardTitle>
              <CardSubtitle>ReactJS frontend, Ruby on Rails backend</CardSubtitle>
              <br/>
              <CardText>Activity Buddy is a full-stack app that includes authetication/authorization via Devise. It allows a user to register with their address and activity preference, and locate other users near them.</CardText>
              <Button className="portfolio-button" href="http://activitybuddy-frontend.herokuapp.com/">Launch (Heroku)</Button>
            </Card>

            <Card body className="single-card">
              <CardTitle>Tic Tac Toe</CardTitle>
              <CardSubtitle>ReactJS Mini-Game</CardSubtitle>
              <br/>
              <CardText>A simple game of tic-tac-toe built from scratch in ReactJS. Players alternate turns, beginning with player 'X'. The game is over when a player gets 3 in a row, or no empty squares are left. Try 'Legendary Mode' for an additional challenge!</CardText>
              <Button className="portfolio-button" onClick={this.onOpenModal}>Play Now</Button>
              <br/>
              <Button className="portfolio-button" href="https://github.com/elemee3/portfolio-site/blob/master/src/games/tic-tac-toe/TicTacToe.js">View Code</Button>
              <ReactModal
                style={modalStyle}
                open={this.state.modalIsOpen}
                onClose={this.onCloseModal}
              >
                <TicTacToe />
              </ReactModal>

            </Card>

            <Card body className="single-card">
              <CardTitle>Pig Latin</CardTitle>
              <CardSubtitle>ReactJS Mini-Game</CardSubtitle>
              <br/>
              <CardText>The Pig Latin app allows users to submit plain English and get back a translation to Pig Latin.</CardText>
              <Button className="portfolio-button" href="https://pig-latify1.herokuapp.com/">Launch (Heroku)</Button>
            </Card>

            <Card body className="single-card">
              <CardTitle>Battleship</CardTitle>
              <CardSubtitle>ReactJS Mini-Game</CardSubtitle>
              <br/>
              <CardText>Work In Progress</CardText>
              <Button className="portfolio-button" href="#">Coming Soon!</Button>
            </Card>

            <Card body className="single-card">
              <CardTitle>YummY</CardTitle>
              <CardSubtitle>Ruby on Rails</CardSubtitle>
              <br/>
              <CardText>Work In Progress</CardText>
              <Button className="portfolio-button" href="#">Coming Soon!</Button>
            </Card>

          </div>
      </div>
    );
  }
}

export default Portfolio;
