import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <header>
      <div className={styles.logo}>Film Shop</div>
      <nav>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/all"> All Films</Link>
          </li>
          <li>
            <Link to="/add/new">Add Film</Link>
          </li>
          <li>
            <Link to="/fav">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
