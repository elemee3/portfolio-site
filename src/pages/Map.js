import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
        bootstrapURLKeys={{ key: 'API KEY' }}
        center={this.state.center}
        zoom={this.state.zoom}
      />
    );
  }
}

export default Map;
