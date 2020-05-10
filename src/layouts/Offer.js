import React from "react";
import Offerbox from "../components/Offerbox";
import "../styles/Offer.scss";

const Offer = () => {
  return (
    <>
      <div className="offer">
        <Offerbox text="Identyfikacja wizualna" img />
        <Offerbox text="Projektowanie stron www" />
        <Offerbox text="Projekty graficzne" />
        <Offerbox text="Drukarnia" />
        <Offerbox text="Sceneografia" />
        <Offerbox text="Materiały reklamowe" />
        <Offerbox text="Gadżety reklamowe" />
        <Offerbox text="Reklama zewnętrzna" />
      </div>
    </>
  );
};

export default Offer;
