import "./App.css";
import Allfilms from "./pages/Allfilms";
import AddNewFilm from "./pages/AddNewFilm";
import Favorites from "./pages/Favorites";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import LoginContext from "./store/LoginContext";

function App() {
  const FAKE_LIST_FILMS = [
    {
      id: 1,
      title: "Heat",
      year: 1995,
      image:
        "https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/029/heat-photo-1029907.jpg",
      description:
        "La bande de Neil McCauley à laquelle est venu se greffer Waingro, une nouvelle recrue, attaque un fourgon blindé pour s'emparer d'une somme importante en obligations. Cependant, ce dernier tue froidement l'un des convoyeurs et Chris Shiherlis se retrouve obligé de terminer le travail.",
    },

    {
      id: 2,
      title: "Inception",
      year: 2010,
      image:
        "https://www.daily-movies.ch/wp-content/uploads/2014/11/daily-movies.ch_Inception.jpeg",
      description:
        "Dom Cobb est un voleur expérimenté dans l'art périlleux de `l'extraction' : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses...",
    },
  ];
  const LogCtx = useContext(LoginContext);

  function addFilm(nFilm) {
    FAKE_LIST_FILMS.push(nFilm);
    console.log(FAKE_LIST_FILMS);
  }

  if (LogCtx.estConnecte)
    return (
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="" element={<Home></Home>}></Route>
          <Route
            path="all"
            element={<Allfilms list={FAKE_LIST_FILMS}></Allfilms>}
          ></Route>
          <Route
            path="add/new"
            element={<AddNewFilm onAdd={addFilm}></AddNewFilm>}
          ></Route>
          <Route path="fav" element={<Favorites></Favorites>}></Route>
        </Routes>
      </div>
    );
  else
    return (
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="" element={<Home></Home>}></Route>
          <Route path="login" element={<Login onAdd={addFilm}></Login>}></Route>
        </Routes>
      </div>
    );
}

export default App;
