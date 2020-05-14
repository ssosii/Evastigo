import React, { Component } from "react";
import Logo from "../img/logo.svg";

const MenuResponsive = ({ isMenuResponsive, handleMenuResponsive }) => {
  // console.log("xxx", isMenuResponsive);
  const onClickClose = (e) => {
    handleMenuResponsive(!isMenuResponsive);
    console.log("close");
  };
  return (
    <div
      className={`menu-responsive ${
        isMenuResponsive ? "menu-responsive--visible" : ""
      }`}
    >
      <div onClick={onClickClose} className="menu-responsive__close">
        <i className="fas fa-times"></i>
      </div>
      <div className="menu-responsive__logo">
        <img className="menu-responsive__logo-img" src={Logo} />
      </div>
      <ul className="menu-responsive__list">
        <li>
          <a onClick={onClickClose} href="#about">Kim jesteśmy?</a>
        </li>
        <li>
          <a onClick={onClickClose} href="#offer">Oferta</a>
        </li>
        <li>
          <a onClick={onClickClose} href="#portfolio">Realizacje</a>
        </li>
        <li>
          <a onClick={onClickClose} href="#contact">Kontakt</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuResponsive;
