import React from "react";
import { useState } from "react";
import "../../styles/rightNavigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
function DisplayCard(content) {
  const isDelete = () => {
    content.ondelete(content.id);
  };

  const [ellipsis, setEllipsis] = useState(true);
  return (
    <div className="post-transmitter">
      <div className="display-content">
        <img src={content.image} alt="profile"></img>
        <div className="username-content">
          <span>
            <div>
              <b>{content.name}</b>
            </div>
            <div className="role">{content.role}</div>
            <div className="time">{content.time}</div>
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
                onClick={isDelete}
              >
                Delete
              </div>
            </div>
          </div>
        </div>
      </div>
      {content.feed}
    </div>
  );
}

export default DisplayCard;
