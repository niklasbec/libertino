import React from 'react';

function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <div className="text-container">
        <h2>hereinspaziert!</h2>
        <h3>Systemische Beratung für alle, die ihre Passion mit Leidenschaft leben</h3>
        <p className="introduction">Moin Moin,
        Sie lieben das, was Sie tun und setzen sich kompromisslos dafür ein?<br />
        Manchmal wünschen Sie sich einen kreativen „Sparringspartner“, der von außen mit unbefangenem Blick auf Ihr Schaffen schaut?<br />
        Dann bin ich vielleicht der Richtige für Sie.<br /><br />
        In der Zeit, als ich unser früheres Unternehmen zum bedeutendsten konzernunabhängigen Weinfachhändler Deutschlands ausgebaut habe war es für mich häufig hilfreich
        -manchmal sogar überlebensnotwendig- wenn mir kompetente Menschen mit solidarischem Rat zur Seite standen. Als ausgebildeter systemischer Coach konnte ich selbst nun schon häufiger andere Menschen auf ihrem Weg mit Rat und Expertise unterstützen. <br /><br />
        Finden Sie das für sich ganz spannend?
        Dann melden Sie sich gerne. 
        </p>
        <div className="contact-button">
        <a href="mailto:someone@yoursite.com">jetzt<br/>kontaktieren</a>
        </div>
        <p className="anliegen">Ich freue mich auf Sie und ihr Anliegen!</p>
        </div>
      </div>
      <div className="home-right">
      </div>
    </div>
  );
}

export default Home;
