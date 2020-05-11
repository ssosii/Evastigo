import React from "react";

import PortfolioChild from "../components/PortfolioChild";
import "../styles/Portfolio.scss";
import edugrupa from "../img/mocup/edugrupa.jpg";

const Portfolio = () => {
  let myRef = React.createRef();

  function showDescribtion() {
    console.log(myRef);
  }

  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <PortfolioChild
          ref={myRef}
          onClick={showDescribtion}
          link="www.edugrupa.pl"
          text="www.edugrupa.pl"
          img={edugrupa}
        />
        <PortfolioChild
          link="www.edugrupa.pl"
          text="www.edugrupa.pl"
          img={edugrupa}
        />
        <PortfolioChild
          link="www.edugrupa.pl"
          text="www.edugrupa.pl"
          img={edugrupa}
        />
        <PortfolioChild
          link="www.edugrupa.pl"
          text="www.edugrupa.pl"
          img={edugrupa}
        />
        <PortfolioChild
          link="www.edugrupa.pl"
          text="www.edugrupa.pl"
          img={edugrupa}
        />
        <PortfolioChild
          link="www.edugrupa.pl"
          text="www.edugrupa.pl"
          img={edugrupa}
        />
        <PortfolioChild
          link="www.edugrupa.pl"
          text="www.edugrupa.pl"
          img={edugrupa}
        />
        <PortfolioChild
          link="www.edugrupa.pl"
          text="www.edugrupa.pl"
          img={edugrupa}
        />
      </div>
    </div>
  );
};

export default Portfolio;
