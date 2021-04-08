import React, { useState } from "react";
import "./timer.css";
import { db } from "../firebase";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    var d = new Date();
    // console.log("date: ", d);

    e.preventDefault();

    db.collection("dfc")
      .add({
        "First Name": firstName,
        "Last Name": lastName,
        Email: email,
        Number: number,
        dateTime: String(d),
      })
      .then(() => {
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        alert(error.message);
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
        <div className="input-fields">
          <div className="yeer">
            {/* <h1>TOYOTA HYBRID</h1>
            <h1>HEROES</h1> */}

            <div className="central">
              <div className="details-label">
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
                    name="Email"
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
                      I agree to the{" "}
                      <a href="https://www.dubaifestivalplaza.com/home/terms">
                        terms and conditions
                      </a>
                    </label>
                    <br></br>
                  </div>
<div className="text-center">

                  <button type="submit">
                    Submit
                  </button>
</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
