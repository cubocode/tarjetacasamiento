import React from "react";
import "../styles/footer.css";
import { Slide } from "react-awesome-reveal";

function Footer() {
  return (
    <div className="footer-container">
        <Slide direction="up" triggerOnce>
      <div className="footer-content" style={{justifyContent: 'flex-start', flex: 1}}>
        <p>Copyright © 2025</p>
      </div>
      <div className="footer-content" style={{justifyContent: 'flex-end', flex: 1, textAlign: 'right'}}>
        <p>Powered by <a href="https://www.instagram.com/cubo.code/" target="_blank" rel="noopener noreferrer" style={{color: 'black', textDecoration: 'none'}}>Cubo</a></p>
      </div>
      </Slide>
    </div>
  );
}

export default Footer;
