import React, { useEffect, useState } from "react";
import FilmItem from "../components/FilmItem";
import FilmList from "../components/FilmList";

function Allfilms(props) {
  const [tabFilms, setTabFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://filmstore-409b9-default-rtdb.firebaseio.com/Films.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
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

  if (isLoading) return <h4>Data is Loading...</h4>;
  else
    return (
      <div>
        <FilmList tabFilms={tabFilms}></FilmList>
      </div>
      // <div>
      //   <ul>{[<li>Film 1</li>, <li>Film 2</li>]}</ul>
      // </div>
    );
}

export default Allfilms;
