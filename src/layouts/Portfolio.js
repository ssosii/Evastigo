// eslint-disable-next-line

import React from "react";

import PortfolioChild from "../components/PortfolioChild";

import edugrupa from "../img/mocup/edugrupa.jpg";
import prius from "../img/mocup/prius.jpg";
import biota from "../img/mocup/biota.jpg";
import riss from "../img/mocup/riss.jpg";
import social from "../img/mocup/social.jpg";
import portfolio from "../img/portfolio.svg";
import travel from "../img/mocup/sos.jpg";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <img className="portfolio-img" src={portfolio} alt="portfolio-img" />
        <PortfolioChild
          link="www.edugrupa.pl"
          text="www.edugrupa.pl"
          img={edugrupa}
        />
        <PortfolioChild
          link="www.prius.com.pl"
          text="www.prius.com.pl"
          img={prius}
        />
        <PortfolioChild
          link="www.biotapharma.pl"
          text="www.biotapharma.pl"
          img={biota}
        />
        <PortfolioChild
          link="www.photoriss.com"
          text="www.photoriss.com"
          img={riss}
        />
        <PortfolioChild
          link="www.socialprintbg.com"
          text="www.socialprintbg.com"
          img={social}
        />
        <PortfolioChild
          link="www.sostravel.it"
          text="www.sostravel.it"
          img={travel}
        />
      </div>
    </div>
  );
};

export default Portfolio;
