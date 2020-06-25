import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [toggled, setToggled] = useState(false);

  let nav = null;
  let btn = null;

  useEffect(() => {
    nav = document.getElementsByClassName("nav")[0];
    btn = document.getElementsByClassName("nav-tgl")[0];
  });

  const toggler = (e) => {
    if (!toggled) {
      setToggled(true);
      e.target.classList.add("toggled");
      nav.classList.add("active");
      setTimeout(() => {
        nav.classList.add("display-block");
      }, 500)
    } else {
      setToggled(false);
      e.target.classList.remove("toggled");
      nav.classList.remove("active", "display-block");
    }
  };

  return (
    <div className="header">
      <div className="header-left">
        <img alt="libertino genusswelten logo" src={require("../img/logo.png")} className="logo" />
        <img
          src={require("../img/light-green-bully.png")}
          className="logo-bully"
          alt="icon eines grünen vw bullies"
        />
      </div>
      <div className="header-right">
        <nav className="nav-desktop">
          <NavLink to="/">
            <li>home</li>
          </NavLink>
          <NavLink to="/angebot">
            <li>angebot</li>
          </NavLink>
          <NavLink to="/ueber-mich">
            <li>über mich</li>
          </NavLink>
          <NavLink to="/referenzen">
            <li>referenzen</li>
          </NavLink>
          <NavLink to="/kontakt">
            <li>kontakt</li>
          </NavLink>
        </nav>
        <button
          className="nav-tgl"
          type="button"
          aria-label="toggle menu"
          onClick={toggler}
        >
          <span aria-hidden="true"></span>
        </button>
        <nav className="nav">
          <ul>
            <NavLink to="/">
              <li onClick="toggler">home</li>
            </NavLink>
            <NavLink to="/angebot">
              <li onClick="toggler">angebot</li>
            </NavLink>
            <NavLink to="/ueber-mich">
              <li onClick="toggler">über mich</li>
            </NavLink>
            <NavLink to="/referenzen">
              <li onClick="toggler">referenzen</li>
            </NavLink>
            <NavLink to="/kontakt">
              <li onClick="toggler">kontakt</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
