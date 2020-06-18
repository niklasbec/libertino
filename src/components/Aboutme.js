import React from "react";

function Aboutme() {
  return (
    <div className="aboutme">
      <h1>über mich</h1>
      <div className="about-intro">
        <p>
          Eigentlich bin ich ein Hybrid: Bei mir mischen sich Elemente des
          Systemischen Coachings* mit klassischer Unternehmens- und
          Karriereberatung. Dank dieser ganzheitlichen, übergreifenden
          Herangehensweise kann ich Ihnen bei beruflichen und persönlichen
          Umbruchs- und Transformationsprozessen helfen, Ihr Stärken- Schwächen-
          Profil auszuloten und daraus Ihre Vorgehensweise abzuleiten. Besondere
          Kompetenzen finden Sie bei mir darüber hinaus im Wein- und
          Genussbereich. Stöbern Sie einfach ein wenig in meiner Vita–
          vielleicht finden Sie dort die eine oder andere Anregung, welche
          meiner Erfahrungen Sie sich zu Nutze machen können.
        </p>
        <img src={require("../img/vita.png")} width="150px" />
      </div>
      <div id="more-coaching">
        <a href="">
          mehr über den Ansatz des systemischen Coachings finden Sie hier
        </a>
      </div>
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
                  <div className="year-vita">1977</div> Start des
                  nebenberuflichen Weinhandles in Bremerhaven mit VW-Bus
                  "Traugott"
                  <br />
                  <br />
                </div>
                <div className="vita-point">
                  <div className="year-vita">1983</div> Beginn des
                  hauptberuflichen Weinhandels mit Eröffnung des ersten
                  Weinkontors in der Hamburger City Nord. Ausbau zum größten
                  konzernunabhängigen Weinfachhandel Deutschlands bis 2017
                  <br />
                  <br />
                </div>
                <div className="vita-point">
                  <div className="year-vita">2003</div> „Weinhändler des
                  Jahres“, gekürt von der führenden Fachzeitschrift „Die
                  Weinwirtschaft“
                  <br />
                  <br />
                </div>
                <div className="vita-point">
                  <div className="year-vita">2011/20</div> Zehn Mal in Folge
                  „Bester Weinfachhändler International“ beim größten
                  Weinwettbewerb der Welt, der Berliner Weintrophy
                  <br />
                  <br />
                </div>
                <div className="vita-point">
                  <div className="year-vita">2017</div> Veräußerung der
                  Mehrheitsanteile von Rindchen´s Weinkontor an die Schloss
                  Wachenheim AG, Trier
                  <br />
                  <br />
                </div>
                <div className="vita-point">
                  <div className="year-vita">2017/18</div> Geschäftsführer
                  Rindchen´s Weinkontor
                  <br />
                  <br />
                </div>
                <div className="vita-point">
                  <div className="year-vita year-vita-last">2019/20</div>Berater
                  für Rindchen´s Weinkontor
                </div>
              </div>
            </div>
          </div>
          <div className="aboutme-lower-right2">
            <h6 className="aboutme-bulletpoint-heading">Coaching</h6>
            <div className="vita">
              <div className="vita-point">
                <div className="year-vita">2018/20</div>Ausbildung zum
                systemischen Coach, zertifiziert vom Freiburg Institut und der
                Universität Salzburg. Seit Ende 2018 erfolgreiche Durchführung
                von Coachings.
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="aboutme-lower-right3">
            <h6 className="aboutme-bulletpoint-heading">
              Publizistische Tätigkeit
            </h6>
            <div className="vita">
              <div className="vita-point">
                <div className="year-vita">1965</div>
                Weihnachtsgedicht, Nordsee-Zeitung, Bremerhaven
                <br />
                <br />
              </div>
              <div className="vita-point">
                <div className="year-vita">1982/83</div>
                Redaktionelle Mitarbeit „Die Weinwirtschaft“, Neustadt /
                Weinstraße
                <br />
                <br />
              </div>
              <div className="vita-point">
                <div className="year-vita">Ab 1982</div>
                Veröffentlichungen u.a. in Hamburger Morgenpost, Hamburger
                Rundschau, stern, Tango, Hamburger Abendblatt, Hamburg Pur, Die
                Welt, Szene Hamburg, Beiträge für Radio Hamburg
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="aboutme-lower-right2">
            <h6 className="aboutme-bulletpoint-heading">
              Bibliographie – meine Bücher
            </h6>
            <div className="vita">
              <div className="vita-point">
                <div className="year-vita">2006</div>Alles Poletto! Graefe &amp;
                Unzer
                <br />
                <br />
              </div>
              <div className="vita-point">
                <div className="year-vita">2012</div>Crashkurs Wein Hallwag
                <br />
                <br />
              </div>
              <div className="vita-point">
                <div className="year-vita">2014</div>Crashkurs Essen und Wein
                Hallwag
                <br />
                <br />
              </div>
              <div className="vita-point">
                <div className="year-vita">2019</div>Genusshelden für Hamburg
                Junius
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="aboutme-lower-right3">
            <h6 className="aboutme-bulletpoint-heading">
              Künstlerische Tätigkeit
            </h6>
            <div className="vita">
              <div className="vita-point">
                <div className="year-vita">1975/77</div>
                Schnelldichter in Kampen / Sylt
                <br />
                <br />
              </div>
              <div className="vita-point">
                <div className="year-vita">ab 1978</div>sporadische Auftritte
                als Schnelldichter und Liedermacher in Hamburg und Bremerhaven –
                Danny´s Pan, Kellerbrettl am Großneumarkt, Villon, Alma Hoppes
                Lustspielhaus, Kellertheater
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="aboutme-lower-right2">
            <h6 className="aboutme-bulletpoint-heading">
              Politisches Engagement
            </h6>
            <div className="vita">
              <div className="vita-point">
                <div className="year-vita">1976/77</div>
                Schulsprecher Schulzentrum Bürgerpark Bremerhaven
                <br />
                <br />
              </div>
              <div className="vita-point">
                <div className="year-vita">1975/77</div>Vorsitzender
                Jungdemokraten Bremerhaven, Mitglied des Landesvorstandes
                <br />
                <br />
              </div>
              <div className="vita-point">
                <div className="year-vita">1976/77</div>Mitglied des Kreisvorstands FDP Bremerhaven
                <br />
                <br />
              </div>
              <div className="vita-point">
                <div className="year-vita">1982</div>Austritt aus der FDP
                <br />
                <br />
              </div>
              <div className="vita-point">
                <div className="year-vita">ab 1994</div>Mitglied der SPD
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
