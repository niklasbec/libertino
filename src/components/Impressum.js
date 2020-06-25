import React from "react";

function Impressum() {
  return (
    <div className="impressum-component">
      <div className="bully-row">
        <img alt="icon eines pinken vw bullies" src={require("../img/pink-bully.png")} className="pink-bully" />
        <img alt="icon eines pinken vw bullies" src={require("../img/pink-bully.png")} className="pink-bully" />
        <img alt="icon eines pinken vw bullies" src={require("../img/pink-bully.png")} className="pink-bully" />
        <img alt="icon eines pinken vw bullies" src={require("../img/pink-bully.png")} className="pink-bully" />
        <img alt="icon eines pinken vw bullies" src={require("../img/pink-bully.png")} className="pink-bully" />
        <img alt="icon eines pinken vw bullies" src={require("../img/pink-bully.png")} className="pink-bully" />
      </div>
      <div className="contact-text contact-text-impressum">
        <div className="contact-text-div">
          <h3>impressum</h3>
          <p>
            Angaben gemäß § 5 TMG
            <br />
            Libertino GmbH
            <br />
            Am Weiher 11
            <br />
            20255 Hamburg
            <br />
            Handelsregister: HRB 154352 Registergericht: Hamburg
            <br />
            <strong>Vertreten durch:</strong>
            <br />
            Gerd Rindchen
            <br />
            <h5>Kontakt</h5>
            <br />
            Telefon: 040-40171080 Telefax: 040-40171081 E-Mail:
            gerd.rindchen@libertino.eu
            <br />
            <h5>Umsatzsteuer-ID</h5>
            <br />
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            DE321647694
            <br />
            <h5>Verbraucherstreitbeilegung/ Universalschlichtungsstelle</h5>
            <br />
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Impressum;
