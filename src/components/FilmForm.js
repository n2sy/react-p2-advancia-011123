import React, { useState } from "react";
import styles from "./FilmForm.module.css";
import Card from "./Card";

function FilmForm() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState();

  function titleHandler(e) {
    //console.log(e.target.value);
    setTitle(e.target.value);
  }
  function yearHandler(e) {
    setYear(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log({
      title: title,
      year: year,
    });
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label>title</label>
          <input type="text" onChange={titleHandler}></input>
          <label>Year</label>
          <input type="number" onChange={yearHandler}></input>
        </div>
        <div className={styles.actions}>
          <button type="submit">Add Film</button>
        </div>
      </form>
    </Card>
  );
}

export default FilmForm;
