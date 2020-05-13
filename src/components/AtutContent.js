import React from "react";

const AtutContent = (props) => {
  return (
    <div className={props.style}>
      <div className="atut-img">
        <img src={props.img} alt="" srcset="" />
      </div>
      <div className="atut-span">{props.text}</div>
    </div>
  );
};

export default AtutContent;
