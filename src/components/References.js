import React, { useState } from "react";
import BookPopUp from "./BookPopUp";

function References() {
  const [popupToggle, setPopupToggle] = useState(false);
  const [bookInfo, setBookInfo] = useState({});

  const togglePopup = (e) => {
    if(e) {e.preventDefault();}
    setPopupToggle(!popupToggle);
  };

  const selectBook = (e) => {
    e.preventDefault()
    let name = e.target.getAttribute('name')
    if (name === "poletto") {
      setBookInfo({
        name: "Alles Poletto! Graefe und Unzer",
        text:
          "Cornelia Poletto gehört zu den führenden Köchinnen Deutschlands. Ihre Küche weist einen ausgeprägten mediterranen Stil auf, in den sie gekonnt heimische Produkte aus dem Norden der Republik einbindet. So werden Kabeljau oder Lamm gekonnt in eine auf südlichen Produkten basierende Sauce eingebunden, wo sie ihre Aromen hervorragend zur Geltung bringen. Dank Cornelia Polettos ausgeprägtem Geschmack und ihrer küchentechnischen Fertigkeiten werden ihre Kreationen zu kulinarischen Erlebnissen.",
      });
    } else if (name === "crashkurs1") {
      setBookInfo({
        name: "Crashkurs Wein Hallwag",
        text:
          "Wein in Wort und Bild. Mit den wichtigsten Infos, plakativ dargestellt und interessant und unterhaltsam erzählt. Keine langen Bleiwüsten, die mit theoretischen Abhandlungen über das begehrte Getränk ermüden, sondern eine erfrischende Präsentation für Weininteressierte. Und nicht nur Anfänger können hier noch etwas lernen: Kompetent wird im Leitfaden für den eigenen Geschmack erklärt, wie man seine, individuelle Geschmacksrichtung herausfinden kann, und wie man diese weiterentwickeln kann.",
      });
    } else if (name === "crashkurs2") {
      setBookInfo({
        name: "Crashkurs Essen und Wein Hallwag",
        text:
          "Grauburgunder zum Risotto? Oder einen Riesling zur Kokossuppe? Wer kennt sie nicht, diese Situation: Die Gäste stehen vor der Tür - und welcher Wein passt nun zu diesem Essen? Gerd Rindchen und Gotthard Scholz bieten dem Leser einen alltagstauglichen Wegweiser, um Essen und Wein ohne Angst vor Blamagen zu kombinieren.",
      });
    } else if (name === "genusshelden") {
      setBookInfo({
        name: "Genusshelden für Hamburg Junius",
        text:
          "In den \"Genusshelden für Hamburg\" porträtiert Gerd Rindchen 30 Protagonisten der Hamburger Genusskultur, allesamt harte Arbeiterinnen und Arbeiter im Dienst der guten Lebensart, die von ihrem Fach beseelt sind und für ihre Gäste und Kunden nur das Beste geben: Meisterköche und Gastronomen, Bio-Landwirte, die alte Gemüsesorten wiederbeleben, Bio- Vollkornbäcker, die ihr eigenes Vertragsgetreide anbauen lassen, türkische Familien, die Hamburg mit köstlichen Pasten versorgen, Gewürzmüller, Kaffeeröster, Teeimporteure, Kreativbrauer und Konditoren. Junius-Verlag in Kooperation mit dem Hamburger Abendblatt",
      });
    }
    togglePopup()
  };

  return (
    <div className="references">
      {popupToggle ? <BookPopUp toggle={togglePopup} info={bookInfo} /> : null}
      <div className="books-container">
        <div className="book-titles">
          <div className="title-container">
            <div className="vita-point book-hover" name="poletto" onClick={selectBook}>
              <div className="year-book">2006</div> Alles Polleto! Graefe und
              Unzer
              <br />
            </div>
            <div className="vita-point book-hover" name="crashkurs1" onClick={selectBook}>
              <div className="year-book">2012</div> Crashkurs Wein Hallwag
              <br />
            </div>
            <div className="vita-point book-hover" name="crashkurs2" onClick={selectBook}>
              <div className="year-book">2014</div> Crashkurs Essen und Wein
              Hallwag
              <br />
            </div>
            <div className="vita-point book-hover" name="genusshelden" onClick={selectBook}>
              <div className="year-book">2019</div> Genusshelden für Hamburg
              Junius
              <br />
            </div>
          </div>
        </div>
        <div className="book-img">
        <p className="book-img-title">meine bücher</p>
          <img src={require("../img/books.png")} width="100%" />
        </div>
        <div className="book-heading">
          <p>meine bücher</p>
        </div>
      </div>
      <div className="person-references">
        <div className="person-references-heading">
          <h3>referenzen</h3>
          <img src={require("../img/speech-bubble.png")} width="150px" />
        </div>
        <div className="references-text-container">
          <div className="single-reference">
            „Gerd hat mich in meiner beruflich sehr entscheidenden Lebensfrage
            gecoacht. Ich bin dabei in einem vorher undenkbaren Maße über meine
            persönlichen Grenzen hinausgewachsen.
            <br />
            <br />
            Lieber Gerd,
            <br />
            vielen Dank, dass du mir den Mut gegeben hast, endlich konsequent
            meinen Weg zu gehen. Du hast mich in meinen Fähigkeiten bestärkt, so
            dass ich in der Lage war, diese ins Scheinwerferlicht zu rücken. Du
            hast mir die Sicherheit vermittelt, dass ich es nicht nur schaffen
            kann, sondern auch gut in meinen Vorhaben sein werde.“
            <br />
            <br />
            Heena, Psychologin
          </div>
          <div className="single-reference">
            Gerd Rindchen kannte und schätzte ich schon länger aus der Zeit, als
            er noch als Weinhändler die Deutsche Weinszene mit geprägt hat. Dass
            er nun im Coaching Bereich tätig ist, war und ist für mich ein
            Glücksfall.
            <br />
            <br />
            Hier sind kaufmännisches Wissen, Einfühlungsvermögen und Erfahrungen
            geeint. Eine Kombination, die es im Coachingbereich selten gibt.
            Auch durch seine erlebten Höhen und Tiefen kann er sich wesentlich
            besser in Leute hineinversetzen als andere.
            <br />
            <br />
            Dies hat mir in jeglicher Hinsicht weitergeholfen. Insbesondere das
            Aufbrechen von verkrusteten Gedankengängen und das sich wieder
            „selbst motivieren“ sind für mich wesentliche Bestandteile geworden,
            die ich nicht missen möchte. Hinzu kommt noch, dass er als Coach
            nicht nur berät, sondern begleitet. Das hilft einem, dem neu
            eingeschlagenen Weg treu zu bleiben.
            <br />
            <br />
            Torge, Verlagskaufmann und Betriebswirt
          </div>
          <div className="single-reference">
            Gerd Rindchen ist ein Coaching-Rebell! Er ist schnell gelangweilt,
            hat sofort einen Ratschlag parat und ist eigentlich immer
            unpünktlich. Wer das annehmen kann, wird belohnt mit 100%iger
            Unvoreingenommenheit der eigenen Person gegenüber und mit
            ungewöhnlich klugem Perspektivwechsel. In herzenswarmem Vertrauen
            und auf Augenhöhe liefert Gerd, je nach Anliegen, strategisch,
            wirtschaftlich oder menschlich relevante Rückmeldungen - auch gern
            bei einem guten Glas Wein oder köstlichem Essen. Coachings bei Gerd
            sind immer ein Genuss!
            <br />
            <br />
            Friederike, Geschäftsführerin
            <img
              className="gerd-drawing"
              src={require("../img/gerd.png")}
              width="30%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default References;
