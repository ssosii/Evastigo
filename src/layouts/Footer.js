import React from "react";
import LogoWhite from "../img/logo_white.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="footer">
      <p>
        Copyright 2020 - {t("Wszelkie Prawa Zastrzeżone")}
        <img src={LogoWhite} alt="logo-white" />
      </p>
    </div>
  );
};

export default Footer;
