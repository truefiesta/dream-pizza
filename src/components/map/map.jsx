import React from "react";
import "./map.css";

const Map = () => {
  return (
    <section className="map">
      <div className="map-title-container">
        <h2 className="section-title">Our restaurants</h2>
      </div>
      <div className="map-content-wrapper">
        <div className="map-container">
          <article className="map-pin-info">
            <h3 className="map-pin-title">
              Dream Pizza - <span>Rose Bay</span>
            </h3>
            <p className="map-pin-text">
              516 Old South Head Rd, Rose Bay NSW 2029
            </p>
          </article>
        </div>
        <div className="map-details-container">
          <section className="map-pin-info">
            <h3 className="map-pin-title">
              Dream Pizza - <span>Rose Bay</span>
            </h3>
            <p className="map-pin-text">
              516 Old South Head Rd, Rose Bay NSW 2029
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Map;
