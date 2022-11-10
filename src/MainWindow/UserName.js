import React from "react";
import '../style/leftNavigation.scss'
import hasini from  './hasini.jpg'

function UserName(){
    return(
        <div className="user-name">
            <img src={hasini} alt="profile"></img>
            <span><b>Hasini</b></span>
        </div>
       
    )
}
export default UserName