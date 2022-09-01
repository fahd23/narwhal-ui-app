import React from "react";
import { PathLogo,MenuCampaigns,MenuContacts,MenuReports,MenuHelp,MenuTeams } from "./Shared";
import "./sidenav.css";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <PathLogo/>
      <MenuCampaigns/>
      <MenuTeams/>
      <MenuContacts/>
      <MenuReports/>
      <MenuHelp/>
    </div>
  );
};

export { Sidenav };
