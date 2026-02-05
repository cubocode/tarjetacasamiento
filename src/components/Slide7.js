import React, { useState } from "react";
import "../styles/slide7.css";
import { Slide } from "react-awesome-reveal";
import marcoTop from "../imagenes/marcotop.png";
import marcoDown from "../imagenes/marcodown.png";

function Slide7() {
  const [showCBU, setShowCBU] = useState(false);

  const handleShowCBU = () => {
    setShowCBU(!showCBU);
  };

  return (
    <div className="slide7-container">
      <img src={marcoTop} alt="marcoTop" className="marcoTop" />
      <Slide direction="left" triggerOnce>
      <h1 className="slide7-title">Regalos </h1>
      </Slide>
      <Slide direction="left" triggerOnce>
      <p className="slide7-subtitle">
      Su presencia es el mejor regalo para nosotros. Si desean tener un detalle, pueden consultar nuestros datos bancarios haciendo clic abajo.
      </p>
      <button
        className="slide7-btn"
        onClick={handleShowCBU}
      >
        VER CBU
      </button>
      {showCBU && (
        <Slide direction="down" triggerOnce>
          <span className="cbu-text">pipo.canela</span>
        </Slide>
      )}
      </Slide>
      <img src={marcoDown} alt="marcoDown" className="marcoDown" /> 
    </div>
  );
}

export default Slide7;
