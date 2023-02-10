import React from "react";

import "../../styles/leftNavigation.scss";
import UserName from "./UserName";
import NavBar from "./NavBar";

function LeftNavigation({ display }) {
  return (
    <div className={display ? "responsive-view" : "left-navigation"}>
      <UserName />
      <NavBar />
    </div>
  );
}

export default LeftNavigation;
