import React, { useEffect, useState } from "react";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Geocode from "react-geocode";

const API_KEY = "AIzaSyCVeIhK0QtZ--Y6VF8XmnSrLfVzPqo4nZs";
Geocode.setApiKey(API_KEY);

const TestPage =  (props) => {
    const [ location, setLocation ] = useState({ lat: 0, lng: 0 })
    const { selectedData } = props;
    useEffect(() => {
        console.log(selectedData.location)
        Geocode.fromAddress(selectedData.location).then(
            response => {
                console.log(response.results[0].geometry.location)
                setLocation({ ...response.results[0].geometry.location })
            },
            error => {
                console.log(error)
            }
        )
    }, [])
  return (
    <div style={{ margin: "0 auto", width: 800 }}>
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        center={{
          lat: location.lat,
          lng: location.lng
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
  apiKey: API_KEY
})(TestPage);
