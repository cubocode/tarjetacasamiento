import React from "react";
import Slide1 from "./Slide1";
import SlideAgenda from "./Slide1-2";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import Slide6 from "./Slide6";
import Slide7 from "./Slide7";
import Footer from "./Footer";
import { Slide } from "react-awesome-reveal";

function Home() {
  return (
    <section>
      <Slide1 />
      <Slide direction="up" triggerOnce>
        <SlideAgenda />
      </Slide>
      <Slide direction="up" triggerOnce>
        <Slide2 />
      </Slide>
      
      <Slide direction="up" triggerOnce>
        <Slide4 />
      </Slide>
      <Slide direction="up" triggerOnce>
        <Slide5 />
      </Slide>
      <Slide direction="up" triggerOnce>
        <Slide6 />
      </Slide>
      <Slide direction="up" triggerOnce>
        <Slide3 />
      </Slide>
      <Slide direction="up" triggerOnce>
        <Slide7 />
      </Slide>
      <Slide direction="up" triggerOnce>
        <Footer />
      </Slide>
    </section>
  );
}

export default Home;
