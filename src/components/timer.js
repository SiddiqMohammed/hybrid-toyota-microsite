import React, { useEffect, useState } from "react";
import "./timer.css";
import topLeft from "../img/khalifa-uni1.png";
import topRight from "../img/logos.png";
import welcome from "../img/welcome2.png";
import sheikh from "../img/sheikh.png";

// import { fainstagram } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = new Date(2020, 10, 24, 11) - new Date();
    let timeLeft = {};

    console.log(window.innerWidth, window.innerHeight);

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

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

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
      <div className="section-1">
        <div class="container">
          <div class="row">
            <div class="col">
              <img class="img-fluid float-left tLeft" src={topLeft}></img>
            </div>
            <div class="col">
              <img class="img-fluid float-right" src={topRight}></img>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-3">
        <div class="row">
          <div class="col-sm-4">
            <div class="row">
              <div class="col-12">
                <div class="sidebar-content">
                  <img class="img-fluid float-left" src={welcome}></img>
                  <br />
                  <h3> Tuesday, 24 November 2020</h3>
                  <br />
                </div>
              </div>
              <div class="col-12">
                <div class="sidebar-content">
                  <div className="timer">
                    <h2>
                      <div className="timerText ">
                        <div class="row text-center">
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
                        <div class="row text-center">
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
                      </div>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="main-content">
              <img
                class="img-fluid float-right"
                src={sheikh}
                style={{ width: "60%" }}
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="timeSection">
        <h3>
          #KU2020NationalDay {" "}
          <a href="https://www.instagram.com/khalifa_university/">
            <FontAwesomeIcon icon={faInstagram} style={{color: "black"}}/>{" "}
          </a>
          <a href="https://www.facebook.com/khalifauniversity/">
            <FontAwesomeIcon icon={faFacebook} style={{color: "black"}}/>{" "}
          </a>
          <a href="https://www.youtube.com/user/KhalifaUniversity">
            <FontAwesomeIcon icon={faYoutube} style={{color: "black"}}/>{" "}
          </a>
          <a href="https://twitter.com/KhalifaUni">
            <FontAwesomeIcon icon={faTwitter} style={{color: "black"}}/>{" "}
          </a>
        </h3>
      </div>
    </>
  );
}

export default App;
