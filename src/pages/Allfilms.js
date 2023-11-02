import React, { useEffect, useState } from "react";
import FilmItem from "../components/FilmItem";

function Allfilms(props) {
  const [tabFilms, setTabFilms] = useState([]);

  useEffect(() => {
    fetch("https://filmstore-409b9-default-rtdb.firebaseio.com/Films.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        for (const key in data) {
          setTabFilms((previous) => {
            console.log(previous);
            return [
              ...previous,
              {
                id: key,
                ...data[key],
              },
            ];
          });
        }
      });
  }, []);

  return (
    <div>
      <ol>
        {tabFilms.map((element) => {
          return <FilmItem key={element.id} film={element}></FilmItem>;
        })}
      </ol>
    </div>
    // <div>
    //   <ul>{[<li>Film 1</li>, <li>Film 2</li>]}</ul>
    // </div>
  );
}

export default Allfilms;
