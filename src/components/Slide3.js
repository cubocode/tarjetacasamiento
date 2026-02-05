import React from "react";
import "../styles/slide3.css";
import { Slide } from "react-awesome-reveal";

function Slide3() {
  return (
    <div className="slide3-container">
      <Slide direction="left" triggerOnce>
      <div className="slide3-icon-top">
        {/* Aquí puedes poner una imagen decorativa si tienes, por ejemplo un SVG o PNG */}
      </div>
      <h1 className="slide3-title">¡Decinos que sí! </h1>
      <p className="slide3-subtitle">
        Confirmación de Asistencia. ¡Esperamos contar con tu presencia!
      </p>
      </Slide>
      <Slide direction="up" triggerOnce>
      <button
        className="slide3-btn"
        onClick={() =>
          window.open(
            "https://wa.me/5493863510790?text=Gracias%20por%20su%20invitaci%C3%B3n...",
            "_blank"
          )
        }
      >
        CONFIRMAR
      </button>
      </Slide>
    </div>
  );
}

export default Slide3;
