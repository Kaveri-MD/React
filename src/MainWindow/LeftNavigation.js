import React from "react";

import '../style/leftNavigation.scss'
import UserName from "./UserName";
import NavBar from "./NavBar";

function LeftNavigation({display}){
    
    return (
        <div className={display ? "left-navigation": "dissipate"}>
            {console.log(display)}
            <UserName />
            <NavBar />
        </div>       
    )    
}

export default  LeftNavigation