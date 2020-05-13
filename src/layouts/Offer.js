import React from "react";
import Offerbox from "../components/Offerbox";
import "../styles/Offer.scss";
import logo from "../img/logo_white2.svg";
import graphic from "../img/graphic_white.svg";
import code from "../img/code_white.svg";
import printer from "../img/printer_white.svg";
import events from "../img/events_white.svg";
import gadgets from "../img/pendrive_white.svg";
import bill from "../img/billboard_white.svg";
import material from "../img/material_white.svg";

const Offer = () => {
  return (
    <>
      <div className="offer">
        <div class="offer-box">
          <Offerbox id="1" text="Identyfikacja wizualna" img={logo} />
          <Offerbox id="2" text="Projektowanie stron www" img={code} />
          <Offerbox id="3" text="Projekty graficzne" img={graphic} />
          <Offerbox id="4" text="Drukarnia" img={printer} />
          <Offerbox id="5" text="Sceneografia" img={events} />
          <Offerbox id="6" text="Materiały reklamowe" img={material} />
          <Offerbox id="7" text="Gadżety reklamowe" img={gadgets} />
          <Offerbox id="8" text="Reklama zewnętrzna" img={bill} />
        </div>{" "}
      </div>
    </>
  );
};

export default Offer;
