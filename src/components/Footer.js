import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          (C) 2019 Leila M. Elshamy || This site is built with ReactJS
        </div>
        <div className="footer-mobile">
          <p>(C) 2019 Leila M. Elshamy</p>
          <p>This site is built with ReactJS</p> 
        </div>
      </div>
    );
  }
}

export default Footer;
