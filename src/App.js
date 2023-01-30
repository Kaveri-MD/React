import React, { useState } from "react";

import "./styles/commonstyle.scss";
import Header from "./components/Header";
import LeftNavigation from "./components/leftComponents/LeftNavigation";
import RightNavigation from "./components/rightcomponents/RightNavigation";
import PageNavigation from "./components/rightcomponents/PageNavigation";
import { Routes, Route } from "react-router-dom";
import { ListItem, MenuItem } from "../src/lists/ListItem";
import { Calendar,momentLocalizer } from "react-big-calendar";
function App() {
  const [display, setDisplay] = useState(false);
  const view = () => {
    setDisplay(!display);
  };
 
    return (
        <div>
        <Header />
        <div className='features'>
          <LeftNavigation />
          <RightNavigation />
        </div>
      </div>
    )
}
export default App;
