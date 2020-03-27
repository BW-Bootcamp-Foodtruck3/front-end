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
    console.log(selectedData)
  
  return (
    <div className="truck-page-container">
    <div className="truck-page-container__profile-container">
        <img className="profile-container__truck-image" src={selectedData.imageOfTruck}/>
        <h1 className="profile-container__truck-name"> {selectedData.truckName}</h1>
        <div className="profile-container__location-container">
          <h2 className="profile-info">Address: {selectedData.location}</h2>
          <h2 className="profile-info">Cusine: {selectedData.cusineType}</h2>
      </div>  
    </div>
    <div className="truck-page-container__truck-map"> {/* style={{ margin: "0 auto", width: 800 }} */}
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
    </div>
  );
};

// style="position: absolute; width: 30%; height: 50%;"
const mapStyles = {
  width: 647,
  height: 850
};

export default GoogleApiWrapper({
  apiKey: API_KEY
})(TestPage);
