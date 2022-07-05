import React from "react";
import style from "./menu.css";
import Logo from "./image/logo_acme.jpeg";

import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <>
      <nav className="menu">
        <ul className="container">
          <img src={Logo} alt="logo clinica" />
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cadastrar">Cadastrar</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Menu;
