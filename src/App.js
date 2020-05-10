import React from "react";
import Header from "./layouts/Header";
import Offer from "./layouts/Offer";
import About from "./layouts/About";
import Portfolio from "./layouts/Portfolio";
import Team from "./layouts/Team";
import Footer from "./layouts/Footer";
import Contact from "./layouts/Contact";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Header />
      <Offer />
      <About />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
