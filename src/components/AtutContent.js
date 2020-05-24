import React from "react";
import { useTranslation } from "react-i18next";

const AtutContent = ({text,style,img}) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={style}>
      <div className="atut-img">
        <img src={img} alt="" srcset="" />
      </div>
      <div className="atut-span">{t(text)}</div>
    </div>
  );
};

export default AtutContent;
