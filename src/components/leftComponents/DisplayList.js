import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/leftNavigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function List(props) {
  const item = props.value;

  return (
    <div className="display-list">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        to={item.url}
      >
        <span className="icons">
          <FontAwesomeIcon icon={item.icon} />
        </span>
        <span className="text">{item.text}</span>
        <span className="number">{item.number}</span>
      </NavLink>
    </div>
  );
}

export default List;
