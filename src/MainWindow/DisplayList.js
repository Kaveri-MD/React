import React from "react";
import '../style/leftNavigation.scss'
// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faAngleDown,faAngleUp } from '@fortawesome/free-solid-svg-icons'


function List(props){
    const item=props.value;  
   
    return(
        <div>
            <a href={item.url}><span className="icons"><FontAwesomeIcon icon={item.icon} /></span><span className="text">{item.text}</span><span className="number">{item.number}</span></a>
        </div>    

    )
}

export default List

