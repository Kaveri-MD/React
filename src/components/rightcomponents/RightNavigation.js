import React from "react";
import { useState, useEffect } from "react";
import UserInput from "./UserInput";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import Hasini from "../../images/hasini.jpg";
import DisplayCard from "./DisplayCard";
import "../../styles/rightNavigation.scss";
import { StaticItem } from "../../lists/StaticItem";

function RightNavigation({ setDisplay }) {
  // let text;
  function handleClick() {
    setDisplay(false);
  }
  const [feed, setFeed] = useState("");
  const [input, setInput] = useState(getInput());
  const [getData, setGetData] = useState([]);

  function addInput(e) {
    e.preventDefault();
    if (feed.trim() === "") {
      return;
    }
    const text = {
      feedInput: feed,
      time: moment().format(),
      id: uuidv4(),
      name: "Hasini",
      image: Hasini,
      role: "Software Engineer",
    };
    setInput([text, ...input]);

    setFeed("");
  }

  //to store
  useEffect(() => {
    localStorage.setItem("input", JSON.stringify(input));
    setGetData(JSON.parse(localStorage.getItem("input")));
  }, [input]);

  // to get stored inputs from local storage
  function getInput() {
    const data = localStorage.getItem("input");
    if (data) {
      return JSON.parse(data);
    } else {
      return StaticItem;
    }
  }

  const deleteFeed = (id) => {
    console.log(id);
    const filteredFeed = getData.filter((element, index) => {
      return element.id !== id;
    });
    setInput(filteredFeed);
  };
  return (
    <div className="right-features" onClick={handleClick}>
      <UserInput feed={feed} setFeed={setFeed} addInput={addInput} />
      {getData.map((content, index) => (
        <DisplayCard content={content} deleteFeed={deleteFeed} />
      ))}
    </div>
  );
}
export default RightNavigation;
