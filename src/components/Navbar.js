import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import FavContext from "../store/FavouritesContext";
import LoginContext from "../store/LoginContext";

function Navbar() {
  let activeStyle = { textDecoration: "overline" };
  let inactiveStyle = { textDecoration: "underline" };
  const favCtx = useContext(FavContext);
  const logCtx = useContext(LoginContext);
  const navigate = useNavigate();

  function logoutHandler() {
    logCtx.seDeconnecter();
    navigate("/");
  }
  if (logCtx.estConnecte)
    return (
      <header className={styles.header}>
        <div className={styles.logo}>Film Shop</div>
        <nav>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              {/* <Link to="/all"> All Films</Link> */}
              <NavLink to="/all">
                {({ isActive }) => {
                  return (
                    <span className={isActive ? "active" : "inactive"}>
                      All Films
                    </span>
                  );
                }}
              </NavLink>
            </li>
            <li>
              <Link to="/add/new">Add Film</Link>
            </li>
            <li>
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
                to="/fav"
              >
                Favourites
                <span class="badge bg-secondary">{favCtx.totalFav}</span>
              </NavLink>
            </li>
            <li>
              <a onClick={logoutHandler}>Logout</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  else
    return (
      <header className={styles.header}>
        <div className={styles.logo}>Film Shop</div>
        <nav>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Navbar;
