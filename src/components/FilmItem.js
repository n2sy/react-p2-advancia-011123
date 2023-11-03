import React, { useContext, useState } from "react";
import styles from "./FilmItem.module.css";
import Card from "./Card";
import FavContext from "../store/FavouritesContext";

function FilmItem(props) {
  const favCtx = useContext(FavContext);

  function favouriteHandler() {
    if (!favCtx.isFavourite(props.film.id)) favCtx.addFavourite(props.film);
    else favCtx.removeFavourite(props.film);
  }

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.film.image}></img>
        </div>
        <div className={styles.content}>
          <h3> {props.film.title} </h3>
          <p> {props.film.year} </p>
          <p> {props.film.description} </p>
        </div>
        <div className={styles.actions}>
          <button onClick={favouriteHandler}>
            {favCtx.isFavourite(props.film.id)
              ? "Remove from Favourites"
              : "To Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default FilmItem;
