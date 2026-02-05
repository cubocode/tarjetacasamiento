import React from "react";
import "../styles/slide2.css";
import { Slide } from "react-awesome-reveal";

function Slide2() {
  return (
    <div className="slide2-container">
      <div className="slide2-header">
        <div className="slide2-icon-top">
          {/* Aquí puedes poner una imagen decorativa si tienes */}
        </div>
        <h1 className="slide2-title">¿Cuándo y dónde?</h1>
        <div className="slide2-subtitle-container">
          <p className="slide2-subtitle">
            Nuestro amor florece y ahora queremos compartir nuestra felicidad
            con ustedes. Con mucha alegría, les contamos los detalles de nuestro
            casamiento.
          </p>
        </div>
      </div>
      <div className="slide2-cards-row">
        {/*  <Slide direction="left" triggerOnce>
          <div className="slide2-card">
            <div className="slide2-card-icon">💍</div>
            <div className="slide2-card-title">Civil</div>
            <div className="slide2-card-desc">
              Fecha y lugar a confirmar
              <br />
              Horario a confirmar
            </div>
          </div>
        </Slide> */}
       
       
        <Slide direction="left" triggerOnce>
          <div className="slide2-card">
            <div className="slide2-card-icon">⛪</div>
            <div className="slide2-card-title">Ceremonia Religiosa</div>
            <div className="slide2-card-desc">
              Parroquia Nuestra Sra Del Valle
              <br />
              Tucumán
              <br />
              4 de Octubre de 2026 10:30 HS
            </div>
          </div>
        </Slide>
        <Slide direction="right" triggerOnce>
          <div className="slide2-card">
            <div className="slide2-card-icon">🥂</div>
            <div className="slide2-card-title">Recepción</div>
            <div className="slide2-card-desc">
              Salón tres
              <br />
              Tucumán
              <br />
              4 de Octubre de 2025 13:00 HS
            </div>
          </div>
        </Slide>
      </div>
      <Slide direction="up" triggerOnce>
        <div className="slide2-btn-row">
          <button
            className="slide2-btn"
            onClick={() =>
              window.open(
                "https://www.google.com/maps?q=-27.229566951752666,-65.3562456054208",
                "_blank"
              )
            }
          >
            <span
              className="slide2-btn-icon"
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginRight: 8,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#2d4669"
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
                />
              </svg>
            </span>
            CÓMO LLEGAR
          </button>
        </div>
      </Slide>
    </div>
  );
}

export default Slide2;
