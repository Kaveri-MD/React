import React, { useEffect } from "react";
import { useState } from "react";
import UserInput from "./UserInput";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import Hasini from "../../images/hasini.jpg"
import DisplayCard from "./DisplayCard";
import "../../styles/rightNavigation.scss";
import MessageCard from "./MessageCard";
import { StaticItem } from "../../lists/StaticItem";
function RightNavigation({setDisplay}){
    function handleClick() {
        setDisplay(false);
      }
    const [input, setInput] = useState(getData);
    console.log(input.length)
    const text=(feed)=>{
        setInput([
            {
                feedInput: feed,
                time: moment().format(),
                id: uuidv4(),
                name:"Hasini",
                image:Hasini,
                role:"Software Engineer",
            },
            ...input,
        ]);
    }

      //to store
  useEffect(() => {
    localStorage.setItem("input", JSON.stringify(input));
  }, [input]);
//   useEffect(() => {
//     const getFeed = JSON.parse(localStorage.getItem("input"));
//     setInput(getFeed);
//   }, []);  

    // to get from local storage
    function getData() {
        const data = localStorage.getItem("input");
        if (data) {
          return JSON.parse(data);
        } else {
          return [];
        }
      }

      const deleteFeed = (id) => {
        const filteredFeed = input.filter((element, index) => {
          return element.id !== id;
        });
        setInput(filteredFeed);
      };
    return(
        <div className="right-features" onClick={handleClick}>
            <UserInput feed={text}/>
            {input.map((content,index) => (
            <DisplayCard 
            image={content.image}
            name={content.name}
            role={content.role}
            time={moment(content.time).fromNow()}
            id={content.id}
            feed={content.feedInput}
            index={index}
            ondelete={deleteFeed}
            />
            ))}
            {StaticItem.map((item,index)=>(
              <MessageCard
              image={item.image}
              name={item.name}
              role={item.role}
              time={item.time}
              index={index}
              />

            ))}
            
        </div>
    );
}
export default RightNavigation