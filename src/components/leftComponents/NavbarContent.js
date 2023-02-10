import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import List from "./DisplayList";
function NavbarContent(props){
    const [state, setState] = useState(true);
    return(
        <div>
            <div>
        {(state ? props.listContent.slice(0, props.limit) : props.listContent).map((list) => {
          return <List value={list} />;
        })}
      </div>

      <div className="secondary-button">
        <button onClick={() => setState(!state)}>
          <b>{state ? "See more" : "See less"}</b>
          <FontAwesomeIcon icon={state ? faAngleDown : faAngleUp} />
        </button>
      </div>
        </div>
    )
}
export default NavbarContent