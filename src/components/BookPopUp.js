import React from "react"

function BookPopUp(props) {
    setTimeout(() => {console.log(props.info);}, 2000)
    
    return(
        <div className="popup">
            <div className="popup-inner">
                <img alt="x zum schließen" src={require("../img/close.png")} width="25px" className="close-modal" onClick={props.toggle}/>
                <div className="popup-text">
                <h2>{props.info.name}</h2>
                <br />
                    {props.info.text}
                </div>
            </div>
        </div>
 
)}

export default BookPopUp