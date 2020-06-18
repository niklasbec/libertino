import React from "react"

function BookPopUp(props) {
    setTimeout(() => {console.log(props.info);}, 2000)
    
    return(
        <div className="popup">
            <div className="popup-inner">
                <img src="https://image.flaticon.com/icons/svg/271/271203.svg" width="25px" className="close-modal" onClick={props.toggle}/>
                <div className="popup-text">
                <h2>{props.info.name}</h2>
                <br />
                    {props.info.text}
                </div>
            </div>
        </div>
 
)}

export default BookPopUp