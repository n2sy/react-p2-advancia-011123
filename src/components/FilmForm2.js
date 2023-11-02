import React, { useRef } from "react";
import styles from "./FilmForm.module.css";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
function FilmForm2(props) {
  let titleRef = useRef();
  let yearRef = useRef();
  let imageRef = useRef();
  let descRef = useRef();
  let navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();

    // props.onAddform({
    //   id: Math.random().toString(),
    //   title: titleRef.current.value,
    //   year: yearRef.current.value,
    //   description: "......",
    //   image: "aaaaaa",
    // });
    fetch("https://filmstore-409b9-default-rtdb.firebaseio.com/Films.json", {
      method: "POST",
      body: JSON.stringify({
        title: titleRef.current.value,
        year: yearRef.current.value,
        image: imageRef.current.value,
        description: descRef.current.value,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Film succesfully added");
        navigate("/all", { replace: true });
      });
  }
  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label>title</label>
          <input type="text" ref={titleRef}></input>
          <label>Year</label>
          <input type="number" ref={yearRef}></input>
          <label>Image</label>
          <input type="url" ref={imageRef}></input>
          <label>Description</label>
          <textarea col="5" rows="4" ref={descRef}></textarea>
        </div>
        <div className={styles.actions}>
          <button type="submit">Add Film</button>
        </div>
      </form>
    </Card>
  );
}

export default FilmForm2;
