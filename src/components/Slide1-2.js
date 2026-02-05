import React from "react";
import Countdown from "./Countdown";
import marcoTop from "../imagenes/marcotop.png";
import marcoDown from "../imagenes/marcodown.png";

function SlideAgenda() {
  return (
    
    <div>
        <img src={marcoTop} alt="marcoTop" className="marcoTop" />
        <Countdown />
        <img style={{marginTop: "-4%"}} src={marcoDown} alt="marcoDown" className="marcoDown" />
    </div>
  );
}

export default SlideAgenda;
