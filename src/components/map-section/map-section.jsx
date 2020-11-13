import React, { useState } from "react";
import * as leaflet from "leaflet";
import { useSelector } from "react-redux";
import { selectLocations } from "../../reducer/locations/selectors.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./map-section.css";

const MapInitSettings = {
  lat: -33.865143,
  lng: 151.209900,
  zoom: 12
};

const iconInactive = leaflet.icon({
  iconUrl: `/img/map-pin.svg`,
  iconSize: [32, 32],
});

const iconActive = leaflet.icon({
  iconUrl: `/img/map-pin-active.svg`,
  iconSize: [32, 32],
});

const createMapPin = (location) => {
  return (
    <>
      <h3 className="map-pin-title">
        {location.name} - <span>{location.suberb}</span>
      </h3>
      <p className="map-pin-text">
        {location.address}
      </p>
    </>
  );
};

const MapSection = () => {
  const locations = useSelector(selectLocations);
  const [activeLocation, setActiveLocation] = useState("");

  const mapMarkup = locations.length === 0 ? <h3>Map is loading</h3> :
    <MapContainer
      center={[MapInitSettings.lat, MapInitSettings.lng]}
      zoom={MapInitSettings.zoom}
      style={{ width: "100%", height: "100%"}}
    >
      <TileLayer
        attribution={'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
        url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
      />
      {locations.map(location => {
        const isActive = location.id === activeLocation ? iconActive: iconInactive;
        return (
          <Marker key={location.id} position={[location.latitude, location.longitude]} icon={isActive}>
            <Popup>
              {createMapPin(location)}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>


  return (
    <section className="map" id="locations">
      <div className="map-title-container">
        <h2 className="section-title">Our restaurants</h2>
      </div>
      <div className="map-content-wrapper">
        <div className="map-container">
          {mapMarkup}
        </div>
        <div className="map-details-container">
          {locations && locations.map(location => {
            return (
              <section
                onMouseOver={() => setActiveLocation(location.id)}
                onMouseOut={() => setActiveLocation("")}
                key={location.id}
                className="map-pin-info"
              >
                {createMapPin(location)}
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
