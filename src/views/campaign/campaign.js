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
            src="https://pulitzercenter.org/sites/default/files/styles/1340x815_scale/public/06-16-14/india-hospitals-samisiva-2014-01.jpg?itok=CSMP5_qR"
          />
        </div>
        <div className="split right">
          <h1 className="campaign-heading">Please Help these families out</h1>
          <hr className="line" /> <br />
          <div className="progress-bar">
            <div className="loading-bar-border">
              <div className="loaded">75 000 / 100 000 raised</div>
            </div>
            <Link to="/form">
              <button className="donate-btn">Donate Now</button>
            </Link>
          </div>
          <p className="okok"></p>
          <br />
          <p className="okok">
            The novel coronavirus (COVID-19) pandemic is impacting everyone,
            some more drastically than others. For a number of families, it
            could mean making big changes in everyday routines due to financial
            hardships.
          </p>
          <br />
          <p className="okok">
            The condition due to the COVID-19 pandemic is getting worse by the
            day They have lost their livelihood and their savings. They are
            forced to live an empty stomach.These Families are in urgent need
            for aid.
          </p>
          <br />
          <p className="okok">
            Our unity had been our biggest strength, we are also aware that many
            hands would not raise as people are deeply affected due to the
            crisis caused by the COVID-19 pandemic. We are looking for support
            from those who are in a better financial condition and can help
            these neediest families.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Campaign;
