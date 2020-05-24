import React from "react";
import TeamMember from "../components/TeamMember";

import lukasz from "../img/lukasz.png";
import sebastian from "../img/sebastian.png";
import maciej from "../img/maciej.png";
import teamimg from "../img/team.svg";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="team">
      <div className="team-container">
        <img className="team-img" src={teamimg} alt="team-img-img" />
        <TeamMember
          img={maciej}
          name="Maciej Figlarz"
          position="Full Stack Developer"
          describe={t("Silnik naszego zespołu. Dokładniej twórca silników. Odpowiedzialny za to, żeby klient mógł łatwo zarządzać swoją stroną. Pasjonat Jury Krakowsko-Częstochowskiej, gdzie spędza większość weekendów.")}
        />
        <TeamMember
          img={lukasz}
          name="Łukasz Sosnecki"
          position="Web Developer/Designer"
          describe={t('Odpowiedzialny za to, żeby strona nie była kolejnym nudnym Wordpressem. Podobnie jak Maciek jest pasjonatem Jury Krakowsko-Częstochowskiej. Wolny czas lubi spędzać również przy grach planszowych oraz karciankach.')}
        />

        <TeamMember
          img={sebastian}
          name="Sebastian Sokół"
          position="Designer/Account Manager"
          describe={t("Lubi wypić. Uważa, że 0.7 na dwóch to nie alkohol")}
        />

      </div>
    </div>
  );
};

export default Team;
