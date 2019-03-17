import React, { Component } from 'react';

import Amsterdam from '../images/amsterdam.jpg';
import Bridge from '../images/bridge.jpg';
import Stanford from '../images/stanford.jpg'

class Home extends Component {
  render() {
    return (
      <main>

        <div className="jumbotron">
          <h4>Full-stack web developer based in San Diego, specializing in JavaScript and Ruby on Rails</h4>

          <p>Driven by a desire to diagnose and resolve problems big and small using technology-based solutions. Happier with an error message than a successful compile. Seeking to improve diversity in the tech industry. Dreaming of coding the world to a better place.</p>

          <p>I am a self-taught coder who has recently formalized my knowledge and skills at a San Diego coding bootcamp. I am thrilled to have officially joined the tech community; I strive to continuously improve myself and any organization I take part in.</p>
        </div>

        <div className="home">
          <div className="home-card-1">
            <div className="home-card-content">
              <img src={Bridge} height="350" alt="portfolio" />
              <div>
                <h1>Portfolio</h1>
                <h6>Explore top projects</h6>
                <a href="/portfolio" alt="portfolio"><button>Go</button></a>
              </div>
            </div>
          </div>

          <div className="home-card-2">
            <div className="home-card-content">
              <div>
                <h1>Resume</h1>
                <h6>View current resume</h6>
                <a href="/resume" alt="resume"><button>Go</button></a>
              </div>
              <img src={Amsterdam} height="350" alt="resume" />
            </div>
          </div>

          <div className="home-card-3">
            <div className="home-card-content">
              <img src={Stanford} height="350" alt="contact" />
              <div>
                <h1>Contact</h1>
                <h6>Get in touch</h6>
                <a  href="/contact" alt="contact"><button>Go</button></a>
              </div>
            </div>
          </div>
        </div>

      </main>
    );
  }
}

export default Home;

/*          // <div className="home-card">
//   <img src={Amsterdam} height="500" alt="resume" />
//   <h1>Resume</h1>
//   <h6>View current resume</h6>
//   <a href="/resume" alt="resume"><button>Go</button></a>
// </div>
//
// <div className="home-card">
//   <h1>Portfolio</h1>
//   <img src={Bridge} height="250" alt="portfolio" />
//   <h6>Explore top projects</h6>
//   <a href="/portfolio" alt="portfolio"><button>Go</button></a>
// </div>
//
// <div className="home-card">
//   <h1>Contact</h1>
//   <img src={Stanford} height="250" alt="contact" />
//   <h6>Get in touch</h6>
//   <a  href="/contact" alt="contact"><button>Go</button></a>
// </div>
*/
