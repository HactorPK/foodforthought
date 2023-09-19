import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo-and-links">
        <div className="logo-svg">
            Food For Thought!
        </div>
        <div className="nav-links">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/moreInfo">More Info</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </div>
      </div>

      <div className="profile">
        <p className="initials">HS</p>
      </div>
    </div>
  );
}

export default Header;
