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
        }}
      >
        <Map
          style={{}}
          google={this.props.google}
          initialCenter={{ lat: 55.642954, lng: 12.545465 }}
          zoom={11}
        >
          <Marker
            title={"Copenhagen Central Station"}
            name={"Central Station"}
            position={{ lat: 55.672388, lng: 12.563445 }}
          />
          <Marker
            title={"Copenhagen Airport"}
            name={"Airport"}
            position={{ lat: 55.629953, lng: 12.637484 }}
          />
          <Marker
            title={"Malmø Midtown"}
            name={"Malmø Midtown"}
            position={{ lat: 55.60851, lng: 12.999255 }}
          />
          <Marker
            title={"Kongens Lyngby City Hall"}
            name={"Kongens Lyngby City Hall"}
            position={{ lat: 55.7684, lng: 12.50407 }}
          />
          <Marker
            title={"Vanløse Mall"}
            name={"Vanløse Mall"}
            position={{ lat: 55.691541, lng: 12.480927 }}
          />
          <Marker
            title={"Frederiksberg Garden"}
            name={"Frederiksberg Garden"}
            position={{ lat: 55.675132, lng: 12.519569 }}
          />
          <Marker
            title={"Stockholm Central Station"}
            name={"Stockholm Central Station"}
            position={{ lat: 59.331215, lng: 18.058206 }}
          />
          <Marker
            title={"Helsinki Mall"}
            name={"Helsinki Mall"}
            position={{ lat: 60.170562, lng: 24.942227 }}
          />
          <Marker
            title={"London Marble Arch"}
            name={"London Marble Arch"}
            position={{ lat: 51.513212, lng: -0.160321 }}
          />
           <Marker
            title={"London Westminster"}
            name={"London Westminster"}
            position={{ lat: 51.497039, lng: -0.138996 }}
          />
          <Marker
            title={"Dublin Smithfield"}
            name={"Dublin Smithfield"}
            position={{ lat: 53.346629, lng: -6.280353 }}
          />
          <Marker
            title={"Billund Airport P1"}
            name={"Billund Airport P1"}
            position={{ lat: 55.747767, lng: 9.143861 }}
          />
          <Marker
            title={"Billund Resort LEGOLAND"}
            name={"Billund Resort LEGOLAND"}
            position={{ lat: 55.737208, lng: 9.124908 }}
          />
          <Marker
            title={"Bornholm Aakirkeby"}
            name={"Bornholm Aakirkeby"}
            position={{ lat: 55.075613, lng: 14.918001 }}
          />
          <Marker
            title={"Odense Midtown"}
            name={"Odense Midtown"}
            position={{ lat: 55.393893, lng: 10.383769 }}
          />
          <Marker
            title={"Flensburg Tarup"}
            name={"Flensburg Tarup"}
            position={{ lat: 54.782299, lng: 9.470083 }}
          />
          <Marker
            title={"Hamborg Überseeallee"}
            name={"Hamborg Überseeallee"}
            position={{ lat: 53.541509, lng: 9.997682 }}
          />
          <Marker
            title={"Hamborg Airport"}
            name={"Hamborg Airport"}
            position={{ lat: 53.634785, lng: 10.006212 }}
          />
          <Marker
            title={"Berlin Alexanderplatz"}
            name={"Berlin Alexanderplatz"}
            position={{ lat: 52.522959, lng: 13.414774 }}
          />
          <Marker
            title={"Oslo Central Station"}
            name={"Oslo Central Station"}
            position={{ lat: 59.910816, lng: 10.749853 }}
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
