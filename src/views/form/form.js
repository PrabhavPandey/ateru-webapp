import React from "react";
import "./form.css";
import { Link } from "react-router-dom";
import payment from "../form/pay.svg";

function Form() {
  return (
    <div>
      <div className="header-form">
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
        <h1 className="form-heading">Your Details</h1>
        <div className=" split left">
          <form>
            <label>
              <input
                className="type-box name-field"
                type="text"
                name="name"
                placeholder="Enter your full name"
              />
              <br />
              <input
                className="type-box email-field"
                type="email"
                name="email"
                placeholder="Enter your email ID"
              />{" "}
              <br />
              <input
                className="type-box note-field"
                placeholder="Enter a custom note here (optional)"
              ></input>
              <p className="donate-text">I would like to donate:</p>
              <input className="amts amt-btn" value="10 XTZ " type="button" />
              <input className="amts amt-btn" value="8 XTZ" type="button" />
              <input className="amts amt-btn" value="6 XTZ" type="button" />
              <input className="amts amt-btn" value="5 XTZ" type="button" />
              <input className="amts amt-btn" value="2 XTZ" type="button" />
              <input
                className="amts cstm-amt"
                placeholder="Custom Amount"
                type="text"
              />
              {/*Can someone make these amounts so that theyre justified please*/}
            </label>
            <br />
            <Link to="/nft">
              <input className="submit-btn" type="submit" value="Submit" />
            </Link>

            {/*onClick submit: redirect user to claim nft page*/}
          </form>
        </div>
        <div className="split right">
          <img src={payment} height="360px" />
        </div>
      </div>
    </div>
  );
}

export default Form;
