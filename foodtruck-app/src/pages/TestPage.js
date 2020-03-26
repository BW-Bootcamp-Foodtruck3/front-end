import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const TestPage = props => {
  return (
    <div style={{ margin: "0 auto", width: 800 }}>
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
        }}
      />
    </div>
  );
};

const mapStyles = {
  width: 800,
  height: 800
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCVeIhK0QtZ--Y6VF8XmnSrLfVzPqo4nZs"
})(TestPage);
