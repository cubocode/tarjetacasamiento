import React, { useEffect, useState } from "react";
import "../styles/countdown.css";

const targetDate = new Date("2026-10-04T00:00:00").getTime();

function getTimeLeft() {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return {
    days: days >= 0 ? days : 0,
    hours: hours >= 0 ? hours : 0,
    minutes: minutes >= 0 ? minutes : 0,
    seconds: seconds >= 0 ? seconds : 0,
  };
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-wrapper">
      <h1>
        Agendá la fecha
      </h1>
      <div className="fecha" style={{color: "#2d4669"}}>
               4 de octubre de 2026
            </div>
      <div className="countdown-container" style={{marginBottom: 50}}>
        {[
          { label: "Días", value: timeLeft.days },
          { label: "Horas", value: timeLeft.hours },
          { label: "Minutos", value: timeLeft.minutes },
          { label: "Segundos", value: timeLeft.seconds },
        ].map((item, idx) => (
          <div className="countdown-segment" key={item.label}>
            <div className="countdown-label">{item.label}</div>
            <div className="countdown-flip">
              <span className="countdown-number">{String(item.value).padStart(2, "0")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countdown; 