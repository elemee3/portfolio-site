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
      zoom: 14,
      address: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      address:  e.target.value
    })
  }

  handleSearch = (e) => {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json'
    const apiKey = 'APIKEY'
    e.preventDefault()
    console.log(this.state.address)
    fetch(url + '?address=' + this.state.address + '&key=' + apiKey)
    .then(resp => {
      let json = resp.json()
      return json
    })
    .then(json => {
      console.log(json.results[0].geometry.location) // <-- to get obj containing lat/lng
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

  render() {
    return (
      <div className="page">
        <div style={{ height: '75vh', width: '70%', margin: '0 auto' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCYw5lzQYX9SL8qlqqKZ5latLcBuRYfDyQ' }}
            center={this.state.center}
            defaultZoom={this.state.zoom}
          />
        </div>
        <br/>
        <form>
          <input type="text" name="address" placeholder="Enter Address" onChange={this.handleChange} />
          <input type="submit" value="Submit" onClick={this.handleSearch} />
        </form>
      </div>
    );
  }
}

export default Tester;
