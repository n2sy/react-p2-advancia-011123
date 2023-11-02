import React from "react";

function FilmItem(props) {
  return (
    <li>
      <p>{props.title}</p>
      <p> {props.year}</p>
    </li>
  );
}

export default FilmItem;
