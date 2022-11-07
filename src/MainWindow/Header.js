import React from "react";
import '../style.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons'
function Header() {
    return (
        <div className="header">
            <div className="leftHeader">
                <span className="arrowIcon"><FontAwesomeIcon icon={faArrowLeft} /></span>
                <span className="dashBoard">Dashboard</span>
                <span><FontAwesomeIcon icon={faAngleRight} /></span>
                <span><b>Social Feed</b></span>
            </div>
            <div className="barIcon">
                <span ><FontAwesomeIcon icon={faBars} /></span>
            </div>
        </div>
    )
}

export default Header