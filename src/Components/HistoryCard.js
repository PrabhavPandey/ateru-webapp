import React from "react";

function HistoryCard({ data }) {
  return (
    <div className="donation_card">
      <div className="donation_icon">
        <img src={data.icon} alt="asda" className="donation_icon_image"></img>
      </div>
      <div className="donation_details">
        <h4>{data.name}</h4>
        <p>{data.amount} Tezos</p>
        <p style={{ fontSize: "10px" }}>
          {new Date(data.timestamp).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default HistoryCard;

//We get the donation we have essentially the projectName, the timestamp and the amount
