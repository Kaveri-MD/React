import React from "react";
import { useState } from "react";
import moment from "moment"
import "../../styles/rightNavigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faTrash } from "@fortawesome/free-solid-svg-icons";
function DisplayCard(props) {
  const content= props.content;
  const deleteFeed=props.deleteFeed;

  const [ellipsis, setEllipsis] = useState(true);
  return (
    <div className="user-input">
      <div className="display-content">
        <img src={content.image} alt="profile"></img>
        <div className="username-content">
          <span>
            <div>
              <b>{content.name}</b>
            </div>
            <div className="role">{content.role}</div>
            <div className="time">{moment(content.time).fromNow()}</div>
          </span>
          <div className="ellipsis">
            <div
              onClick={() => {
                setEllipsis(!ellipsis);
              }}
            >
              <FontAwesomeIcon icon={faEllipsis} />
              <div
                className={ellipsis ? "hide-options" : "view-options"}
                onClick={()=>deleteFeed(content.id)}
              >
                Delete <FontAwesomeIcon icon={faTrash} className="trash-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-feed">
      {content.feedInput}
      </div>
      
    </div>
  );
}

export default DisplayCard;
