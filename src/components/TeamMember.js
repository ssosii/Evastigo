import React from "react";
import { useTranslation, Translation } from "react-i18next";

const TeamMemebr = ({ describe, img, position, name }) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="member">
        <img src={img} alt="zespół" />
        <p className="name-style">{name}</p>
        <p>{position}</p>
        <p className="describe-style">{describe}
        </p>
      </div>
    </>
  );
};

export default TeamMemebr;
