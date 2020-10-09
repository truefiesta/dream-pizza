import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header-main">
      <div className="header-main-top">
        <a className="logo">Dream Pizza</a>
        <button className="nav-main-toggle" type="button">
          <span className="visually-hidden">Open menu</span>
        </button>
      </div>
      <nav className="nav-main hidden">
        <ul className="nav-main-list">
          <li className="nav-main-item">
            <a href="">Menu</a>
          </li>
          <li className="nav-main-item">
            <a href="">Pizza Creator</a>
          </li>
          <li className="nav-main-item">
            <a href="">Locations</a>
          </li>
        </ul>
      </nav>
      <ul className="nav-user-list">
        <li>
          <a className="nav-user-link" href="">
            <span className="nav-user-link-title">My Favorites</span>
            <div className="nav-icon-block nav-favorites-icon-block nav-favorites-empty">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 21.76"
                width="25"
                height="22"
              >
                <path
                  className="favorites-fill"
                  d="M22.71 7.3c0 3.45-8 9.5-10.21 12.16C10.28 16.8 2.29 10.75 2.29 7.3c0-4.45 5.77-7.3 10.21-2.47C16.94 0 22.71 2.85 22.71 7.3z"
                  fill="#b92f2f"
                />
                <path
                  className="nav-icon-fill-stroke"
                  d="M22.8 2.1A7.42 7.42 0 0017.58 0a8.61 8.61 0 00-5.08 1.75A8.61 8.61 0 007.42 0 7.43 7.43 0 002.2 2.1 7.17 7.17 0 000 7.3c0 3.19 3.26 6.48 7.86 10.79 1.19 1.12 2.32 2.17 2.88 2.84a2.29 2.29 0 001.76.83h.07a2.28 2.28 0 001.7-.82 39 39 0 012.88-2.85C21.75 13.78 25 10.49 25 7.3a7.17 7.17 0 00-2.2-5.2zm-5.22.19zM12.5 19.46C10.28 16.8 2.29 10.75 2.29 7.3a5.05 5.05 0 015.13-5 6.93 6.93 0 015.08 2.53 7 7 0 015.08-2.54 5.05 5.05 0 015.13 5c0 3.46-7.99 9.51-10.21 12.17z"
                />
              </svg>
              <span>0</span>
            </div>
          </a>
        </li>
        <li>
          <a className="nav-user-link" href="">
            <span className="nav-user-link-title">My Cart</span>
            <div className="nav-icon-block nav-cart-icon-block nav-cart-empty">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 21.34"
                width="25"
                height="22"
              >
                <path
                  className="cart-fill"
                  d="M7.77 13.71h14.31a1.11 1.11 0 001.06-.92L25 4.39a1.17 1.17 0 00-1.1-1.46H5.81z"
                  fill="#b92f2f"
                />
                <path
                  className="nav-icon-fill-stroke"
                  d="M22.55 5.13l-1.38 6.37H7.4L6.24 5.13h16.31m1.35-2.2H5.81l2 10.78h14.27a1.11 1.11 0 001.06-.92L25 4.39a1.17 1.17 0 00-1.1-1.46zM8.54 19.31a1.1 1.1 0 010-2.2l11.7-.11a1.1 1.1 0 110 2.2l-11.7.08z"
                />
                <path
                  className="nav-icon-fill-stroke"
                  d="M8.55 17.89A1.11 1.11 0 017.47 17L4.18 2.2H1.1a1.1 1.1 0 010-2.2h4a1.1 1.1 0 011.04.86l3.48 15.68a1.11 1.11 0 01-.83 1.32 1 1 0 01-.24.03z"
                />
                <circle
                  className="nav-icon-fill-stroke"
                  cx="8.54"
                  cy="18.21"
                  r="3.13"
                />
                <circle
                  className="nav-icon-fill-stroke"
                  cx="20.25"
                  cy="18.13"
                  r="3.13"
                />
              </svg>
              <span>0</span>
            </div>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
