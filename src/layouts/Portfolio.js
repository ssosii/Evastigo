import React, { useRef } from "react";

import PortfolioChild from "../components/PortfolioChild";
import "../styles/Portfolio.scss";
import edugrupa from "../img/mocup/edugrupa.jpg";

const Portfolio = () => {

  return (
    <div id="portfolio"  className="portfolio">
      <div className="portfolio-container">
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
