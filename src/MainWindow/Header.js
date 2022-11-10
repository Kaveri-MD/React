import React from "react";
import { useState } from "react";
import '../style/header.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons'
function Header(props) {
    const [condition, setCondition]=useState(true)
   function handleClick(){
    if(condition){
        props.setDisplay(true);
        setCondition(false)
    }else{
        props.setDisplay(false);
        setCondition(true)
    }
    
   }
    return (
        <div className="header">
            <div className="dashboard-header">
                <span className="arrow-icon"><FontAwesomeIcon icon={faArrowLeft} /></span>
                <span className="dash-board">Dashboard</span>
                <span><FontAwesomeIcon icon={faAngleRight} /></span>
                <span><b>Social Feed</b></span>
            </div>
            <div className="bar-icon" onClick={handleClick}>
                <span ><FontAwesomeIcon 
                        icon={faBars}
                    />
                        </span>
            </div>
        </div>
    )
}

export default Header