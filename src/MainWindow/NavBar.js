import React from "react";
import '../style/leftNavigation.scss'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown,faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { MenuItem } from './ListItem'
import { ListItem } from './ListItem'
import List from "./DisplayList";


function NavBar() {
    const[state,setState]=useState(true)
    const [button, setButton]=useState(true)
    
    return (
        <div className="nav-bar">
            <div>
                {(state?ListItem.slice(0,7):ListItem).map((list) => {
                    return (
                        <List value={list}/>
                    )
                })}
            </div>
            
            <div className="primary-button">
                <button onClick={()=>setState(!state)}>
                    <b>{state?'See more':'See less'}</b><FontAwesomeIcon icon={state?faAngleDown:faAngleUp} />
                </button>
            </div>
            <div className="updates"><b>Recently added:</b></div>
            <div>
                {(button?MenuItem.slice(0,3):MenuItem).map((list) => {
                    return (
                        <List value={list}/>
                    )
                })}
            </div>

            <div className="primary-button">
                <button onClick={()=>setButton(!button)}>
                    <b>{button?'See more':'See less'}</b><FontAwesomeIcon icon={button?faAngleDown:faAngleUp} />
                </button>
            </div>

        </div>


    )
}
export default NavBar