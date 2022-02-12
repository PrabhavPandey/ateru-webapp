import React from "react";
import "./nft.css";
import nft from "../nft/nft.jpeg";

function Nft() {
  return (
    <div>
      <div className="top-bar">
        <h1 className="nft-header">
          Thank you for your donation, Aman. You have pushed a farmer one step
          closer to his dream!
          <br />
          <br />
          And here's your reward! Go ahead and download this NFT made for you
          and only you
        </h1>
        <button className="nft-button" style={{ textDecoration: "none" }}>
          <a href={nft} download>
            Save as NFT
          </a>
        </button>
      </div>
      <div>
        <p className="copyright">©Official NFT minted by ateru for Aman</p>
        <div>
          <h2 className="liked">♡ 87</h2>
        </div>
      </div>
      <div className="nft-container">
        <img src={nft} alt="NFT" className="nft-img" />
      </div>
      <div className="entire-content">
        <div className="split-2 left">
          <p className="operation">~Yathendar Singh Rana</p>
          {/* <div className="loading-bar-border-2">
            <div className="loaded-2">
              <p className="raised-text">75,000 / 1,00,000 raised</p>
            </div>
          </div> */}
        </div>
        <div className="split-2 right-nft">
          <p>
            8 XTZ <br /> Via you <br /> On Kukai Wallet
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nft;
