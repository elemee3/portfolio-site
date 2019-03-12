import React, { Component } from 'react';
import Header from './Header';

class PigLatin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Enter Text Here',
      translated: ''
    };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit = (e) => {
    this.translate(this.state.inputValue);
    e.preventDefault();
  }

  translate = (text) => {
    // split text into words, handle each word one at a time, push handled word to new array
    let words = text.split(' ');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let translatedWords = words.map(word => {
      if (vowels.includes(word[0].toLowerCase())) {
        // if word begins with vowel (not y)
        return word + '-way';
      } else {
        vowels.push('y')
        let letters = word.split('');
        if (vowels.includes(letters[1].toLowerCase())) {
          // if word begins with one consonant
          if (letters[0].toLowerCase() === 'q' && letters[1].toLowerCase() === 'u') {
            // if word begins 'qu'
            let consonants = letters.shift().toLowerCase();
            consonants = consonants + letters.shift();
            return letters.join('') + '-' + consonants + 'ay';
          } else {
            let consonant = letters.shift().toLowerCase();
            return letters.join('') + '-' + consonant + 'ay';
          }
        } else {
          // if word begins with more than one consonant
          let letters = word.split('')
          let consonants = [];
          while (!vowels.includes(letters[0])) {
            if (letters[0] === 'q' && letters[1] === 'u') {
              consonants.push(letters.shift().toLowerCase());
              consonants.push(letters.shift().toLowerCase());
            } else {
              consonants.push(letters.shift().toLowerCase());
            }
          }
          return letters.join('') + '-' + consonants.join('') + 'ay'
        }
      }
    });
    // join array into a string, setState
    let translatedText = translatedWords.join(' ')
    this.setState({
      translated: translatedText
    })
  }

  render() {
    return (
      <div style={appStyles}>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <textarea style={textboxStyles} value={this.state.inputValue} onChange={this.handleChange} />
          <br/>
          <input type="submit" value="Translate" />
        </form>
        <div style={resultStyles}>
          <h5>Results:</h5>
          {this.state.translated}
        </div>
      </div>
    );
  }
}

const appStyles = {
  width: '80vw',
  maxWidth: '750px',
  minHeight: '550px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto'
};

const textboxStyles = {
  width: '350px',
  height: '100px'
};

const resultStyles = {
  height: '250px',
  width: '75vw',
  maxWidth: '750px',
  borderRadius: '50px',
  border: '2px dotted black',
  margin: '25px',
  textAlign: 'center',
  padding: '20px',
  fontSize: '20px'
};


export default PigLatin;
