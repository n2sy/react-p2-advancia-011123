import React, { useRef } from "react";
import styles from "./FilmForm.module.css";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
function FilmForm2(props) {
  let titleRef = useRef();
  let yearRef = useRef();
  let navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    console.log({
      title: titleRef.current.value,
      year: yearRef.current.value,
    });
    props.onAddform({
      id: Math.random().toString(),
      title: titleRef.current.value,
      year: yearRef.current.value,
      description: "......",
      image: "aaaaaa",
    });
    navigate("/all", { replace: true });
  }
  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label>title</label>
          <input type="text" ref={titleRef}></input>
          <label>Year</label>
          <input type="number" ref={yearRef}></input>
        </div>
        <div className={styles.actions}>
          <button type="submit">Add Film</button>
        </div>
      </form>
    </Card>
  );
}

export default FilmForm2;
