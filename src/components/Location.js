import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class Location extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <div
        style={{
          position: "relative",
          height: "calc(100vh - 20px)"
        }}>
        <Map style={{}} google={this.props.google} initialCenter={{ lat: 55.642954, lng: 12.545465 }} zoom={11}>
          <Marker
            title={'Copenhagen Central Station'}
            name={'Central Station'}
            position={{ lat: 55.672388, lng: 12.563445 }}
          />
          <Marker
            title={'Copenhagen Airport'}
            name={'Airport'}
            position={{ lat: 55.629953, lng: 12.637484 }}
          />
          <Marker
            title={'Copenhagen Commercial Neighborhood'}
            name={'Business Area'}
            position={{ lat: 55.614174, lng: 12.472494 }}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyD3sF-lhvfrbKOQD8PG7Nd9SM4-D6txKx8",
  v: "3.30"
})(Location);
