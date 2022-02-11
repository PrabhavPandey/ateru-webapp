import React from "react";
import Card from "../Card/Card";
import "../CardContainer/CardContainer.css";

export default function CardContainer({
  projects,
  setActive,
  user,
  updateProjects,
}) {
  return (
    <>
      <div className="card_container container" id="cardcontainer">
        <h1 className="heading">Ongoing Campaigns</h1>
        <div className="card_wrapper">
          {projects.map((project) => (
            <Card
              key={project.id}
              data={project}
              setActive={setActive}
              user={user}
              updateProjects={updateProjects}
            ></Card>
          ))}
        </div>
      </div>
    </>
  );
}
