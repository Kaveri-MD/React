import React from "react";
import {NavLink} from "react-router-dom"
import '../../styles/leftNavigation.scss'
// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faAngleDown,faAngleUp } from '@fortawesome/free-solid-svg-icons'


function List(props){
    const item=props.value;  
   
    return(
        <div className="display-list" >
            <NavLink  className={({ isActive }) => (isActive ? 'active' : 'default')} to={item.url}><span className="icons"><FontAwesomeIcon icon={item.icon} /></span><span className="text">{item.text}</span><span className="number">{item.number}</span></NavLink>
        </div>    

    )
}

export default List

