import React from "react";

const MateItem = ({ data }) => {
  const { id, person, action, target, created_at } = data;
  const { name, avatar } = person;
  return (
    <div className="mate-item" key={id}>
      <img className="activity-avatar" src={avatar} alt="avatar-pic" />
      <div>
        <p>
          <span className="font-weight-600">{name}</span> {action}{" "}
          <span className="font-weight-600">{target}</span>
        </p>
        <p className="mate-item-time">{created_at}</p>
      </div>
    </div>
  );
};

export default MateItem;
