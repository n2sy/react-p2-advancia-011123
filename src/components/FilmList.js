import React from "react";
import FilmItem from "./FilmItem";

function FilmList(props) {
  return (
    <ol>
      {props.tabFilms.map((element) => {
        return <FilmItem key={element.id} film={element}></FilmItem>;
      })}
    </ol>
  );
}

export default FilmList;
