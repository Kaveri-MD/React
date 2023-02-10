import React from "react";
// import { useState } from "react";
import hasini from "../../images/hasini.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faCamera,
  faMicrophone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/rightNavigation.scss";
import TextareaAutosize from "react-textarea-autosize";

const UserInput=(props) => {
  
  

  return (
    <div className="user-input">
      <form className="profile">
        <img src={hasini} alt="profile"></img>
        <TextareaAutosize
          className="text-area"
          type="text"
          placeholder="Share something here..."
          minRows={1}
          maxRows={6}
          value={props.feed}
          onChange={(e) => {props.setFeed(e.target.value)}}
        />
        <FontAwesomeIcon
          className="send-icon"
          icon={faPaperPlane}
          onClick={props.addInput}
        />
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
    </div>
  );
}

export default UserInput;
