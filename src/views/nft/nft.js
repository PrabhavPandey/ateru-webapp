import React from "react";
import "./nft.css";
import nft from "../nft/nft.jpeg";

function Nft() {
  return (
    <div>
      <div className="top-bar">
        <h1 className="nft-header">
          Thank you for your donation. You have pushed a farmer one step closer
          to his dream!
        </h1>
        <button className="nft-button" style={{ textDecoration: "none" }}>
          <a href={nft} download>
            Save as NFT
          </a>
        </button>
      </div>
      <div>
        <div>
          <h2 className="nftlogo">Ateru</h2>
        </div>
        <div>
          <h2 className="liked">♡ 87</h2>
        </div>
      </div>
      <div className="nft-container">
        <img src={nft} alt="NFT" />
      </div>
      <div className="split-2 left">
        <p className="operation">#Operation-Combine</p>
        <div className="loading-bar-border-2">
          <div className="loaded-2">
            <p className="raised-text">75 000 / 100 000 raised</p>
          </div>
        </div>
      </div>
      <div className="split-2 right">
        <p>
          8 XTZ <br /> Via you <br /> On Kukai Wallet
        </p>
      </div>
    </div>
  );
}

export default Nft;
