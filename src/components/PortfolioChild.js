import React from "react";

const PortfolioChild = (props) => {
  return (
    <div onClick={props.onClick} className="portfolio-box">
      <div className="describe">
        <a href={props.link}>{props.text}</a>
      </div>
      <div ref={props.ref} className="more_info">
        <i className="far fa-plus-square"></i>
      </div>
      <img src={props.img} alt="" srcset="" />
    </div>
  );
};

export default PortfolioChild;
