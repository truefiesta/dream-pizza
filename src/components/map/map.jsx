import React from "react";
import "./map.css";

const Map = () => {
  return (
    <section className="map">
      <h2 className="section-title">Our restaurants</h2>
      <div className="map-container">
        <article className="map-pin-info">
          <h3 className="map-pin-title">Dream Pizza - Rose Bay</h3>
          <p className="map-pin-text">
            516 Old South Head Rd, Rose Bay NSW 2029
          </p>
        </article>
      </div>
    </section>
  );
};

export default Map;
