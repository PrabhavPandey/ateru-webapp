import React, { useState } from "react";
import "../Header/Header.css";
import hero from "./hero.svg";
import bottom from "./content.svg";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
  return (
    <div>
      <div className="header-header">
        <div className="container">
          <h4 className="header_font">Charity is an Act of a Soft Heart.</h4>
          <p className="desc">
            Ever wanted to donate money to a cause or a person in need, but
            mistrust in the system got in the way? You're not alone. Donation
            sites for the longest time have just been money-leeching
            organisations. We're here to change that.
          </p>
          <Link to="#cardcontainer" smooth>
            <button className="cta-btn">Donate Here</button>
          </Link>
        </div>
        <div className="hero-img">
          <img src={hero} className="hero" />
        </div>
      </div>
      <img src={bottom} className="bottom" />
    </div>
  );
}

export default Header;
