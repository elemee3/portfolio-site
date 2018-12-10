import React, { Component } from 'react';
import Github from '../GitHub-Logos/GitHub-Logos/GitHub_Logo_White.png';
import LinkedIn from '../linkedin_brand_package/Logo-2CRev-41px-TM.png';

class Contact extends Component {
  render() {
    return (
      <div className="page">
        <h3>Contact Info</h3>
        <div className="container">
          <div className="left">
            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="headshot filler" />
          </div>
          <div className="right">
            <p>Leila M. Elshamy</p>
            <p>PO Box 161425</p>
            <p>San Diego, CA 92105</p>
            <br/>
            <p>leila.m.elshamy@gmail.com</p>
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
