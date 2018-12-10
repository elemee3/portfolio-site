import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

import Amsterdam from '../amsterdam.jpg';
import Bridge from '../bridge.jpg';
import Stanford from '../stanford.jpg'

class Home extends Component {
  render() {
    return (
      <main>

        <div className="jumbotron">
          <h4>Full-stack web developer based in San Diego, specializing in JavaScript and Ruby on Rails</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="container">
          <Card className="single-card">
            <CardImg top width="100%" src={Amsterdam} alt="Card image cap" />
            <CardBody>
              <CardTitle>Resume</CardTitle>
              <CardSubtitle>View current resume</CardSubtitle><br/>
              <Button href="/resume" alt="resume">Go</Button>
            </CardBody>
          </Card>
          <Card className="single-card">
            <CardImg top width="100%" src={Bridge} alt="Card image cap" />
            <CardBody>
              <CardTitle>Portfolio</CardTitle>
              <CardSubtitle>Explore top projects</CardSubtitle><br/>
              <Button href="/portfolio" alt="portfolio">Go</Button>
            </CardBody>
          </Card>
          <Card className="single-card">
            <CardImg top width="100%" src={Stanford} alt="Card image cap" />
            <CardBody>
              <CardTitle>Contact</CardTitle>
              <CardSubtitle>Get in touch</CardSubtitle><br/>
              <Button href="/contact" alt="contact">Go</Button>
            </CardBody>
          </Card>
        </div>

      </main>
    );
  }
}

export default Home;
