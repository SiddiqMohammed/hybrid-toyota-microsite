import React, { useEffect, useState } from "react";
import "./timer.css";
import jsonData from "../data/data.json";
import genericData from "../data/enum.json";
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
  const [showCodeFields, setShowCodeFields] = useState(false);
  const [couponVal, setCouponVal] = useState("");
  const [timeLeft2, setTimeLeft2] = useState("");
  // const [flag, setFlag] = useState(false);

  const calculateTimeLeft = () => {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();

    // console.log(hours);
    // console.log(genericData[0]);

    var timeLeft = 1;
    var timeLeft1 = "";
    var inputTime = 20;
    // Time the user gets to enter the right code
    var startTime = 11;

    // if (hours > startTime && minutes === 0) {
    //   if (seconds < inputTime) {
    //     timeLeft1 = 7;
    //   } else {
    //     timeLeft1 = "";
    //   }
    // } else if (hours > startTime && minutes === 10) {
    //   if (seconds < inputTime) {
    //     timeLeft1 = 8;
    //   } else {
    //     timeLeft1 = "";
    //   }
    // } else if (hours > startTime && minutes === 20) {
    //   if (seconds < inputTime) {
    //     timeLeft1 = 9;
    //   } else {
    //     timeLeft1 = "";
    //   }
    // } else if (hours > startTime && minutes === 30) {
    //   if (seconds < inputTime) {
    //     timeLeft1 = 10;
    //   } else {
    //     timeLeft1 = "";
    //   }
    // } else if (hours > startTime && minutes === 40) {
    //   if (seconds < inputTime) {
    //     timeLeft1 = 11;
    //   } else {
    //     timeLeft1 = "";
    //   }
    // } else if (hours > startTime && minutes === 50) {
    //   if (seconds < inputTime) {
    //     timeLeft1 = 12;
    //   } else {
    //     timeLeft1 = "";
    //   }
    // }

    if (hours === 13 && minutes === 30) {
      if (seconds < inputTime) {
        timeLeft1 = 1;
      } else {
        timeLeft1 = "";
      }
    }

    if (hours === 14 && minutes === 0) {
      if (seconds < inputTime) {
        timeLeft1 = 2;
      } else {
        timeLeft1 = "";
      }
    }
    if (hours === 14 && minutes === 30) {
      if (seconds < inputTime) {
        timeLeft1 = 3;
      } else {
        timeLeft1 = "";
      }
    }
    if (hours === 15 && minutes === 0) {
      if (seconds < inputTime) {
        timeLeft1 = 4;
      } else {
        timeLeft1 = "";
      }
    }
    if (hours === 15 && minutes === 30) {
      if (seconds < inputTime) {
        timeLeft1 = 5;
      } else {
        timeLeft1 = "";
      }
    }
    if (hours === 16 && minutes === 0) {
      if (seconds < inputTime) {
        timeLeft1 = 6;
      } else {
        timeLeft1 = "";
      }
    }
    if (hours === 16 && minutes === 30) {
      if (seconds < inputTime) {
        timeLeft1 = 7;
      } else {
        timeLeft1 = "";
      }
    }
    if (hours === 17 && minutes === 0) {
      if (seconds < inputTime) {
        timeLeft1 = 8;
      } else {
        timeLeft1 = "";
      }
    }
    if (hours === 17 && minutes === 30) {
      if (seconds < inputTime) {
        timeLeft1 = 9;
      } else {
        timeLeft1 = "";
      }
    }
    if (hours === 18 && minutes === 0) {
      if (seconds < inputTime) {
        timeLeft1 = 10;
      } else {
        timeLeft1 = "";
      }
    }
    if (hours === 18 && minutes === 30) {
      if (seconds < inputTime) {
        timeLeft1 = 11;
      } else {
        timeLeft1 = "";
      }
    }
    if (hours === 19 && minutes === 0) {
      if (seconds < inputTime) {
        timeLeft1 = 12;
      } else {
        timeLeft1 = "";
      }
    }
    if (hours === 19 && minutes === 30) {
      if (seconds < inputTime) {
        timeLeft1 = 13;
      } else {
        timeLeft1 = "";
      }
    }
    if (hours === 20 && minutes === 0) {
      if (seconds < inputTime) {
        timeLeft1 = 14;
      } else {
        timeLeft1 = "";
      }
    }
    if (hours === 20 && minutes === 30) {
      if (seconds < inputTime) {
        timeLeft1 = 15;
      } else {
        timeLeft1 = "";
      }
    }
    if (hours === 21 && minutes === 0) {
      if (seconds < inputTime) {
        timeLeft1 = 16;
      } else {
        timeLeft1 = "";
      }
    }
    // if (hours === 17) {
    //   timeLeft1 = 1;
    // }

    return timeLeft1;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [entryTime, setEntryTime] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());

      // console.log(timeLeft)

      if(timeLeft !== ""){
        setEntryTime(timeLeft);
      }

      var day = new Date().getDate();
      var year = new Date().getFullYear();

      var eventStartDate = 14;

      if (year === 2020) {
        // var cd = day - 14 + 1;
        var cd = day - eventStartDate + 1;
        var mfactor = 16 * cd;
      } else if (year === 2021) {
        var mfactor = 16 * (day + 18);
      }

      if (timeLeft === 1) {
        setCouponVal(genericData[mfactor - 15]);
      } else if (timeLeft === 2) {
        setCouponVal(genericData[mfactor - 14]);
      } else if (timeLeft === 3) {
        setCouponVal(genericData[mfactor - 13]);
      } else if (timeLeft === 4) {
        setCouponVal(genericData[mfactor - 12]);
      } else if (timeLeft === 5) {
        setCouponVal(genericData[mfactor - 11]);
      } else if (timeLeft === 6) {
        setCouponVal(genericData[mfactor - 10]);
      } else if (timeLeft === 7) {
        setCouponVal(genericData[mfactor - 9]);
      } else if (timeLeft === 8) {
        setCouponVal(genericData[mfactor - 8]);
      } else if (timeLeft === 9) {
        setCouponVal(genericData[mfactor - 7]);
      } else if (timeLeft === 10) {
        setCouponVal(genericData[mfactor - 6]);
      } else if (timeLeft === 11) {
        setCouponVal(genericData[mfactor - 5]);
      } else if (timeLeft === 12) {
        setCouponVal(genericData[mfactor - 4]);
      } else if (timeLeft === 13) {
        setCouponVal(genericData[mfactor - 3]);
      } else if (timeLeft === 14) {
        setCouponVal(genericData[mfactor - 2]);
      } else if (timeLeft === 15) {
        setCouponVal(genericData[mfactor - 1]);
      } else if (timeLeft === 16) {
        setCouponVal(genericData[mfactor]);
      }
      // // Test
      else {
        setCouponVal(jsonData.coupon0);
      }
      setTimeLeft2(timeLeft);
    }, 1000);
  });
  const handleSubmitCode = (e) => {
    e.preventDefault();
    // setLoader(true);

    // console.log(code);
    // console.log("couponVal", couponVal);

    if (couponVal === code.toUpperCase()) {
      // console.log("Access Granted!");
      setShowFields(true);
      setShowCodeFields(true);
      setCode("");
    }
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const [loader, setLoader] = useState(false);
  const [focus, setFocus] = useState(false);

  function sessionCheck() {
    return "session" + timeLeft.toString();
  }

  const handleSubmit = (e) => {
    var d = new Date();
    // console.log("date: ", d);

    e.preventDefault();
    setLoader(true);
    setShowFields(false);
    setShowCodeFields(true);

    // console.log("entryTime", entryTime);

    // var session = sessionCheck();
    var session = "session" + entryTime.toString();
    // var session = "session0";
    // console.log("session", session);

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
        }, 5000);
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
                style={{ display: showCodeFields ? "none" : "block" }}
              >
                <h2>Enter Secret Code:</h2>

                <input
                  onFocus={(e) => setFocus(true)}
                  onBlur={(e) => setFocus(false)}
                  required
                  type="text"
                  value={code}
                  id="Coupon Code"
                  onChange={(e) => setCode(e.target.value)}
                  name="Coupon Code"
                />
                <div className="submit-button">
                  <button type="submit" onClick={(e) => setFocus(false)}>
                    Submit
                  </button>
                </div>
              </div>

              {/* <div className="success-text" style={{display: loader? "block" : "block"}}> */}
              <div className="success-text" style={{ display: loader ? "block" : "none" }}>
                <p>Thank you for Participating.</p>
                <p>Please check your email.</p>
                <span>Please make sure to check your Junk or Spam mail box.</span>
              </div>

              <div
                className="details-label"
                style={{ display: showFields ? "block" : "none" }}
                // style={{ display: showFields ? "none" : "none" }}
              >
                {/* <div style={{ visibility: showFields ? "hidden" : "visible" }}> */}
                <form className="form" onSubmit={handleSubmit}>
                  {/* <h1>Please fill in your details.</h1> */}

                  <p>First Name*</p>
                  <input
                    onFocus={(e) => setFocus(true)}
                    onBlur={(e) => setFocus(false)}
                    placeholder=" e.g. John"
                    required
                    type="text"
                    value={firstName}
                    id="Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    name="Name"
                  />

                  <p>Last Name*</p>
                  <input
                    onFocus={(e) => setFocus(true)}
                    onBlur={(e) => setFocus(false)}
                    placeholder=" e.g. Doe"
                    required
                    type="text"
                    value={lastName}
                    id="Name"
                    onChange={(e) => setLastName(e.target.value)}
                    name="Name"
                  />

                  <p>E-mail*</p>
                  <input
                    onFocus={(e) => setFocus(true)}
                    onBlur={(e) => setFocus(false)}
                    placeholder=" e.g. john@example.com"
                    required
                    type="email"
                    value={email}
                    id="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    name="Email"
                  />

                  <p>Contact Number*</p>
                  <input
                    onFocus={(e) => setFocus(true)}
                    onBlur={(e) => setFocus(false)}
                    placeholder=" e.g. 050994575"
                    required
                    type="number"
                    minLength="10"
                    min="26"
                    // onkeypress={() => }
                    value={number}
                    id="Number"
                    onChange={(e) => setNumber(e.target.value)}
                    name="Number"
                  />
                  <div className="checkbox">
                    <label for="vehicle1">
                      {" "}
                      I agree to the <a href="https://www.dubaifestivalplaza.com/home/terms">terms and conditions</a>
                    </label>
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
        {/* <div className="footer" style={{ display: focus ? "none" : "block" }}>
          <img src={logo} alt="Festival Plaza" />
        </div> */}
      </div>
    </>
  );
}

export default App;
