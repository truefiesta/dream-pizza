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
            <div className="nav-icon-block nav-favorites-icon-block">
              <svg
                className="favorites-icon"
                width="25"
                height="22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.469 2.047C19.75-.25 15.579.078 13 2.75c-2.625-2.672-6.797-3-9.516-.703-3.515 2.953-3 7.781-.468 10.36l8.203 8.39c.469.469 1.078.75 1.781.75.656 0 1.266-.281 1.734-.75l8.25-8.39c2.485-2.579 3-7.407-.515-10.36zm-1.125 8.765l-8.203 8.391c-.094.094-.188.094-.329 0l-8.203-8.39c-1.734-1.735-2.062-5.016.329-7.032 1.828-1.547 4.64-1.312 6.421.469L13 5.938l1.64-1.688c1.735-1.781 4.547-2.016 6.376-.516 2.39 2.063 2.062 5.344.328 7.079z"
                  fill="#44515D"
                />
              </svg>
              <span>1</span>
            </div>
          </a>
        </li>
        <li>
          <a className="nav-user-link" href="">
            <span className="nav-user-link-title">My Cart</span>
            <div className="nav-icon-block nav-cart-icon-block">
              <svg
                width="25"
                height="25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.733 15.516h12.751c.314 0 .59-.209.676-.51l2.813-9.844a.703.703 0 00-.676-.896H6.11l-.503-2.262a.703.703 0 00-.686-.55H.703a.703.703 0 100 1.405h3.655l2.538 11.424a2.113 2.113 0 00-1.271 1.936c0 1.163.946 2.11 2.11 2.11h12.75a.703.703 0 100-1.407H7.734a.704.704 0 01-.002-1.406zm14.632-9.844l-2.411 8.437H8.298L6.423 5.672h15.942z"
                  fill="#44515D"
                />
                <path
                  d="M7.031 20.438c0 1.163.947 2.109 2.11 2.109 1.163 0 2.109-.946 2.109-2.11 0-1.163-.946-2.109-2.11-2.109-1.162 0-2.109.946-2.109 2.11zm2.11-.704a.704.704 0 010 1.407.704.704 0 010-1.407zM16.969 20.438c0 1.163.946 2.109 2.11 2.109 1.162 0 2.108-.946 2.108-2.11 0-1.163-.946-2.109-2.109-2.109s-2.11.946-2.11 2.11zm2.11-.704a.704.704 0 11-.003 1.408.704.704 0 01.002-1.408z"
                  fill="#44515D"
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
