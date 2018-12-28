import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const API_KEY = process.env.REACT_APP_MAPS_API_KEY;

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {
        lat: 32.7096422,    //default downtown San Diego
        lng: -117.1579546
      },
      zoom: 11,
    }
  }

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        center={this.state.center}
        zoom={this.state.zoom}
      />
    );
  }
}

export default Map;
