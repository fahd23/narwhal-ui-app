import React from "react";
import "./activityfeed.css";
import MateItem from "./MateItem";
import { appData } from "db/appData";

const ActivityFeed = () => {
  return (
    <div className="activity-feed-container">
      <h4 className="activity-title ">Activity</h4>
      <hr />
      <div className="activity-body">
        {appData.activities.map((item) => (
          <MateItem data={item} />
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
