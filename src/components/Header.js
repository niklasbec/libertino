import React from 'react';
import {NavLink} from "react-router-dom"

function Header() {
  return (
    <div className="header">
      <div className="header-left">
      <h1>libertino <br/>
      <span className="logo-lower">genusswelten</span>
      </h1>
      </div>
      <div className="header-right">
      <nav>
        <NavLink to="/"><li>home</li></NavLink>
        <NavLink to="/angebot"><li>angebot</li></NavLink>
        <NavLink to="/ueber-mich"><li>über mich</li></NavLink>
        <NavLink to="/referenzen"><li>referenzen</li></NavLink>
        <NavLink to="/kontakt"><li>kontakt</li></NavLink>
      </nav>
      </div>
    </div>
  );
}

export default Header;
