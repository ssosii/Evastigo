import React, { Component } from "react";
import Navigation from "../components/Navigation";
import "../styles/Header.scss";
import CityVideo from "../video/city.mp4";
import OfferImg1 from "../img/offer.svg";
import OfferImg2 from "../img/offer2.svg";
import arrow from "../img/arrow_down-blue.svg";

class Header extends Component {
  state = {
    activeElement: 0,
    images: [OfferImg1, OfferImg2],
  };

  componentDidMount() {
    setInterval(() => {
      if (this.state.activeElement === this.state.images.length - 1) {
        this.setState({
          activeElement: 0,
        });
      } else {
        this.setState({
          activeElement: this.state.activeElement + 1,
        });
      }

      console.log(this.state.activeElement);
    }, 3000);
  }

  render() {
    return (
      <>
        <div className="header">
          <Navigation />
          <video id="background-video" loop autoPlay>
            <source src={CityVideo} type="video/mp4" />
            <source src={CityVideo} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <div class="overlay"></div>
          <div class="offer-sign">
            <img
              class="offer-sign-image"
              src={this.state.images[this.state.activeElement]}
              alt=""
            />
          </div>
          <div class="down-button">
            <img class="rubberBand" src={arrow} alt="" srcset="" />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
