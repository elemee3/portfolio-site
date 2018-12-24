import React, { Component } from 'react';
import Map from './Map';
import Github from '../images/GitHub_Logo_White.png';
import LinkedIn from '../images/LinkedIn_Logo.png';

class Contact extends Component {
  render() {
    return (
      <div className="page">
        <h3>Contact Info</h3>
        <div className="container">
          <div className="contact">
            <p>Leila M. Elshamy</p>
            <p>PO Box 161425</p>
            <p>San Diego, CA 92105</p>
            <br/>
            <p>leila.m.elshamy@gmail.com</p>
          </div>
          <br/>
          <div className="location">
            <Map />
          </div>
        </div>
        <div className="bottom">
          <a href="https://www.github.com/elemee3"><img src={Github} width="10%" alt="github" /></a>
          <a href="https://www.linkedin.com/in/leila-elshamy"><img src={LinkedIn} width="12%" alt="linkedin" /></a>
        </div>
      </div>
    );
  }
}

export default Contact;
