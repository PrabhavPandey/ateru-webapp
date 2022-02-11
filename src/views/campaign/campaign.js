import React from "react";
import "./campaign.css";
import { Link } from "react-router-dom";
function Campaign() {
  return (
    <div>
      <div className="header-campaign">
        <div className="nav_container">
          <div className="title">
            <h2>Ateru</h2>
          </div>
          <div className="nav_right">
            <button className="nav-items">Home</button>
            <a href="#">
              <button className="nav-items">Donate</button>
            </a>
            <a href="#">
              <button className="nav-items">How it Works</button>
            </a>
          </div>
        </div>
      </div>

      <div className="body">
        <div className="split left">
          <img
            className="campaign-img"
            src="https://images.viacbs.tech/uri/mgid:arc:content:nick.com:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7"
          />
        </div>
        <div className="split right">
          <h1 className="campaign-heading">pls give money</h1>
          <hr className="line" /> <br />
          <div className="progress-bar">
            <div className="loading-bar-border">
              <div className="loaded">75 000 / 100 000 raised</div>
            </div>
            <Link to="/form">
              <button className="donate-btn">Donate Now</button>
            </Link>
          </div>
          <p className="okok">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.s
          </p>
          <p className="okok">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.s
          </p>
          <p className="okok">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.s
          </p>
        </div>
      </div>
    </div>
  );
}

export default Campaign;
