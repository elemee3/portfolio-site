import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardSubtitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: '1'
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="page">
        <h3>Portfolio</h3>
        <Nav tabs>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1') }}
            >
              Currently Deployed
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2') }}
            >
              Full-Stack Apps
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3') }}
            >
              ReactJS
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4') }}
            >
              Ruby on Rails
            </NavLink>
          </NavItem>

        </Nav>


        <TabContent activeTab={this.state.activeTab}>

          <TabPane tabId="1">
            <div className="portfolio-tab">

                <Card body className="portfolio-item">
                  <CardTitle>Cat Tinder</CardTitle>
                  <CardSubtitle>ReactJS frontend, Ruby on Rails backend</CardSubtitle>
                  <br/>
                  <CardText>Cat Tinder is currently a database of cats that can be viewed, added, or deleted by users. Going forward, my goal is to implement a voting mechanism where users can up/down vote cats.</CardText>
                  <Button className="portfolio-button" href="https://protected-citadel-24964.herokuapp.com/">Launch</Button>
                </Card>

                <Card body className="portfolio-item">
                  <CardTitle>Activity Buddy</CardTitle>
                  <CardSubtitle>ReactJS frontend, Ruby on Rails backend</CardSubtitle>
                  <br/>
                  <CardText>Activity Buddy is a full-stack app that includes authetication/authorization via Devise. It allows a user to register with their address and activity preference, and locate other users near them.</CardText>
                  <Button className="portfolio-button" href="http://activitybuddy-frontend.herokuapp.com/">Launch</Button>
                </Card>

                <Card body className="portfolio-item">
                  <CardTitle>YummY</CardTitle>
                  <CardSubtitle>Ruby on Rails</CardSubtitle>
                  <br/>
                  <CardText>Coming Soon!</CardText>
                  <Button className="portfolio-button" href="#">Coming Soon!</Button>
                </Card>

                <Card body className="portfolio-item">
                  <CardTitle>Pig Latin</CardTitle>
                  <CardSubtitle>ReactJS Mini-Game</CardSubtitle>
                  <br/>
                  <CardText>The Pig Latin app allows users to submit plain English and get back a translation to Pig Latin.</CardText>
                  <Button className="portfolio-button" href="https://pig-latify1.herokuapp.com/">Launch</Button>
                </Card>

                <Card body className="portfolio-item">
                  <CardTitle>Battleship</CardTitle>
                  <CardSubtitle>ReactJS Mini-Game</CardSubtitle>
                  <br/>
                  <CardText>Coming Soon!</CardText>
                  <Button className="portfolio-button" href="#">Coming Soon!</Button>
                </Card>

                <Card body className="portfolio-item">
                  <CardTitle>Tic Tac Toe</CardTitle>
                  <CardSubtitle>ReactJS Mini-Game</CardSubtitle>
                  <br/>
                  <CardText>A simple game of tic-tac-toe built from scratch in ReactJS. Players alternate turns, beginning with player 'X'. Click one box to play your turn. The game is over when a player gets 3 in a row, or no available squares are left. Try 'Legendary Mode' for an additional challenge!</CardText>
                  <Button className="portfolio-button" href="http://tttsolo.herokuapp.com/">Launch</Button>
                </Card>
              </div>

          </TabPane>

          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>Tab 2 Contents</h4>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <h4>Tab 3 Contents</h4>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <h4>Tab 4 Contents</h4>
              </Col>
            </Row>
          </TabPane>

        </TabContent>
      </div>
    );
  }
}

export default Portfolio;
