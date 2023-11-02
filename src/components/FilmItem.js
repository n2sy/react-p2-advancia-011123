import React from "react";
import styles from "./FilmItem.module.css";
import Card from "./Card";

function FilmItem(props) {
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
          <button>To Favourites</button>
        </div>
      </Card>
    </li>
  );
}

export default FilmItem;
