import React, { useState } from "react";
import Status from "../Status";
import "../Card/Card.css";
import charity from "../Card/flood.jpeg";

export default function Card({ data, setActive, user, updateProjects }) {
  const [pictureType, setpictureType] = useState("static");

  const style = {
    backgroundImage:
      pictureType === "static" ? `url(${data.picture})` : `url(${data.gif})`,
  };

  return (
    <>
      <div className="card">
        {/* <h3>Mission Your mom</h3> */}
        <div className="card_picture">
          <img src={charity} alt="farmer image" className="image"></img>
        </div>

        {data.status !== "none" && data.status !== "pending" && (
          <div className={data.status}>Your donation has</div>
        )}

        {data.status === "pending" && (
          <Status updateProjects={updateProjects} data={data} />
        )}

        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.
        </p>
        <p className="counter">
          <span className="donated">500</span>
          <span>/500</span>
        </p>
      </div>
    </>
  );
}
