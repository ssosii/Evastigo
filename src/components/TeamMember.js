import React from "react";

const TeamMemebr = (props) => {
  return (
    <>
      <div className="member">
        <img src={props.img} alt="zespół" />
        <p className="name-style">{props.name}</p>
        <p>{props.position}</p>
        <p className="describe-style">{props.describe}</p>
      </div>
    </>
  );
};

export default TeamMemebr;
