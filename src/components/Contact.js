import React from "react";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <div className="bully-row">
        <img alt="icon eines pinken vw bullies" src={require("../img/pink-bully.png")} className="pink-bully" />
        <img alt="icon eines pinken vw bullies" src={require("../img/pink-bully.png")} className="pink-bully" />
        <img alt="icon eines pinken vw bullies" src={require("../img/pink-bully.png")} className="pink-bully" />
        <img alt="icon eines pinken vw bullies" src={require("../img/pink-bully.png")} className="pink-bully" />
        <img alt="icon eines pinken vw bullies" src={require("../img/pink-bully.png")} className="pink-bully" />
        <img alt="icon eines pinken vw bullies" src={require("../img/pink-bully.png")} className="pink-bully" />
      </div>
      <div className="contact-text">
        <div className="contact-text-div">
          <NavLink to="/impressum">
          <h3>impressum</h3>
          </NavLink>
        </div>
        <div className="contact-text-div">
          <h3>kontakt</h3>
          libertino gmbh
          <br />
          am weiher 11
          <br />
          20255 hamburg
          <br />
          gerd.rindchen@libertino.eu
          <br />
          T 040 – 40 17 10 80
          <br />
          F 040 -40 17 10 81
        </div>
        <div className="contact-text-div">
        <NavLink to="/datenschutz">
          <h3>datenschutz</h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Contact;
