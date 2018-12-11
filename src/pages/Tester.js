import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Tester extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {
        lat: 32.7096422,    //default downtown San Diego
        lng: -117.1579546
      },
      zoom: 11,
      address: '',
      coordinatesArr: [
        {
          lat: 32.8328112,
          lng: -117.2712717
        },
        {
          lat: 32.6400541,
          lng: -117.0841955
        },
        {
          lat: 32.7565162,
          lng: -117.1122965
        }
      ],
      newCoordinates: {}
    }
  }

  handleChange = (e) => {
    this.setState({
      address:  e.target.value
    })
  }

  handleSearch = (e) => {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json'
    const apiKey = 'API_KEY'
    e.preventDefault()
    fetch(url + '?address=' + this.state.address + '&key=' + apiKey)
    .then(resp => {
      let json = resp.json()
      return json
    })
    .then(json => {
      console.log('json response::', json.results[0].geometry.location) // <-- to get obj containing lat/lng
      this.setState({
        center: {
          lat: json.results[0].geometry.location.lat,
          lng: json.results[0].geometry.location.lng
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleAddPointer = (e) => {
    let { coordinatesArr } = this.state
    const url = 'https://maps.googleapis.com/maps/api/geocode/json'
    const apiKey = 'API_KEY'
    e.preventDefault()
    fetch(url + '?address=' + this.state.address + '&key=' + apiKey)
    .then(resp => {
      let json = resp.json()
      return json
    })
    .then(json => {
      console.log('json response::', json.results[0].geometry.location) // <-- to get obj containing lat/lng
      coordinatesArr.push({
        lat: json.results[0].geometry.location.lat,
        lng: json.results[0].geometry.location.lng
      })
      this.setState({
        coordinatesArr: coordinatesArr
      })
    })
    .catch(err => {
      console.log(err)
    })

  }

  determinePointer = () => {
    const pointerStyle = {
      position: 'absolute',
      width: 40,
      height: 40,
      left: -40 / 2,
      top: -40 / 2,
      border: '3px solid green',
      borderRadius: 40,
      backgroundColor: 'white',
      opacity: 0.6,
      textAlign: 'center',
      color: '#3f51b5',
      fontSize: 16,
      fontWeight: 'bold',
      padding: 4
    }
    return this.state.coordinatesArr.map(coordinates => {
      return (
        <div style={pointerStyle} lat={coordinates.lat} lng={coordinates.lng}>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="page">
        <div style={{ height: '75vh', width: '70%', margin: '0 auto' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'API_KEY' }}
            center={this.state.center}
            zoom={this.state.zoom}>
            {this.determinePointer()}

          </GoogleMapReact>
        </div>
        <br/>
        <form>
          <input type="text" name="address" placeholder="Enter Address" onChange={this.handleChange} />
          <input type="submit" value="Submit" onClick={this.handleSearch} />
          <input type="submit" value="Add Pointer" onClick={this.handleAddPointer} />
        </form>
      </div>
    );
  }
}

export default Tester;
