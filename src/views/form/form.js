import React from "react";
import "./form.css";

function form() {
  return (
    <div>
        <div className="header">
            <div className="nav_container">
                <div className="title">
                    <h2>Ateru</h2>
                </div>
                <div className="nav_right">
                    <button className="nav-items">Home</button>
                    <a href="#"><button className="nav-items">Donate</button></a>
                    <a href="#"><button className="nav-items">How it Works</button></a>
                </div>
            </div>
        </div>
        <div className="body">
            <h1 className="form-heading">Your Details</h1>
            <div className=" split left">
                <form>
                    <label>
                        <input className="type-box name-field" type="text" name="name" placeholder="full name"/><br />
                        <input className="type-box email-field" type="email" name="email" placeholder="email id"/> <br />
                        <textarea className="type-box note-field" placeholder="note"></textarea>
                        <p>I would like to donate:</p>
                        <input className="amts amt-btn" value="Rs. 10000" type="button"  />
                        <input className="amts amt-btn" value="Rs. 5000" type="button"  />
                        <input className="amts amt-btn" value="Rs. 2500" type="button"  />
                        <input className="amts amt-btn" value="Rs. 1500" type="button" />
                        <input className="amts amt-btn" value="Rs. 500" type="button"  />
                        <input className="amts cstm-amt" placeholder="Custom Amount" type="text" />
                        {/*Can someone make these amounts so that theyre justified please*/}
                    </label>
                    <br />
                    <input className="submit-btn" type="submit" value="Submit" />      
                    {/*onClick submit: redirect user to claim nft page*/}
                </form>
            </div>
            <div className="split right">
                <img src="https://www.nme.com/wp-content/uploads/2021/07/RickAstley2021-696x442.jpg" />
            </div>
        </div>
    </div>
  );
}

export default form;
