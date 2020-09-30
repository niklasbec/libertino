import React from "react"

function CoachingPopUp(props) {

    return(
        <div className="popup">
            <div className="popup-inner">
                <img alt="x zum schließen" src={require("../img/close.png")} width="25px" className="close-modal" onClick={props.toggle}/>
                <div className="popup-text">
                <h2>{props.info.name}</h2>
                <br />
<p style={{textAlign: "left"}}>Der Begriff Coaching stammt vom englischen „Coach“ und bedeutet heute
Bus, früher Kutsche. Es handelt sich um einen fahrbaren Untersatz, dessen
Richtung und Geschwindigkeit vom Coachee, also vom Kutscher, bestimmt
wird. Die Kutsche ermöglicht ein schnelleres Vorankommen als
beispielsweise zu Fuß. Wir Coaches verstehen uns als eine Art „fahrbarer
Untersatz“ für die Themen unserer Klienten, wir sind die Möglichmacher für
die Klärung ihrer Anliegen und damit oftmals für die Realisierung ihrer
Wünsche. Dabei spielt es für uns als „full experience coach“ keine Rolle, ob
jemand mit einer privaten oder mit einer beruflichen Fragestellung kommt.
In der Praxis wird u.a. aus Marketinggründen häufig unterschieden
zwischen dem Business-Coach und dem Systemischen Coach, wie im
Folgenden beschrieben wird:<br /><br />
Business Coaching vs. Systemisches Coaching
Das Business Coaching betrachtet in erster Linie die Arbeitssituation auf
verschiedenen Ebenen. Hier wird an Themen gearbeitet wie Führung im
Allgemeinen, Rolle im Unternehmen, Gesprächsführung,
Konfliktmanagement, Veränderungsprozesse, Burnout-Prophylaxe und
Leitung von virtuellen Teams. Ein Business Coaching ist eine
prozessorientierte Beratungsform. Ziel dieser Form des Coachings ist
grundsätzlich, Menschen in ihrer beruflichen Entwicklung zu begleiten, sie
dabei zu unterstützen, ihre Stärken und Fähigkeiten zu erkennen und jene
zu nutzen, um nachhaltig erfolgreich zu sein und die berufliche Tätigkeit als
erfüllend zu erleben.<br /><br />
Unternehmen sind zahlenmäßig der wichtigste Auftraggeber von Business
Coaches. In Unternehmen und Organisationen steht dabei häufig die
Begleitung von Veränderungsprozessen oder die gezielte Förderung von
Mitarbeitern im Vordergrund. Dem Unternehmen geht es darum, personelle
Ressourcen möglichst sinnvoll und effektiv einzusetzen.
Die Definition für das systemische Coaching ist tatsächlich bis heute
umstritten. Bei Wikipedia findet man folgenden Eintrag: „Systemisches
Coaching bezeichnet allgemeine Beratungsgespräche bei alltäglichen
Fragen der persönlichen Lebensführung im beruflichen und privaten
Bereich. Es wird von einigen Kritikern als eine Wortschöpfung
verschiedener kommerzieller Anbieter und Verbände zu Werbezwecken
bezeichnet. Sie diene der Abgrenzung (Differenzierung) gegenüber
konkurrierenden Coaching-Anbietern. Validierte Studien über die
Wirksamkeit liegen nicht vor. Eine staatlich oder wissenschaftlich
anerkannte, fundierte Ausbildung existiert ebenfalls nicht, was allerdings im
Beratungsbereich insgesamt unüblich ist.“<br /><br />
Mein Verständnis für systemisches Coaching ist, dass der Klient die für ihn
beste Lösung bereits in sich trägt, und es gilt, diese Lösung über
entsprechende Fragestellungen zu entdecken und nutzbar zu machen. Der
systemische Ansatz im Coaching berücksichtigt die Herkunft, die
Lebenssituation, die Erfahrungen und das Umfeld des Klienten, also sein
System, offenbart Muster und Brüche, löst Blockaden im Denken und
integriert die Themen so, dass sich die Dinge nachhaltig
verändern/verbessern können. Die Klienten sind in der Lage, ihre
passgenauen Lösungen auch auf verwandte und zukünftige Situationen zu
übertragen und anzuwenden.
<br /><br />
Quelle: Corratio.de
</p>
                </div>
            </div>
        </div>
 
)}

export default CoachingPopUp