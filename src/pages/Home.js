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

          <p>Driven by a desire to diagnose and resolve problems big and small using technology-based solutions. Happier with an error message than a successful compile. Seeking to improve diversity in the tech industry. Dreaming of coding the world to a better place.</p>

          <p>I am a self-taught coder who has recently formalized my knowledge and skills at a San Diego coding bootcamp. I am thrilled to have officially joined the tech community; I strive to continuously improve myself and any organization I take part in.</p>

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
