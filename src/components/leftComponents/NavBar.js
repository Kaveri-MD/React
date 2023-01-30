import React from "react";
import "../../styles/leftNavigation.scss";
import { MenuItem } from "../../lists/ListItem";
import { ListItem } from "../../lists/ListItem";
import NavbarContent from "./NavbarContent";

function NavBar() {

  return (
    <div>
      <NavbarContent listContent={ListItem} limit={7}/>
      <div className="recently-added">
        <b>Recently added:</b>
      </div>  
      <NavbarContent  listContent={MenuItem} limit={3}/>
    </div>
  );
}
export default NavBar;
