import React, { Component } from 'react';

import Amsterdam from '../images/amsterdam.jpg';
import Bridge from '../images/bridge.jpg';
import Stanford from '../images/stanford.jpg'

class Home extends Component {
  render() {
    return (
      <main>

        <div className="hero">
          <div className="hero-text">
            <h4>Full-stack web developer based in San Diego, CA</h4>

            <p>I am driven by a desire to diagnose and resolve problems using technology-based solutions. I find great joy in designing beautiful digital products, constructing supporting architecture, and squashing bugs. I dream of coding the world to a better place; an outcome only possible with a more diverse and welcoming tech community.</p>
            <p>My ultimate goal is to continue establishing myself in the field, so that I can help open the world of technology to more young women and non-binary people, non-traditional educational backgrounds, low-income communities, and other under-represented groups.</p>

          </div>
        </div>

        <div className="home">
          <div className="home-card-1">
            <div className="home-card-content">
              <img src={Bridge} height="350" alt="portfolio" />
              <div className="home-card-text">
                <h2>Explore top projects</h2>
                <a href="/portfolio" alt="portfolio"><button className="home-button">Portfolio</button></a>
              </div>
            </div>
          </div>

          <div className="home-card-2">
            <div className="home-card-content">
              <div className="home-card-text">
                <h2>View current resume</h2>
                <a href="/resume" alt="resume"><button className="home-button">Resume</button></a>
              </div>
              <img src={Amsterdam} height="350" alt="resume" />
            </div>
          </div>

          <div className="home-card-2-mobile">
            <div className="home-card-content">
              <img src={Amsterdam} height="350" alt="resume" />
              <div className="home-card-text">
                <h2>View current resume</h2>
                <a href="/resume" alt="resume"><button className="home-button">Resume</button></a>
              </div>
            </div>
          </div>

          <div className="home-card-3">
            <div className="home-card-content">
              <img src={Stanford} height="350" alt="contact" />
              <div className="home-card-text">
                <h2>Get in touch</h2>
                <a  href="/contact" alt="contact"><button className="home-button">Contact</button></a>
              </div>
            </div>
          </div>
        </div>

      </main>
    );
  }
}

export default Home;
