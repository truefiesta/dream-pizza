import React from "react";
import "./card-options.css";

const CardOptions = () => {
  return (
    <>
      <div className="card-options-wrapper">
        <div className="card-options-row">
          <p className="card-options-title">crust</p>
          <p className="card-options">
            <input
              id="thin"
              className="visually-hidden card-input"
              type="radio"
              name="crust"
              value="thin"
              checked
            />
            <label className="card-label" htmlFor="thin">
              thin
            </label>

            <input
              id="thick"
              className="visually-hidden card-input"
              type="radio"
              name="crust"
              value="thick"
            />
            <label className="card-label" htmlFor="thick">
              thick
            </label>
          </p>
        </div>
        <div className="card-options-row">
          <p className="card-options-title">size</p>
          <p className="card-options">
            <input
              id="small"
              className="visually-hidden card-input"
              type="radio"
              name="size"
              value="small"
            />
            <label className="card-label" htmlFor="small">
              18&quot;
            </label>

            <input
              id="medium"
              className="visually-hidden card-input"
              type="radio"
              name="size"
              value="medium"
            />
            <label className="card-label" htmlFor="medium">
              22&quot;
            </label>

            <input
              id="large"
              className="visually-hidden card-input"
              type="radio"
              name="size"
              value="large"
            />
            <label className="card-label" htmlFor="large">
              28&quot;
            </label>
          </p>
        </div>
      </div>
      <p className="card-options-chosen-note">Thin crust, 12 inches size</p>
    </>
  );
};

export default CardOptions;
