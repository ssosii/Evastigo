import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import poland from "./../img/polska.png";
import bulgaria from "./../img/bulgaria.png";

const TranslationFlags = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="header__translation">
      <img src={poland} onClick={() => i18n.changeLanguage("pl")} />
      <img src={bulgaria} onClick={() => i18n.changeLanguage("bu")} />
    </div>
  );
};

export default TranslationFlags;
