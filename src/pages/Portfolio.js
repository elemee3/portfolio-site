import React, { Component } from 'react';
import { Card, Button, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import ReactModal from 'react-responsive-modal';

import TicTacToe from '../games/tic-tac-toe/TicTacToe';
import PigLatin from '../games/pig-latin/PigLatin';

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tttModalIsOpen: false,
      plModalIsOpen: false,
      inspoModalIsOpen: false,
      caffeineModalIsOpen: false,
      activeTab: 'javascript'
    };
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    };
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

  onOpenInspoModal = () => {
    this.setState({ inspoModalIsOpen: true });
  }

  onCloseInspoModal = () => {
    this.setState({ inspoModalIsOpen: false });
  }

  onOpenCaffeineModal = () => {
    this.setState({ caffeineModalIsOpen: true });
  }

  onCloseCaffeineModal = () => {
    this.setState({ caffeineModalIsOpen: false });
  }

  render() {
    return (
      <div className="page">
        <h3>Portfolio</h3>
        <div className="portfolio">

          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === 'javascript' })}
                onClick={() => { this.toggle('javascript'); }}
              >
                JavaScript
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === 'ruby-rails-2' })}
                onClick={() => { this.toggle('ruby-rails-2'); }}
              >
                Ruby on Rails
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === 'more-3' })}
                onClick={() => { this.toggle('more-3'); }}
              >
                More Projects
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="javascript">
              <div className="portfolio-tab">
                <Card body className="single-card">
                  <CardTitle>Jammming</CardTitle>
                  <br/>
                  <CardText>Search by song, artist, or album and create a playlist using the Spotify API, your new playlist to your account using OAuth 2.0 authentication.</CardText>
                  <br/>
                  <Button className="portfolio-button" href="https://github.com/elemee3/jammming">View Code</Button>
                </Card>


                <Card body className="single-card">
                  <CardTitle>Tic Tac Toe</CardTitle>
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
                  <CardTitle>Ravenous</CardTitle>
                  <br/>
                  <CardText>Making use of the Yelp API, search for businesses by location and sort by best match, most reviewed, or highest reviewed.</CardText>
                  <Button className="portfolio-button" href="#">Coming Soon!</Button>
                </Card>

                <Card body className="single-card">
                  <CardTitle>Battleship</CardTitle>
                  <br/>
                  <CardText>One-player version of Battleship, you have 25 chances to hit and sink all 8 ships on the board.</CardText>
                  <br/>
                  <Button className="portfolio-button" href="/battleship">Play Now</Button>
                  <br/>
                  <Button className="portfolio-button" href="https://github.com/elemee3/portfolio-site/tree/master/src/games/battleship">View Code</Button>
                </Card>
              </div>
            </TabPane>

            <TabPane tabId="ruby-rails-2">
              <div className="portfolio-tab">
                <Card body className="single-card">
                  <CardTitle>Cat Tinder</CardTitle>
                  <CardSubtitle>ReactJS frontend, Ruby on Rails backend</CardSubtitle>
                  <br/>
                  <CardText>Cat Tinder is currently a database of cats that can be viewed, added, or deleted by users. Going forward, my goal is to implement a voting mechanism where users can up/down vote cats.</CardText>
                  <Button className="portfolio-button" href="https://protected-citadel-24964.herokuapp.com/" target="_blank">Launch (Heroku)</Button>
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
            </TabPane>


            <TabPane tabId="more-3">
              <div className="portfolio-tab">
                <Card body className="single-card">
                  <CardTitle>InspoBot</CardTitle>
                  <CardSubtitle>Node.js, PHP, MySQL</CardSubtitle>
                  <br/>
                  <CardText>InspoBot integrates with the Slack Web API and facilitates submitting pieces of inspiration, allowing your team to vote and ultimately approve or reject your inspiration submission.</CardText>
                  <Button className="portfolio-button" onClick={this.onOpenInspoModal}>See How It Works</Button>
                  <ReactModal
                  open={this.state.inspoModalIsOpen}
                  onClose={this.onCloseInspoModal}
                  >
                    <video width="90%" controls>
                      <source src="https://s3-us-west-1.amazonaws.com/elemee/inspobot.mp4" type="video/mp4" />
                    Your browser does not support videos
                    </video>
                  </ReactModal>
                </Card>

                <Card body className="single-card">
                  <CardTitle>Gumball Capital</CardTitle>
                  <CardSubtitle>WordPress Site</CardSubtitle>
                  <br/>
                  <CardText>I built this site as a member of the Social Entrepreneurs of Grinnell, a non profit based in providing micro-finance opportunities to those in need. Gumball Capital was a fundraising event that required a site for publicizing information such as participant details and announcements.</CardText>
                  <Button className="portfolio-button" href="https://gumballgrinnell.wordpress.com/" target="_blank">View Site</Button>
                </Card>

                <Card body className="single-card">
                  <CardTitle>CaffeineBot</CardTitle>
                  <CardSubtitle>Node.js, PHP, MySQL</CardSubtitle>
                  <br/>
                  <CardText>CaffeineBot can be used by a team to track caffeine consumption around the office, add new drinks to the database, and see who has consumed the most caffeine in a given week.</CardText>
                  <Button className="portfolio-button" onClick={this.onOpenCaffeineModal}>See How It Works</Button>
                  <ReactModal
                    open={this.state.caffeineModalIsOpen}
                    onClose={this.onCloseCaffeineModal}
                  >
                    <video width="90%" controls>
                      <source src="https://s3-us-west-1.amazonaws.com/elemee/caffeinebot.mp4" type="video/mp4" />
                    Your browser does not support videos
                    </video>
                  </ReactModal>
                </Card>

                <Card body className="single-card">
                  <CardTitle>Cornstock</CardTitle>
                  <CardSubtitle>WordPress Site</CardSubtitle>
                  <br/>
                  <CardText>Cornstock was a one-time event designed to bring together the residents of the town of Grinnell and students at Grinnell College. In accordance with the socially conscious nature of the event, we decided against wastefully posting notices on paper and instead I created this site as point of reference.</CardText>
                  <Button className="portfolio-button" href="https://cornstock.wordpress.com/" target="_blank">View Site</Button>
                </Card>


              </div>
            </TabPane>

          </TabContent>
        </div>
      </div>
    );
  }
}

export default Portfolio;
