import React from "react"
import "../styles/slide1.css"
import { Slide } from "react-awesome-reveal"

function Slide1(){
    return(
        <div className="slide1">
             {/* <img className="flores-top-left" src={flores} alt="flores" /> */}
            
            <Slide direction="up" triggerOnce>
            <div className="nos-casamos" >
                ¡NOS CASAMOS!
            </div>
            <h1>Maria & Juan</h1>
            <div className="save-the-date-row">
                <span className="save-the-date-line" style={{color:"transparent"}}>--------------------------------</span>
                <span className="save-the-date-text">SAVE THE DATE</span>
                <span className="save-the-date-line" style={{color:"transparent"}}>--------------------------------</span>
            </div>
            <div className="fecha">
               
               4 de Octubre de 2026

            </div>
            </Slide>
            <Slide direction="left" triggerOnce>
            

            {/* 
            <div className="anillos-container">
                <img className="anillos" src={anillos} alt="anillos" />
            </div>
           */}
            
            </Slide>
            {/* 
            <img className="flores-bottom-right" src={flores2} alt="flores" />
           */}
            
        </div>
    )
}

export default Slide1;