import React, { useContext } from "react";
import FavContext from "../store/FavouritesContext";
import FilmItem from "../components/FilmItem";
import FilmList from "../components/FilmList";

function Favorites() {
  const favCtx = useContext(FavContext);
  console.log(favCtx);

  console.log(favCtx.totalFav);
  if (!favCtx.totalFav) return <h3>You don't have favourites yet...</h3>;
  else return <FilmList tabFilms={favCtx.favourites}></FilmList>;
}

export default Favorites;
