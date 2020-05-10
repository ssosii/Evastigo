import React from "react";

const Offerbox = (props) => {
  return (
    <div className="box" data-number="1">
      <p data-number="1">{props.text}</p>
      <img data-number="1" src="img/logo_white2.svg" alt="" />
      {/* <span data-number="1">Wiecej</span> */}
    </div>
  );
};

export default Offerbox;
