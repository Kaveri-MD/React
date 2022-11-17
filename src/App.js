import React, { useState } from "react";
// import logo from './logo.svg';

import "./styles/style.scss";
import Header from "./components/Header";
import LeftNavigation from "./components/leftComponents/LeftNavigation";
import RightNavigation from "./components/rightcomponents/RightNavigation";
import PageNavigation from "./components/rightcomponents/PageNavigation";
import {Routes,Route} from "react-router-dom"
// import { MenuItem } from '../../lists/ListItem'
import { ListItem, MenuItem } from '../src/lists/ListItem'
function App() {
  const [display, setDisplay] = useState(false);
  const change = () =>{
    setDisplay(!display)
  }
 
  return (
    <div>
      <Header change={change}/>
      <div className="features">
      <LeftNavigation display={display} />
        <Routes>
          <Route path='/' element={<RightNavigation setDisplay={setDisplay}/>}/>
          {ListItem.map((item,index)=>{return(<Route path={item.url} element={<PageNavigation />}/>)})}
          {MenuItem.map((item,index)=>{return(<Route path={item.url} element={<PageNavigation />}/>)})}

        </Routes>
        
        
      </div>
    </div>
  );
}

export default App;