import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { MainContext } from "../../context/context";

function NavbarBtn({ text, link, className, route }) {
  const lightSwitch = useContext(MainContext)

  return (
    <div className={`borderWrapper ${lightSwitch.theme === 'light' && 'borderWrapper-light'}`}>
      <NavLink to={route} className={(className === 'navLink' && lightSwitch.theme === 'light') ? `${className} navLink-light` : className} href={link}>
        {text}
      </NavLink>
    </div>
  );
}

export default NavbarBtn;
