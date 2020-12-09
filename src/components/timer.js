import React, { useEffect, useState } from "react";
import "./timer.css";
import jsonData from "../data/data.json";
import { db } from "../firebase";
import logo from "../img/footer.png";

// // import { fainstagram } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";

// var flag = 0;

function App() {
  // const [isTimeOver, setIsTimeOver] = useState(false);
  const [code, setCode] = useState("");
  const [showFields, setShowFields] = useState(false);
  const [couponVal, setCouponVal] = useState("");
  // const [flag, setFlag] = useState(false);

  const calculateTimeLeft = () => {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();

    // if (hours >= 13 && hours <= 21) {
    //   if (minutes === 30 && minutes === 0) {
    //   }
    // }

    var timeLeft = 1;
    var timeLeft1 = "";

    if (hours === 13 && minutes === 30) {
      timeLeft1 = "session1";
    }
    if (hours === 14 && minutes === 0) {
      timeLeft1 = "session2";
    }
    if (hours === 14 && minutes === 30) {
      timeLeft1 = "session3";
    }
    if (hours === 15 && minutes === 0) {
      timeLeft1 = "session4";
    }
    if (hours === 15 && minutes === 30) {
      timeLeft1 = "session5";
    }
    if (hours === 16 && minutes === 0) {
      timeLeft1 = "session6";
    }
    if (hours === 16 && minutes === 30) {
      timeLeft1 = "session7";
    }
    if (hours === 17 && minutes === 0) {
      timeLeft1 = "session8";
    }
    if (hours === 17 && minutes === 30) {
      timeLeft1 = "session9";
    }
    if (hours === 18 && minutes === 0) {
      timeLeft1 = "session10";
    }
    if (hours === 18 && minutes === 30) {
      timeLeft1 = "session11";
    }
    if (hours === 19 && minutes === 0) {
      timeLeft1 = "session12";
    }
    if (hours === 19 && minutes === 30) {
      timeLeft1 = "session13";
    }
    if (hours === 20 && minutes === 0) {
      timeLeft1 = "session14";
    }
    if (hours === 20 && minutes === 30) {
      timeLeft1 = "session15";
    }
    if (hours === 21 && minutes === 0) {
      timeLeft1 = "session16";
    }
    if (hours !== 0) {
      timeLeft1 = "session0";
    }

    return timeLeft1;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());

      if (timeLeft === 0) {
        setCouponVal(jsonData.coupon0);
      } else if (timeLeft === 1) {
        setCouponVal(jsonData.coupon1);
      } else if (timeLeft === 2) {
        setCouponVal(jsonData.coupon2);
      } else if (timeLeft === 3) {
        setCouponVal(jsonData.coupon3);
      } else if (timeLeft === 4) {
        setCouponVal(jsonData.coupon4);
      } else if (timeLeft === 5) {
        setCouponVal(jsonData.coupon5);
      } else if (timeLeft === 6) {
        setCouponVal(jsonData.coupon6);
      } else if (timeLeft === 7) {
        setCouponVal(jsonData.coupon7);
      } else if (timeLeft === 8) {
        setCouponVal(jsonData.coupon8);
      } else if (timeLeft === 9) {
        setCouponVal(jsonData.coupon9);
      }
      // Test
      else if (timeLeft === "session0") {
        setCouponVal(jsonData.coupon0);
      }
    }, 1000);
  });
  const handleSubmitCode = (e) => {
    e.preventDefault();
    // setLoader(true);

    if (couponVal === code) {
      // console.log("Access Granted!");
      setShowFields(true);
    }
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const [loader, setLoader] = useState(false);

  // console.log("loader", loader);

  // const [state, setState] = useState({ x: 25 });

  function sessionCheck() {
    return "session" + timeLeft.toString();
  }

  const handleSubmit = (e) => {
    var d = new Date();
    // console.log("date: ", d);

    e.preventDefault();
    setLoader(true);

    // var session = sessionCheck();
    var session = "session0";

    db.collection(session)
      .add({
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Number: number,
        dateTime: String(d),
        Entry: 0,
      })
      .then(() => {
        // alert("Message has been submitted!");
        // setLoader(false);
        setTimeout(function () {
          window.location.reload();
        }, 3000);
      })
      .catch((error) => {
        alert(error.message);
        // setLoader(false);
      });

    setFirstName("");
    setLastName("");
    setNumber("");
    setEmail("");
  };

  // console.log(code);
  return (
    <>
      <div className="outer-div">
        {/* <div className="text-center main-text">
          <h1>Your Coupon Is: {timeLeft}</h1>
          <h1>Your Coupon Is: {couponVal}</h1>
        </div> */}

        <div className="input-fields text-center">
          <div className="yeer">
            <h1>
              <span className="top-text">THE</span>
            </h1>
            <h1>
              COMM
              <span className="middle-text">YOU</span>
              NITY
            </h1>
            <h1>
              <span className="bottom-text">FESTIVAL</span>
            </h1>
            {/* <img src={} alt="Italian Trulli"/> */}
            <form className="form" onSubmit={handleSubmitCode}>
              <div
                className="code-label"
                style={{ display: showFields ? "none" : "block" }}
              >
                <h2>Enter Secret Code:</h2>

                <input
                  required
                  type="text"
                  value={code}
                  id="Coupon Code"
                  onChange={(e) => setCode(e.target.value)}
                  name="Coupon Code"
                />
                <div className="submit-button">
                  <button type="submit">Submit</button>
                </div>
              </div>

              {/* <div className="success-text" style={{display: loader? "block" : "block"}}> */}
              <div
                className="success-text"
                style={{ display: loader ? "block" : "none" }}
              >
                <p>You are successfully registered, please check your email.</p>
              </div>

              <div
                className="details-label"
                style={{ display: showFields ? "block" : "none" }}
              >
                {/* <div style={{ visibility: showFields ? "hidden" : "visible" }}> */}
                <form className="form" onSubmit={handleSubmit}>
                  {/* <h1>Please fill in your details.</h1> */}

                  <p>First Name*</p>
                  <input
                    required
                    type="text"
                    value={firstName}
                    id="Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    name="Name"
                  />

                  <p>Last Name*</p>
                  <input
                    required
                    type="text"
                    value={lastName}
                    id="Name"
                    onChange={(e) => setLastName(e.target.value)}
                    name="Name"
                  />

                  <p>E-mail*</p>
                  <input
                    required
                    type="email"
                    value={email}
                    id="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    name="Email"
                  />

                  <p>Phone Number*</p>
                  <input
                    required
                    type="number"
                    min="10"
                    value={number}
                    id="Number"
                    onChange={(e) => setNumber(e.target.value)}
                    name="Number"
                  />
                  <div className="checkbox">
                    <label for="vehicle1"> I have a bike</label>
                    <input
                      required
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <br></br>
                  </div>

                  <button style={{ marginTop: "0" }} type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </form>
          </div>
        </div>
        <div className="footer">
          <img src={logo} alt="Festival Plaza" />
        </div>
      </div>
    </>
  );
}

export default App;
