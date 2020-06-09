import React from 'react';

function Aboutme() {
  return (
    <div className="aboutme">
        <h1>über mich</h1>
        <div className="about-intro">
        <p>Eigentlich bin ich ein Hybrid: Bei mir mischen sich Elemente des Systemischen Coachings* mit klassischer Unternehmens- und Karriereberatung. Dank dieser ganzheitlichen, übergreifenden Herangehensweise kann ich Ihnen bei beruflichen und persönlichen Umbruchs- und Transformationsprozessen helfen, Ihr Stärken- Schwächen- Profil auszuloten und daraus Ihre Vorgehensweise abzuleiten. Besondere Kompetenzen finden Sie bei mir darüber hinaus im Wein- und Genussbereich. Stöbern Sie einfach ein wenig in meiner Vita– vielleicht finden Sie dort die eine oder andere Anregung, welche meiner Erfahrungen Sie sich zu Nutze machen können.</p>
        <img src={require("../img/vita.png")} width="150px"/>
        </div>
        <div id="more-coaching"><a href="">mehr über den Ansatz des systemischen Coachings finden Sie hier</a></div>
        <div className="aboutme-lower">
            <div className="aboutme-lower-left"></div>
            <div className="aboutme-lower-right">
                <div className="aboutme-lower-right1">
                <h6 className="aboutme-bulletpoint-heading">
                Unternehmerische Tätigkeit
                </h6>
                <div>
                    <div className="vita">
                    <div className="vita-point">
                    <div className="year-vita">1977</div> Start des nebenberuflichen Weinhandles in Bremerhaven mit VW-Bus "Traugott"<br /><br />
                    </div>
                    <div className="vita-point">
                    <div className="year-vita">1983</div> Beginn des hauptberuflichen Weinhandels mit Eröffnung des ersten Weinkontors in der Hamburger City Nord. Ausbau zum größten konzernunabhängigen Weinfachhandel Deutschlands bis 2017<br /><br />
                    </div>
                    <div className="vita-point">
                    <div className="year-vita">2003</div> „Weinhändler des Jahres“, gekürt von der führenden Fachzeitschrift „Die Weinwirtschaft“<br /><br />
                    </div>
                    <div className="vita-point">
                    <div className="year-vita">2011/20</div> Zehn Mal in Folge „Bester Weinfachhändler International“ beim größten Weinwettbewerb der Welt, der Berliner Weintrophy<br /><br />
                    </div>
                    <div className="vita-point">
                    <div className="year-vita">2017</div> Veräußerung der Mehrheitsanteile von Rindchen´s Weinkontor an die Schloss Wachenheim AG, Trier<br /><br />
                    </div>
                    <div className="vita-point">
                    <div className="year-vita">2017/18</div> Geschäftsführer Rindchen´s Weinkontor<br /><br />
                    </div>
                    <div className="vita-point">
                    <div className="year-vita year-vita-last">2019/20</div>Berater für Rindchen´s Weinkontor
                    </div>
                    </div>
                </div>
                </div>
                <div className="aboutme-lower-right2">
                <h6 className="aboutme-bulletpoint-heading">
                Coaching
                <div className="vita-point">
                    <div className="year-vita">2017/18</div> Geschäftsführer Rindchen´s Weinkontor<br /><br />
                    </div>
                </h6>
                </div>
                <div className="aboutme-lower-right3">
                <h6 className="aboutme-bulletpoint-heading">
                Publizistische Tätigkeit
                </h6>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Aboutme;