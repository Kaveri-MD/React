import React from "react";
// import { useState } from "react";
import "../styles/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faAngleRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Header({ view }) {
  function iconClick() {
    view();
  }

  
  return (
    <div className="header">
      <div className="dashboard-header">
        <span className="arrow-icon">
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
        <span className="dash-board">Dashboard</span>
        <span>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <span>
          <b>Social Feed</b>
        </span>
      </div>
      <div className="bar-icon" onClick={iconClick}>
        <span>
          <FontAwesomeIcon icon={faBars} />
        </span>
      </div>
    </div>
  );
}

export default Header;
