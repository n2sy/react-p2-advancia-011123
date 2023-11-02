import React from "react";
import FilmItem from "../components/FilmItem";

function Allfilms(props) {
  return (
    <div>
      <ol>
        {props.list.map((element) => {
          return (
            <FilmItem title={element.title} year={element.year}></FilmItem>
          );
        })}
      </ol>
    </div>
    // <div>
    //   <ul>{[<li>Film 1</li>, <li>Film 2</li>]}</ul>
    // </div>
  );
}

export default Allfilms;
