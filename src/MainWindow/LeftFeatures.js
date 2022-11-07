import React from "react";
import '../style.scss'
import UserName from "./UserName";
import NavBar from "./NavBar";

function LeftFeatures(){
    return (
        <div className="leftFeatures">
            <UserName />
            <NavBar />
        </div>       
    )    
}

export default  LeftFeatures