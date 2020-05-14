import React from "react";
import Header from "./layouts/Header";
import Offer from "./layouts/Offer";
import About from "./layouts/About";
import Portfolio from "./layouts/Portfolio";
import Team from "./layouts/Team";
import Footer from "./layouts/Footer";
import Contact from "./layouts/Contact";
import "./styles/App.scss";
import "./styles/abstracts/_variables.scss";
import "./styles/abstracts/_mixins.scss";

function App() {
  return (
    <>
      <Header />
      <Offer />
      <About />
      <Team />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
