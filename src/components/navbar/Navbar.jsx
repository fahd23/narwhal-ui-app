import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar flex-jc-btwn">
      <div className="app-names flex-jc-btwn gap-2">
        <p className="heading cursor">NARWHAL</p>
        <p className="cursor">Teams</p>
      </div>
      <div className="flex-jc-btwn gap-2 flex-align-c cursor">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M4 11V1H20V11"
              stroke="#444444"
              stroke-width="2"
              stroke-linecap="square"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23 15V23H1V15H8V18H16V15H23Z"
              stroke="#444444"
              stroke-width="2"
              stroke-linecap="square"
            />
            <path
              d="M9 6H15"
              stroke="#444444"
              stroke-width="2"
              stroke-linecap="square"
            />
            <path
              d="M9 10H15"
              stroke="#444444"
              stroke-width="2"
              stroke-linecap="square"
            />
          </g>
        </svg>
        <p className="flex-align-c gap-1">
          <span>Hello John</span>{" "}
          <img className="cursor" src="../Assets/john.png" alt="profile-img" />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
