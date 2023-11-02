import React from "react";
import FilmItem from "../components/FilmItem";

function Allfilms(props) {
  return (
    <div>
      <ol>
        {props.list.map((element) => {
          return <FilmItem key={element.id} film={element}></FilmItem>;
        })}
      </ol>
    </div>
    // <div>
    //   <ul>{[<li>Film 1</li>, <li>Film 2</li>]}</ul>
    // </div>
  );
}

export default Allfilms;
