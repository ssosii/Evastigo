import React from "react";
import "../styles/Footer.scss";
import LogoWhite from "../img/logo_white.svg";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Copyright 2020 <img src={LogoWhite} alt="logo-white" />
      </p>
    </div>
  );
};

export default Footer;
