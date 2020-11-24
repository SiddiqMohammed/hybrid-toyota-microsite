import React, { useEffect, useState } from "react";
import "./timer.css";
import topLeft from "../img/khalifa-uni1.png";
import topRight from "../img/logos.png";
import welcome from "../img/welcome.png";
import sheikh from "../img/sheikh1.png";

// import { fainstagram } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

var flag = 0;

function App() {
  const [isTimeOver, setIsTimeOver] = useState(false);

  const calculateTimeLeft = () => {
    // var currentLocation = window.location;
    // console.log(currentLocation);
    // if (currentLocation.href === "https://www.kunationalday.ae/"){
    //   window.location.href = "https://khalifa-university.web.app/";
    //   // console.log("YEE");
    // }

    const difference = new Date(2020, 10, 24, 11) - new Date();
    // const difference = new Date(2020, 10, 23, 12, 12) - new Date();
    let timeLeft = {};

    // console.log(window.innerWidth, window.innerHeight);
    // console.log("difference", difference);

    if (difference > 0) {
      var dd = Math.floor(difference / (1000 * 60 * 60 * 24));
      var hh = Math.floor((difference / (1000 * 60 * 60)) % 24);
      var mm = Math.floor((difference / 1000 / 60) % 60);
      var ss = Math.floor((difference / 1000) % 60);
      if (dd > 0) {
        hh = hh + 24;
      } else if (hh < 10) {
        hh = "0" + hh;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      if (ss < 10) {
        ss = "0" + ss;
      }
      timeLeft = {
        // days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: hh,
        minutes: mm,
        seconds: ss,
      };
    }
    if (difference < 1 && flag === 0) {
      // if (ss < 3 && flag === 0) {
      // setIsTimeOver(true);
      // setTimeout(() => {
      // window.location.href = "https://holofair.app/thh/?event=zone&THH";
      // }, 10000);
      // flag = 1;
    }
    // console.log("timeLeft: ", timeLeft.seconds);
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(<span>{timeLeft[interval]} </span>);
  });
  return (
    <>
      <div
        className="instruction-page"
        style={{ visibility: isTimeOver ? "hidden" : "visible" }}
      >
        <div className="section-1">
          <div className="container">
            <div className="row">
              <div className="col">
                <img
                  alt="Khalifa University"
                  className="img-fluid float-left tLeft"
                  src={topLeft}
                ></img>
              </div>
              <div className="col">
                <img
                  alt="Seeds Of The Union"
                  className="img-fluid float-right tright"
                  src={topRight}
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-3 mainContainer">
          <div className="row">
            <div className="col-sm-4">
              <div className="row">
                <div className="col-12">
                  <div className="sidebar-content">
                    <img
                      alt="Welcome to KU Virtual National Day Ceremony 2020"
                      className="img-fluid float-left"
                      src={welcome}
                    ></img>
                    <br />
                    {/* <h3> Tuesday, 24 November 2020</h3> */}
                    <h3>Coming Soon!</h3>
                    <br />
                  </div>
                </div>
                <div className="col-12">
                  <div className="sidebar-content">
                    <div className="timer">
                      <h2>
                        {/* <div className="timerText">
                          <div className="row text-center numbers">
                            <div className="col-4 col-xs-4">
                              {timerComponents[0]}
                            </div>
                            <div className="col-4 col-xs-4">
                              {timerComponents[1]}
                            </div>
                            <div className="col-4 col-xs-4">
                              {timerComponents[2]}
                            </div>
                          </div>
                          <div className="row text-center texts">
                            <div className="col-4 col-xs-4">
                              <span>Hours</span>
                            </div>
                            <div className="col-4 col-xs-4">
                              <span>Minutes</span>
                            </div>
                            <div className="col-4 col-xs-4">
                              <span>Seconds</span>
                            </div>
                          </div>
                        </div> */}
                      </h2>
                      {/* <div className="soon-text">
                        <h1>Coming Soon!</h1>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="main-content">
                <img
                  alt="Sheikh"
                  className="img-fluid float-right sheikh"
                  src={sheikh}
                ></img>
              </div>
            </div>
          </div>
        </div>

        <div className="timeSection">
          <h3>
            #KU2020NationalDay {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {/* <div className="social-icons"> */}
            <a href="https://www.instagram.com/khalifa_university/">
              <FontAwesomeIcon icon={faInstagram} style={{ color: "black" }} />{" "}
            </a>
            <a href="https://www.facebook.com/khalifauniversity/">
              <FontAwesomeIcon icon={faFacebook} style={{ color: "black" }} />{" "}
            </a>
            <a href="https://www.youtube.com/user/KhalifaUniversity">
              <FontAwesomeIcon icon={faYoutube} style={{ color: "black" }} />{" "}
            </a>
            <a href="https://twitter.com/KhalifaUni">
              <FontAwesomeIcon icon={faTwitter} style={{ color: "black" }} />{" "}
            </a>
            {/* </div> */}
          </h3>
        </div>
      </div>
    </>
  );
}

export default App;
