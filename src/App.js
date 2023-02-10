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

  // <Routes>
  //       <Route path="/month" element={<MainCalendar />} />

  //       <Route path="/" element={<DisplayTime />} />
  //     </Routes>
 
    return (
        <div>
        <Header />
        <div className='features'>
          <LeftNavigation />
          <Routes>
          <Route path="/" element={<RightNavigation />} />
          {
          ListItem.map((item)=>{
            return <Route path={item.url} element={<PageNavigation/>}/>
          })
          }
          {
          MenuItem.map((item)=>{
            return <Route path={item.url} element={<PageNavigation/>}/>
          })
          }
          </Routes>
        </div>
      </div>
    )
}
export default App;
