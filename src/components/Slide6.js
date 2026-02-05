import React, { useState } from "react";
import "../styles/slide6.css";
import { Slide } from "react-awesome-reveal";
import marcoTop from "../imagenes/marcotop.png";
import marcoDown from "../imagenes/marcodown.png";

function Slide6() {
  const [showMonto, setShowMonto] = useState(false);

  const handleShowMonto = () => {
    setShowMonto(!showMonto);
  };
  return (
    <div className="slide6-container">
      <img src={marcoTop} alt="marcoTop" className="marcoTop" />
      <Slide direction="left" triggerOnce>
      <h1 className="slide6-title">Tarjetas </h1>
      </Slide>
      <Slide direction="left" triggerOnce>
      <p className="slide6-subtitle">
        ¡Nos encantaría que nos acompañen en este día tan especial! Para
        asegurar su lugar, les pedimos adquirir la tarjeta de ingreso. Tendremos
        diferentes valores que se irán actualizando a medida que se acerque la
        fecha de la boda. Les recomendamos adquirir la suya con anticipación
        para acceder al valor actual.
      </p>
      {/*
      
      <button
        className="slide6-btn"
        
        onClick={() =>
          window.open(
            "https://wa.me/5493865233422?text=Hola%20Cami%20%26%20Will!%20Gracias%20por%20su%20invitaci%C3%B3n...",
            "_blank"
          )
        }
      >
        CONSULTAR
      </button>
            */}
             <button
        className="slide6-btn"
        onClick={handleShowMonto}
        
      >
        CONSULTAR
      </button>
      {showMonto && (
        <Slide direction="up" triggerOnce>
          <span className="monto-text">
            El valor de la tarjeta es de $45.000
            <span className="solo-mobile"><br /></span>
            por persona
          </span>
        </Slide>
      )}
      </Slide>
      <img src={marcoDown} alt="marcoDown" className="marcoDown" />
    </div>
  );
}

export default Slide6;
