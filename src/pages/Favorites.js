import React, { useContext } from "react";
import FavContext from "../store/FavouritesContext";
import FilmItem from "../components/FilmItem";

function Favorites() {
  const favCtx = useContext(FavContext);
  console.log(favCtx);

  console.log(favCtx.totalFav);
  if (!favCtx.totalFav) return <h3>You don't have favourites yet...</h3>;
  else
    return (
      <ol>
        {favCtx.favourites.map((element) => {
          return <FilmItem key={element.id} film={element}></FilmItem>;
        })}
      </ol>
    );
}

export default Favorites;
