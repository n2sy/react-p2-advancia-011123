import "./App.css";
import Allfilms from "./pages/Allfilms";
import AddNewFilm from "./pages/AddNewFilm";
import Favorites from "./pages/Favorites";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="all" element={<Allfilms></Allfilms>}></Route>
        <Route path="add/new" element={<AddNewFilm></AddNewFilm>}></Route>
        <Route path="fav" element={<Favorites></Favorites>}></Route>
      </Routes>
    </div>
  );
}

export default App;
