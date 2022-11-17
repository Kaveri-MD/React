import React from "react";
import { useState } from "react";
import hasini from "../../images/hasini.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faCamera,
  faMicrophone,
  faPaperPlane
} 
from "@fortawesome/free-solid-svg-icons";
import "../../styles/rightNavigation.scss";
import TextareaAutosize from 'react-textarea-autosize';
function UserInput(props){
    const[feed,setFeed] = useState("");
    function addInput(e) {
        e.preventDefault();
        if (feed.trim() === "") {
          return;
        }

        props.feed(feed);
        setFeed("");
      }
     
    return(
        <div className="post-transmitter">
        <form className="profile">
          <img src={hasini} alt="profile"></img>
          <TextareaAutosize
            className="text-area"
            type="text"
            placeholder="Share something here..."
            minRows={1}
            maxRows={6}
            value={feed}
            onChange={(e) => setFeed(e.target.value)}
          />
          <FontAwesomeIcon icon={faPaperPlane} onClick={addInput} />
        </form>

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
        {/* <form action="/action_page.php">
          <FontAwesomeIcon icon={faVideo} />
          <label for="myfile">Any attachment</label>
          <input
            type="file"
            id="myfile"
            name="myfile"
            style={{ visibility: "hidden" }}
            multiple
          ></input>
        </form> */}
        {/* <div>
          <camera />
        </div> */}
        {/* <input accept=”image/*” id=”icon-button-file” type=”file” capture=”environment”/> */}
      </div>
    )
}

export default UserInput