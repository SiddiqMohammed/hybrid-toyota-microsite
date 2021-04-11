import React, { useState } from "react";
import "./timer.css";
import { db } from "../firebase";
import TC from "../data/tc.pdf";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [signup, setSignup] = useState(false);

  const handleSubmit = (e) => {
    var d = new Date();
    // console.log("date: ", d);

    setLoader(true);
    e.preventDefault();

    db.collection("dfc")
      .add({
        FirstName: firstName,
        LastName: lastName,
        email: email,
        Number: number,
        dateTime: String(d),
      })
      .then(() => {
        setTimeout(function () {
          // setLoader(false);
          window.location.reload();
        }, 5000);
      })
      .catch((error) => {
        alert(error.message);
      });
    // console.log();
    setFirstName("");
    setLastName("");
    setNumber("");
    setEmail("");
  };

  return (
    <>
      <div className="outer-div">
        <div className="input-fields">
          <div className="yeer">
            {/* <h1>TOYOTA HYBRID</h1>
            <h1>HEROES</h1> */}
            <div
              className="signUp text-center"
              style={{ display: signup ? "none" : "block" }}
            >
              <button onClick={() => setSignup(true)}>
                Sign Up
              </button>
            </div>

            <div className="central">
              <div
                className="details-label"
                style={{ display: loader ? "none" : signup? "block" : "none" }}
              >
                <form className="form" onSubmit={handleSubmit}>
                  <p>First Name*</p>
                  <input
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
                    placeholder=" e.g. john@example.com"
                    required
                    type="email"
                    value={email}
                    id="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    name="user_email"
                  />

                  <p>Contact Number*</p>
                  <input
                    placeholder=" e.g. 0501234567"
                    required
                    type="tel"
                    pattern="[0-9]{10}"
                    value={number}
                    id="Number"
                    onChange={(e) => setNumber(e.target.value)}
                    name="Number"
                  />
                  <div className="checkbox text-center">
                    <input
                      required
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label htmlFor="vehicle1">
                      {" "}
                      I agree to the <a href={TC}>terms and conditions</a>
                    </label>
                    <br></br>
                  </div>
                  <div className="text-center">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="containers">
              <div
                className="thankYou"
                style={{ display: loader ? "block" : "none" }}
              >
                <h2>
                  Thank you for participating. <br />
                </h2>
                <h2>
                  Please check your email. <br />
                </h2>
                <p>Please make sure to check your Junk or Spam mail box.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
