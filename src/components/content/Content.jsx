import TeamCard from "components/team-card/TeamCard";
import React from "react";
import { appData } from "db/appData";
import "./content.css";

const Content = () => {
  return (
    <div className="content-section">
      <div className="content-header flex-jc-btwn">
        <h3 className="content-header-title"> All Teams </h3>
        <p className="header-para"> Showing 65 out of 65 teams </p>
      </div>
      <div className="card-container">
        {appData.teams.map((item) => (
          <TeamCard data={item} />
        ))}
      </div>
    </div>
  );
};

export default Content;
