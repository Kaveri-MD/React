import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
function MessageCard(props) {
  return (
    <div>
      <div className="post-transmitter">
        <div className="display-content">
          <img src={props.image} alt="profile"></img>
          <div className="username-content">
            <span>
              <div>
                <b>{props.name}</b>
              </div>
              <div className="role">{props.role}</div>
              <div className="time">{props.time}</div>
            </span>
            <div className="ellipsis">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
        </div>
        "Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off." 
      </div>
    </div>
  );
}
export default MessageCard;
