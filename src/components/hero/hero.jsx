import React from "react";
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
                Or create your own pizza, that we will bake using
                <br />
                only the ingredients, you want in your dream pizza.
              </p>
              <p className="hero-text">
                It is a perfect time for a perfect pizza.
              </p>
              <ul className="hero-links-list">
                <li>
                  <a className="hero-link hero-link-main" href="">
                    Go to Menu
                    {/* Choose from the Menu */}
                  </a>
                </li>
                <li>
                  <a className="hero-link" href="">
                    Create my own Pizza
                  </a>
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
