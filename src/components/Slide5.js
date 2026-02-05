import React from "react";
import "../styles/slide5.css";
import vestimenta from "../imagenes/vestimenta.png";
import { Slide } from "react-awesome-reveal";


function Slide5() {
    return(
        <div className="slide5-container">
            
            <Slide direction="left" triggerOnce>
            <h1 className="slide5-title">Hagamos juntos una fiesta épica</h1>
            </Slide>
            <Slide direction="left" triggerOnce>
            <img src={vestimenta} alt="vestimenta" className="slide5-vestimenta" />
            
            <h2 className="slide5-main-title">ELEGANTE</h2>
            <p className="slide5-dress-code">
                <strong>Damas:</strong> Evitar tonos de blanco.
            </p>
            <p className="slide5-dress-code">
                <strong>Caballeros:</strong> Traje.
            </p>
            <p className="slide5-note">
                *No olvides llevar tu calzado más cómodo para el momento del baile.
            </p>
            </Slide>
            
       </div>
    )
}

export default Slide5;