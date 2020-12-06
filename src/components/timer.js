import React, { useEffect, useState } from "react";
import "./timer.css";
import jsonData from "../data/data.json";
import { db } from "../firebase";

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
    // const difference = new Date().getHours();
    var timeLeft = new Date().getMinutes();
    // console.log(jsonData.coupon1);

    timeLeft = timeLeft % 10;
    // console.log(timeLeft);

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // const [year] = useState(new Date().getFullYear());

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
    }, 1000);
  });
  const handleSubmitCode = (e) => {
    // var d = new Date();
    // console.log("date: ", d);

    e.preventDefault();
    // setLoader(true);

    if (couponVal === code) {
      console.log("Access Granted!");
      setShowFields(true);
    }
  };

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const [loader, setLoader] = useState(false);

  const [state, setState] = useState({ x: 25 });

  function sessionCheck() {
    return "session" + timeLeft.toString();
  }

  const handleSubmit = (e) => {
    var d = new Date();
    console.log("date: ", d);

    e.preventDefault();
    setLoader(true);

    var session = sessionCheck();
    // db.collection('users').doc("day").collection(session).set({
    //   password: "password",
    //   name: "this.name",
    //   rollno: "this.rollno"
    // })
    db.collection(session)
      .add({
        Name: name,
        Email: email,
        Number: number,
        dateTime: String(d),
      })
      .then(() => {
        alert("Message has been submitted!");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setNumber("");
    setEmail("");
  };

  // console.log(code);
  return (
    <>
      <div className="outer-div">
        <div className="text-center main-text">
          <h1>Your Coupon Is: {timeLeft}</h1>
          <h1>Your Coupon Is: {couponVal}</h1>
        </div>

        <div className="input-fields text-center">
          <form className="form" onSubmit={handleSubmitCode}>
            <h2>Enter the code:</h2>

            <input
              required
              type="text"
              value={code}
              id="Coupon Code"
              onChange={(e) => setCode(e.target.value)}
              name="Coupon Code"
            />
            <button type="submit">Submit</button>

            {/* <div style={{visibility: showFields? "visible" : "hidden"}}> */}
            <div style={{ visibility: showFields ? "hidden" : "visible" }}>
              <form className="form" onSubmit={handleSubmit}>
                <h1>Please fill in your details.</h1>

                {/* <label>
                  9. Do you have any suggestions and feedback you would like to
                  share? Were there any concerns that you feel were overlooked?
                </label> */}
                <p>Enter your name:</p>
                <input
                  required
                  type="text"
                  value={name}
                  id="Name"
                  onChange={(e) => setName(e.target.value)}
                  name="Name"
                />

                <p>Enter your email:</p>
                <input
                  required
                  type="text"
                  value={email}
                  id="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="Email"
                />

                <p>Enter your number:</p>
                <input
                  required
                  type="text"
                  value={number}
                  id="Number"
                  onChange={(e) => setNumber(e.target.value)}
                  name="Number"
                />

                <button
                  type="submit"
                  style={{
                    background: loader ? "#acc" : "rgb(147, 213, 0)",
                    color: "rgb(53, 52, 54)",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
