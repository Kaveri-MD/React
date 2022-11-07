import React from "react";
import '../style.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { ListItem } from './ListItem'
import { MenuItem } from './ListItem'

function NavBar(props) {
    return (
        <div className="navBar">
            {/* {props.name}
            {props.number} */}
            <div>
                {ListItem.map((item) => {
                    return (

                        <a href={item.url}><span className="icons"><FontAwesomeIcon icon={item.icon} /></span><span className="text">{item.text}</span><span className="number">{item.number}</span></a>

                    )
                })}
            </div>
            <div className="buttons">
                <button><b>See more</b><FontAwesomeIcon icon={faAngleDown} /></button>
            </div>
            <div>
                {MenuItem.map((item) => {
                    return (

                        <a href={item.url}><span className="icons"><FontAwesomeIcon icon={item.icon} /></span><span className="text">{item.text}</span><span className="number">{item.number}</span></a>

                    )
                })}
            </div>
            <div className="buttons">
                <button><b>See more</b><FontAwesomeIcon icon={faAngleDown} /></button>
            </div>

        </div>


    )
}
export default NavBar