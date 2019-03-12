import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div style={headerStyles}>
        <h1>Pig Latin Generator</h1>
        <h5>Pig Latin is a pseudo language constructed from a simple set of rules</h5>
        <ol style={{textAlign: 'left'}}>
          <li><p>For words beginning with a vowel, add 'way' to the end.</p></li>
          <li><p>For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add 'ay'.</p></li>
          <li><p>If the first consonants include 'qu', move the 'u' along with the 'q'. Don't forget about words like 'squeal' where 'qu' doesn't come first!</p></li>
          <li><p>For words beginning with 'y', treat 'y' as a consonant.</p></li>
        </ol>
      </div>
    );
  }
}

const headerStyles = {
  width: '100%',
  textAlign: 'center'
};

export default Header;
