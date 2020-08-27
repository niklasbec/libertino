import React from 'react';

function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <div className="text-container">
        <h2>hereinspaziert!</h2>
        <h3>Systemische Beratung für alle, die ihre Passion mit Leidenschaft leben</h3>
        <p className="introduction">Moin Moin,<br /> <br />
        Sie lieben das, was Sie tun und setzen sich kompromisslos dafür ein?<br />
        Manchmal wünschen Sie sich einen kreativen „Sparringspartner“, der von außen mit unbefangenem Blick auf Ihr Schaffen schaut?<br />
        Dann bin ich vielleicht der Richtige für Sie.<br /><br />
        In der Zeit, als ich unser früheres Unternehmen zum bedeutendsten konzernunabhängigen Weinfachhändler Deutschlands ausgebaut habe war es für mich häufig hilfreich
        -manchmal sogar überlebensnotwendig- wenn mir kompetente Menschen mit solidarischem Rat zur Seite standen. Als ausgebildeter systemischer Coach konnte ich selbst nun schon häufiger andere Menschen auf ihrem Weg mit Rat und Expertise unterstützen. <br /><br />
        Finden Sie das für sich ganz spannend?
        Dann melden Sie sich gerne. 
        </p>
        <div className="contact-door">
        <img alt="icon einer tür" src={require("../img/comein.png")} className="door-img"/>
        <a href="mailto:gerd.rindchen@libertino.eu"><div className="contact-button">jetzt<br/>kontaktieren</div></a>
        </div>
        <p className="anliegen">Ich freue mich auf Sie und ihr Anliegen!</p>
        </div>
        <div className="signature">
        <img alt="die unterschrift von gerd rindchen" src={require("../img/signature.png")} width="200px"/>
        <p style={{marginTop: "-70px"}}>Gerd Rindchen</p>
        </div>
      </div>
      <div className="home-right">
        <img alt="bild von gerd rindchen" src={require("../img/portrait1.jpg")} className="portrait1" />
      </div>
    </div>
  );
}

export default Home;
