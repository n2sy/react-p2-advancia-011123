import React, { useContext } from "react";
import FavContext from "../store/FavouritesContext";
import FilmItem from "../components/FilmItem";

function Favorites() {
  const favCtx = useContext(FavContext);
  console.log(favCtx);

  return (
    <ol>
      {favCtx.favourites.map((element) => {
        return <FilmItem film={element}></FilmItem>;
      })}
    </ol>
  );
}

export default Favorites;
