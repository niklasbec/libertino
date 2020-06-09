import React from 'react';

function Offer() {
  return (
    <div className="offer">
    <h1>angebot</h1>
    <div className="offer-intro">Ob Sie eine klassische Unternehmerberatung, eine ganzheitliche Begleitung, ein Coaching oder eine Mediation in Anspruch nehmen möchten: In allen diesen Bereichen können Ihnen branchenübergreifend meine Erfahrungen aus vierzig Jahren Unternehmensaufbau- und Leitung von Nutzen sein. Hinzu kommen spezifische Kompetenzen in den Bereichen</div>
    <div className="offer-points"><br /><br />Wein<br /><br />Handel<br /><br />Gastronomie<br /><br />Medien<br /><br />Genusswelten</div>
    <div className="offer-intro">Die Grenzen zwischen den Beratungsansätzen sind fließend – Sie selbst erarbeiten gemeinsam mit mir den Schwerpunkt der zu erbringenden Leistungen.</div>  
    <div className="green-boxes-container">
        <div className="greenbox">
            <h4 className="box-title">Klassische Unternehmer- und Unternehmungs- beratung</h4>
            <div className="box-text-container">
            <p className="box-text">Hier geht es darum, wirtschaftliche Problemstellungen unvoreingenommen von außen zu beleuchten, zu analysieren, daraus Handlungsempfehlungen abzuleiten und deren Umsetzung zu befördern und abzugleichen. Kreative, marketingorientierte Begleitung und zahlenbasierte Analyse gehen hier einher. </p>
            </div>
        </div>
        <div className="greenbox">
            <h4 className="box-title">Ganzheitliche Beratung</h4>
            <div className="box-text-container">
            <p className="box-text">Vermeintlich rationale wirtschaftliche und emotionale Aspekte sind untrennbar miteinander verwoben. Daher ist hier der Beratungsansatz ganzheitlich: Zuerst geht es um den oder die Menschen, die es zu begleiten gilt. Erst im zweiten Schritt werden, sofern noch notwendig, Zahlenaspekte wie in der klassischen Unternehmerberatung beleuchtet. </p>
            </div>
        </div>
        <div className="greenbox">
            <h4 className="box-title">Coaching</h4>
            <div className="box-text-container">
            <p className="box-text">Beim systemischen Coaching* ist es mir wichtig, dass Klienten ihre in sich vorhandenen Stärken erkennen und zielgerichtet einzusetzen lernen, ohne sich als Mensch zu verbiegen. Es gilt, die in jedem vorhandene Energie zu strukturieren und ins konstruktive und positive zu lenken.</p>
            </div>
        </div>
        <div className="greenbox">
            <h4 className="box-title">Mediation</h4>
            <div className="box-text-container">
            <p className="box-text">In meinem Leben ist es mir oft gelungen, Brücken zwischen Menschen zu bauen, indem ich mich in ihre Gefühlswelten hineinversetzt, daraus ihre eigentlichen Bedürfnisse abgeleitet und Verständnis für den jeweils anderen Standpunkt geweckt habe. Das baut Verhärtungen ab und schafft idealerweise auch dort gedanklich und emotional Raum für neue gemeinsame Gestaltung, wo vorher Gegensätze aufeinanderprallten.</p>
            </div>
        </div>
        <div className="greenbox">
            <h4 className="box-title">Journalistische Tätigkeit</h4>
            <div className="box-text-container">
            <p className="box-text">Seit 1981 schreibe oder moderiere ich für verschiedene Medien wie Tageszeitungen Magazine oder Radiosender überwiegend zu kulinarischen und bacchantischen Themen.</p>
            </div>
        </div>
        <div className="greenbox">
            <h4 className="box-title">Tourismus und Gastronomie</h4>
            <div className="box-text-container">
            <p className="box-text">Seit 1983 entwickle ich Wein- und Genussreisen, die den Teilnehmern in Verbindung mit kulinarischen Highlights einmalige Einblicke in die Welt des Weines ermöglichen, Menüfolgen, bei denen Wein und Essen perfekt aufeinander abgestimmt sind,  und thematisch vielschichtige Weinverkostungen. </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
