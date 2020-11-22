import React, { useEffect, useState } from "react";
import "./timer.css";

function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = new Date(2020, 10, 24) - new Date();
    let timeLeft = {};

    console.log(window.innerWidth, window.innerHeight);

    if (difference > 0) {
      var dd = Math.floor(difference / (1000 * 60 * 60 * 24));
      var hh = Math.floor((difference / (1000 * 60 * 60)) % 24);
      var mm =  Math.floor((difference / 1000 / 60) % 60);
      var ss = Math.floor((difference / 1000) % 60);
      if(dd > 0){
        hh = hh + 24;
      }
      else if (hh < 10){
        hh = "0" + hh
      }
      if (mm < 10){
        mm = "0" + mm
      }
      if (ss < 10){
        ss = "0" + ss
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
    <div className="timer">
      {/* <h1>Khalifa University {year} Countdown</h1> */}
      {/* <h2>With React Hooks!</h2> */}
      <div className="timerMain">
        <h2 >
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          {/* <span>{timeLeft}</span> */}
        </h2>
      </div>
      <h2>
        {/* <span style={{ position: "absolute", top: "730px", left: "150px" }}>Days</span> */}
        {/* <span style={{ position: "absolute", top: "730px", left: "150px" }}>Hours</span>
        <span style={{ position: "absolute", top: "730px", left: "241px" }}>Minutes</span>
        <span style={{ position: "absolute", top: "730px", left: "350px" }}>Seconds</span> */}
      </h2>
    </div>
  );
}

export default App;
