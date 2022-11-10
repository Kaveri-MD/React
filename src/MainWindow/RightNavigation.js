import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVideo,faCamera,faMicrophone} from '@fortawesome/free-solid-svg-icons'
import '../style/rightNavigation.scss'
import hasini from  './hasini.jpg'

function RightNavigation(props){
    localStorage.setItem("age","30")
    console.log(localStorage.getItem("age"));

const [condition, setCondition]=useState(false)
   function handleClick(){
    if(condition){
        props.setDisplay(false);
        setCondition(true)
    }
    else{
        props.setDisplay(false);
        setCondition(true)
    }
    
   }
    return (
        <div className="right-features" onClick={handleClick}>
            <div className="post-transmitter">
            <div className="profile">
                <img src={hasini} alt="profile"></img>
                <input type="text" placeholder="Share something here..."></input>
            </div>
            <div className="attachments">
                <div>
                    <FontAwesomeIcon icon={faVideo} />
                    <span>Any attachment</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCamera} />
                    <span>Capture it</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faMicrophone} />
                    <span>Say it</span>
                </div>
               

            </div>
            </div>
            <button>click</button>
        </div>
       
    )    
}

export default  RightNavigation