import React from "react";
import Logo from "../img/logo.svg";
import "../styles/Header.scss";

const Navigation = () => {
  return (
    <div className="nav">
      <div class="logo">
        <img id="logo-main" src={Logo} alt="" />
        <div class="menu">
          <ul>
            <li>
              <a href="#about">Kim jesteśmy?</a>{" "}
            </li>
            <li>
              <a href="#offer">Oferta</a>{" "}
            </li>
            <li>
              <a href="#portfolio">Realizacje</a>{" "}
            </li>
            <li>
              <a href="#contact">Kontakt</a>{" "}
            </li>
          </ul>
        </div>

        <div class="languages">
          <div class="lang">
            {" "}
            <a href="index.html">
              <img src="img/polska.png" alt="" srcset="" />
            </a>{" "}
          </div>
          <div class="lang">
            {" "}
            <img src="img/anglia.png" alt="" srcset="" />{" "}
          </div>
          <div class="lang">
            {" "}
            <a href="bg.html">
              <img src="img/bulgaria.png" alt="" srcset="" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
