import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="bully-row">
        <img src={require("../img/pink-bully.png")} className="pink-bully" />
        <img src={require("../img/pink-bully.png")} className="pink-bully" />
        <img src={require("../img/pink-bully.png")} className="pink-bully" />
        <img src={require("../img/pink-bully.png")} className="pink-bully" />
        <img src={require("../img/pink-bully.png")} className="pink-bully" />
        <img src={require("../img/pink-bully.png")} className="pink-bully" />
      </div>
      <div className="contact-text">
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
        <div className="contact-text-div">
          <h3>kontakt</h3>
          Libertino GmbH
          <br />
          Am Weiher 11
          <br />
          20255 Hamburg
          <br />
          gerd.rindchen@libertino.eu
          <br />
          Tel. 040 – 40 17 10 80
          <br />
          Fax 040 -40 17 10 81
        </div>
        <div className="contact-text-div">
            <h3>datenschutz</h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;
