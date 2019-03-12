import React, { Component } from 'react';
import { Card, Button, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import ReactModal from 'react-responsive-modal';

import TicTacToe from '../games/tic-tac-toe/TicTacToe';
import PigLatin from '../games/pig-latin/PigLatin';

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tttModalIsOpen: false,
      plModalIsOpen: false
    }
  }

  onOpenTTTModal = () => {
    this.setState({ tttModalIsOpen: true });
  }

  onCloseTTTModal = () => {
    this.setState({ tttModalIsOpen: false });
  }

  onOpenPLModal = () => {
    this.setState({ plModalIsOpen: true });
  }

  onClosePLModal = () => {
    this.setState({ plModalIsOpen: false });
  }

  render() {
    return (
      <div className="page">
        <h3>Portfolio</h3>
        <div className="portfolio">

            <Card body className="single-card">
              <CardTitle>Tic Tac Toe</CardTitle>
              <CardSubtitle>ReactJS Mini-Game</CardSubtitle>
              <br/>
              <CardText>A simple game of tic-tac-toe built from scratch in ReactJS. Players alternate turns, beginning with player 'X'. Try 'Legendary Mode' for an additional challenge!</CardText>
              <Button className="portfolio-button" onClick={this.onOpenTTTModal}>Play Now</Button>
              <br/>
              <Button className="portfolio-button" href="https://github.com/elemee3/portfolio-site/blob/master/src/games/tic-tac-toe/TicTacToe.js">View Code</Button>
              <ReactModal
                open={this.state.tttModalIsOpen}
                onClose={this.onCloseTTTModal}
              >
                <TicTacToe />
              </ReactModal>
            </Card>

            <Card body className="single-card">
              <CardTitle>Pig Latin</CardTitle>
              <CardSubtitle>ReactJS Mini-Game</CardSubtitle>
              <br/>
              <CardText>The Pig Latin app uses a few logical rules to allow a user to submit plain English and get back a translation to Pig Latin.</CardText>
              <Button className="portfolio-button" onClick={this.onOpenPLModal}>Play Now</Button>
              <br/>
              <Button className="portfolio-button" href="https://github.com/elemee3/portfolio-site/blob/master/src/games/pig-latin/PigLatin.js" target="_blank">View Code</Button>
              <ReactModal
                open={this.state.plModalIsOpen}
                onClose={this.onClosePLModal}
              >
                <PigLatin />
              </ReactModal>
            </Card>

            <Card body className="single-card">
              <CardTitle>Cat Tinder</CardTitle>
              <CardSubtitle>ReactJS frontend, Ruby on Rails backend</CardSubtitle>
              <br/>
              <CardText>Cat Tinder is currently a database of cats that can be viewed, added, or deleted by users. Going forward, my goal is to implement a voting mechanism where users can up/down vote cats.</CardText>
              <Button className="portfolio-button" href="https://protected-citadel-24964.herokuapp.com/" target="_blank">Launch (Heroku)</Button>
            </Card>

            <Card body className="single-card">
              <CardTitle>InspoBot</CardTitle>
              <CardSubtitle>Node.js, PHP, MySQL</CardSubtitle>
              <br/>
              <CardText>InspoBot integrates with the Slack Web API and facilitates submitting pieces of inspiration, allowing your team to vote and ultimately approve or reject your inspiration submission.</CardText>
              <Button className="portfolio-button" href="#">See How It Works (Video)</Button>
            </Card>

            <Card body className="single-card">
              <CardTitle>Activity Buddy</CardTitle>
              <CardSubtitle>ReactJS frontend, Ruby on Rails backend</CardSubtitle>
              <br/>
              <CardText>Activity Buddy is a full-stack app that includes authetication/authorization via Devise. It allows a user to register with their address and activity preference, and locate other users near them.</CardText>
              <Button className="portfolio-button" href="http://activitybuddy-frontend.herokuapp.com/" target="_blank">Launch (Heroku)</Button>
            </Card>


            <Card body className="single-card">
              <CardTitle>YummY</CardTitle>
              <CardSubtitle>Ruby on Rails</CardSubtitle>
              <br/>
              <CardText>Work In Progress - Full Stack Recipe Catalog</CardText>
              <Button className="portfolio-button" href="#">Coming Soon!</Button>
            </Card>

          </div>
      </div>
    );
  }
}

export default Portfolio;
