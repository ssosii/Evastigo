import React from "react";
import TeamMember from "../components/TeamMember";
import "../styles/Team.scss";
import lukasz from "../img/lukasz.png";
import sebastian from "../img/sebastian.png";
import maciej from "../img/maciej.png";

const Team = () => {
  return (
    <div className="team">
      <div className="team-container">
        <TeamMember
          img={maciej}
          name="Maciej Figlarz"
          position="Full Stack Developer"
          describe={
            "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
          }
        />
        <TeamMember
          img={lukasz}
          name="Łukasz Sosnecki"
          position="Web Developer/Designer"
          describe={
            "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
          }
        />

        <TeamMember
          img={sebastian}
          name="Sebastian Sokół"
          position="Designer/Account Manager"
          describe={
            "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
          }
        />
      </div>
    </div>
  );
};

export default Team;
