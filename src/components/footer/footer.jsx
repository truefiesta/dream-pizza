import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-main-top">
        <div className="footer-main-top-container">
          <section className="footer-details">
            <div className="footer-block">
              <h3 className="footer-block-title">About Us</h3>
              <ul className="footer-block-list">
                <li>
                  <a className="footer-block-link" href="">
                    Our story
                  </a>
                </li>
                <li>
                  <a className="footer-block-link" href="">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-block">
              <h3 className="footer-block-title">Delivery</h3>
              <ul className="footer-block-list">
                <li>
                  <a className="footer-block-link" href="">
                    Delivery areas
                  </a>
                </li>
                <li>
                  <a className="footer-block-link" href="">
                    Payment methods
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-block">
              <h3 className="footer-block-title">Rewards</h3>
              <ul className="footer-block-list">
                <li>
                  <a className="footer-block-link" href="">
                    Rewards program
                  </a>
                </li>
                <li>
                  <a className="footer-block-link" href="">
                    Current discounts
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="footer-contacts">
            <h3 className="footer-block-title">Contact Us</h3>
            <ul className="footer-block-list footer-contacts-list">
              <li>
                <a
                  className="footer-block-link email-link"
                  href="mailto:info@dreampizza.com"
                >
                  info@dreampizza.com
                </a>
              </li>
              <li>
                <a
                  className="footer-block-link phone-link"
                  href="tel:+620002000085"
                >
                  +62 0002000085
                </a>
              </li>
            </ul>
            <ul className="footer-social-list">
              <li className="footer-social-item">
                <a href="">
                  <span className="visually-hidden">
                    Visit our facebook page
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm2.72 5.28a12.39 12.39 0 00-1.64 0 1 1 0 00-.88 1v2.15h2.52s-.38 2.27-.38 2.4a18.64 18.64 0 01-2.14.05V17H7.42v-6.14H5.28V8.43h2.14V6.29A3.94 3.94 0 018.18 4a2.57 2.57 0 012-1h2.52z"
                      fill="#ffffff"
                    />
                  </svg>
                </a>
              </li>
              <li className="footer-social-item">
                <a href="">
                  <span className="visually-hidden">Read our twitters</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm5.5 8.2c-.13 3.09-.84 4.85-2.5 6.45-2.75 2.25-6.34 2.61-10 .87a7.18 7.18 0 004.28-1.25c-1.28-.27-2.54-.87-2.66-2 .5.15.89.14 1.13-.12A2.93 2.93 0 013.5 9.27a1.73 1.73 0 001.37.38 2.82 2.82 0 01-1-3.75A9.08 9.08 0 009.74 9v-.09c0-2.17 1-3.38 2.62-3.5a2.82 2.82 0 012.42.9 4.48 4.48 0 001.71-.78 2.85 2.85 0 01-1.18 1.69A5.54 5.54 0 0017 6.65a5.64 5.64 0 01-1.5 1.55z"
                      fill="#ffffff"
                    />
                  </svg>
                </a>
              </li>
              <li className="footer-social-item">
                <a href="">
                  <span className="visually-hidden">
                    Visit our instagram page
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    width="20"
                    height="20"
                  >
                    <circle
                      fill="#ffffff"
                      className="a"
                      cx="10"
                      cy="10"
                      r="10"
                    />
                    <path
                      fill="#B72828"
                      d="M13.36,3H6.64A3.79,3.79,0,0,0,2.85,6.79v6.72A3.79,3.79,0,0,0,6.64,17.3h6.72a3.79,3.79,0,0,0,3.79-3.79V6.79A3.79,3.79,0,0,0,13.36,3Zm2.33,10.51a2.34,2.34,0,0,1-2.33,2.33H6.64a2.34,2.34,0,0,1-2.33-2.33V6.79A2.34,2.34,0,0,1,6.64,4.46h6.72a2.34,2.34,0,0,1,2.33,2.33Z"
                    />
                    <path
                      fill="#B72828"
                      d="M10,6.3a3.85,3.85,0,1,0,3.85,3.85A3.85,3.85,0,0,0,10,6.3Zm0,6.24a2.39,2.39,0,1,1,2.39-2.39A2.39,2.39,0,0,1,10,12.54Z"
                    />
                    <circle fill="#B72828" cx="13.86" cy="6.35" r="0.88" />
                  </svg>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div className="footer-main-bottom">
        <div className="footer-main-bottom-container">
          <p>Copyright © 2020 Truefiesta.com. All tights reserved.</p>
          <p>
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
