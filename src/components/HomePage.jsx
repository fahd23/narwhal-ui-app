import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import Sidenav from "./sidenav/Sidenav";
import Content from "./content/Content";

import React from "react";
import ActivityFeed from "./activityfeed/ActivityFeed";

const HomePage = () => {
  return (
    <div>
      <Sidenav />
      <Navbar />
      <hr />
      <Header />
      <div className="content-body-section">
        <Content />
        <ActivityFeed />
      </div>
    </div>
  );
};

export default HomePage;
