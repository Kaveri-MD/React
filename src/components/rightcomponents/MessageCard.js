import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
function MessageCard({item}) {
  return (
    <div>
      <div className="user-input">
        <div className="display-content">
          <img src={item.image} alt="profile"></img>
          <div className="username-content">
            <span>
              <div>
                <b>{item.name}</b>
              </div>
              <div className="role">{item.role}</div>
              <div className="time">{item.time}</div>
            </span>
            <div className="ellipsis">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
        </div>
       {item.feedInput}
      </div>
    </div>
  );
}
export default MessageCard;
