import React from "react";

const AtutContent = (props) => {
  return (
    <div class="atut">
      <div class="atut-img">
        <img src={props.img} alt="" srcset="" />
      </div>
      <div class="atut-span">{props.text}</div>
    </div>
  );
};

export default AtutContent;
