import React from "react";

import Navbar from "components/navbar/Navbar";
import Header from "components/header/Header";
import Sidenav from "components/sidenav/Sidenav";
import Content from "components/content/Content";
import ActivityFeed from "components/activityfeed/ActivityFeed";

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
