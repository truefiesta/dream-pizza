import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const.js";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <div className="hero-details-wrapper">
          <div className="hero-details">
            <div className="hero-details-content">
              <h2 className="hero-title">It’s pizza time!</h2>
              <p className="hero-text">
                Dive into our extensive menu to find the pizza,
                <br />
                that will be perfect for tonight.
              </p>
              <p className="hero-text">
                It is a perfect time for a perfect pizza.
              </p>
              <ul className="hero-links-list">
                <li>
                  <Link className="hero-link hero-link-main" to={AppRoute.MENU}>
                    Go to Menu
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
