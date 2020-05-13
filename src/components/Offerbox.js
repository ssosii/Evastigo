import React from "react";

const Offerbox = (props) => {
  return (
    <div className="box" data-number="1">
      <p data-number="1">{props.text}</p>
      <img data-number="1" src={props.img} alt="" />
      {/* <span data-number="1">Wiecej</span> */}
    </div>
  );
};

export default Offerbox;
