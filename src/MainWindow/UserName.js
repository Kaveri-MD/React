import React from "react";
import '../style.scss'
import hasini from  './hasini.jpg'

function UserName(){
    return(
        <div className="userName">
            <img src={hasini} alt="profile"></img>
            <span><b>Hasini</b></span>
        </div>
       
    )
}
export default UserName