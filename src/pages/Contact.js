import React, { Component } from 'react';
import Map from '../components/Map';
import Github from '../images/GitHub_Logo_White.png';
import LinkedIn from '../images/LinkedIn_Logo.png';

class Contact extends Component {
  render() {
    return (
      <div className="page">
        <h3>Contact Info</h3>
        <br/>
        <div className="container">
          <div className="location">
            <Map />
          </div>
          <div className="contact">
            <br/><br/>
            <p>Leila M. Elshamy</p>
            <p>PO Box 161425</p>
            <p>San Diego, CA 92105</p>
          </div>
          <br/>
        </div>
        <div className="bottom">
          <p>leila.m.elshamy@gmail.com</p>
          <a href="https://www.github.com/elemee3"><img src={Github} width="10%" alt="github" /></a>
          <a href="https://www.linkedin.com/in/leila-elshamy"><img src={LinkedIn} width="12%" alt="linkedin" /></a>
        </div>
      </div>
    );
  }
}

export default Contact;
