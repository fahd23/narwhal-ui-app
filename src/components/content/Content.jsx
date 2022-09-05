import React from "react";
import TeamCard from "components/team-card/TeamCard";
import { useContentTeams } from "context/ContentContext";
import "./content.css";

const Content = () => {
  const { state } = useContentTeams();
  return (
    <div className="content-section">
      <div className="content-header flex-jc-btwn">
        <h3 className="content-header-title"> All Teams </h3>
        <p className="header-para"> Showing 65 out of 65 teams </p>
      </div>
      <div className="card-container">
        {state.teams.map((item, index) => (
          <TeamCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Content;
