import React, { Component } from "react";
import "../styles/About.scss";
import aboutimg from "../img/about.svg";
import AtutContent from "../components/AtutContent";
import Background from "../img/19366.jpg";
import img1 from "../img/01.svg";
import img2 from "../img/02.svg";
import img3 from "../img/03.svg";
import img4 from "../img/04.svg";
import img5 from "../img/05.svg";
import img6 from "../img/06.svg";
import img7 from "../img/07.svg";
import img8 from "../img/08.svg";

class About extends Component {
  state = {};

  aboutimg = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    transform: "scale(1.1)",
    // backgroundImage: `url(../img/19366.jpg)`,
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
  };
  listenerref = React.createRef();
  imgref = React.createRef();

  bgcAnimation = (e) => {
    console.log(e.target);
  };

  render() {
    return (
      <div id="about" className="about">
        <div className="about-box-1">
          <span>
            <img src={aboutimg} alt="" />
            <p>
              Naszą firmę tworzą ludzie kreatywni, zainteresowani otaczającym
              nas światem marketingu. Myślimy nieszablonowo i staramy się, żeby
              nasze projekty również takie pozostały. Projektujemy strony www,
              które są intuicyjne, proste w obsłudze oraz interaktywne.
              Tworzenie stron internetowych odbywa się u nas na podstawie
              gotowych oraz sprawdzonych modeli w przypadku większych serwisów
              lub na podstawie indywidualnych wytycznych otrzymanych od klienta.
              Każdy projekt jest inny i do każdego podchodzimy indywidualnie.
            </p>
            <p>
              Grafika, reklama zewnętrzna oraz szeroko pojęta poligrafia to
              kolejna gałąź naszej działalności, w której chętnie podejmiemy się
              współpracy z Państwem. Zajmujemy się przygotowywaniem projektów
              materiałów reklamowych, które pozostają spójne z wizerunkiem
              Państwa firmy, dzięki czemu pasują one do marki która jest
              kreowana oraz budzą pozytywne skojarzenia. Ulotki, broszury,
              wizytówki... aż do druku na drewnie - oferujemy Państwu produkty
              nieszablonowe, które będą nieodzownym elementem Państwa wizerunku.
              Nie mają Państwo pomysłu, ale wiadomy jest cel?{" "}
              <b>Zapraszamy do kontaktu!</b> Nie możemy doczekać się wspólnego
              projektu z przemyślanym, zaplanowanym i konkurencyjnym elementem
              strategii biznesowej.
            </p>
          </span>
        </div>
        <div className="about-box-2">
          <div className="about-bullet">
            <div className="about-txt-1">
              <AtutContent img={img1} text="Działamy kreatywnie z pasją" />
              <AtutContent
                img={img2}
                text="Kompleksowa obsługa: projekt – wykonanie – wydruk"
              />
              <AtutContent
                img={img3}
                text="Indywidualne podejście do klienta"
              />
              <AtutContent
                img={img4}
                text="Doświadczenie w branży sceneograficznej"
              />
            </div>
            <div className="about-txt-2">
              <div className="about-txt-1">
                <AtutContent
                  img={img5}
                  text="Wiedza,
                                  profesjonalizm, konsekwencja"
                />
                <AtutContent
                  img={img6}
                  text="Szybkość realizowanych projektów"
                />
                <AtutContent
                  img={img7}
                  text="10 lat doświadczenia w poligrafii"
                />
                <AtutContent
                  img={img8}
                  text="Bezproblemowa i szybka komunikacja"
                />
              </div>
            </div>
          </div>
        </div>

        <div onPointerMove={this.bgcAnimation} className="listener"></div>
        <div style={this.aboutimg} ref={this.imgref}></div>
      </div>
    );
  }
}

export default About;
