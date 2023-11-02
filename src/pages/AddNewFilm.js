import React from "react";
import FilmForm from "../components/FilmForm.js";
import FilmForm2 from "../components/FilmForm2.js";

function AddNewFilm(props) {
  return (
    <div>
      {/* <FilmForm></FilmForm> */}
      <FilmForm2 onAddform={props.onAdd}></FilmForm2>
    </div>
  );
}

export default AddNewFilm;
