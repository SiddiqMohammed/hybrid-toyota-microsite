import React, { useEffect, useState } from "react";
import "./timer.css";
import topLeft from "../img/khalifa-uni1.png";
import topRight from "../img/logos.png";
import welcome from "../img/welcome.png";
import sheikh from "../img/sheikh1.png";
import jsonData from "../data/data.json";

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
  const [code, setCode] = useState("");
  const [showFields, setShowFields] = useState(false);
  const [couponVal, setCouponVal] = useState("");
  const [flag, setFlag] = useState(false);

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

  const [hear, setHear] = useState("");
  const [collab, setCollab] = useState("");
  const [rate, setRate] = useState("");
  const [handle, setHandle] = useState("");
  const [campaignrun, setCampaignrun] = useState("");
  const [prodquality, setProdquality] = useState("");
  const [flexible, setFlexible] = useState("");
  const [satisfied, setSatisfied] = useState("");
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");

  const [loader, setLoader] = useState(false);

  const [state, setState] = useState({ x: 25});

  const handleSubmit = (e) => {
    var d = new Date();
    console.log("date: ", d);

    e.preventDefault();
    setLoader(true);


    // db.collection("clientsurvey")
    //   .add({
    //     'Where did you hear about us?': hear,
    //     'How long have you been collaborating with THH?': collab,
    //     "How would you rate the activation?": rate,
    //     "How well Account manager handle the project?": handle,
    //     "Did the campaign run smoothly?": campaignrun,
    //     "Rate the production Quality": prodquality,
    //     "How flexible was THH during the project?": flexible,
    //     "How satisfied are you with THH's service?": satisfied,
    //     "Suggestions and Feedback": message1,
    //     "Testimonial": message2,
    //     dateTime: String(d),
    //   })
    //   .then(() => {
    //     alert("Message has been submitted!");
    //     setLoader(false);
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //     setLoader(false);
    //   });

    setHear("");
    setCollab("");
    setRate("");
    setHandle("");
    setCampaignrun("");
    setProdquality("");
    setFlexible("");
    setSatisfied("");
    setMessage1("");
    setMessage2("");
  }

  console.log(code);
  return (
    <>
      <div className="outer-div">
        <div className="text-center main-text">
          <h1>Your Coupon Is: {timeLeft}</h1>
          <h1>Your Coupon Is: {couponVal}</h1>
        </div>
        {/* <div className="input-fields text-center">
          <h2>Enter the code:</h2>
          <input
            required
            type="text"
            value={code}
            id="Company Website"
            onChange={(e) => setCode(e.target.value)}
            name="hear"
          />
        <button>Submit</button>
        </div> */}

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

            <div style={{visibility: showFields? "visible" : "hidden"}}>
            {/* <div style={{ visibility: showFields ? "hidden" : "visible" }}> */}
              <form className="form" onSubmit={handleSubmit}>
                {/* <img src={Logo} alt="logo" /> */}
                <h1>
                  your testimonial<span>.</span>
                </h1>

                <label>
                  1. How did you find out about The Hanging House/ Where did you
                  first hear about us?
                </label>
                <div className="radio-inputs">
                  <input
                    required
                    type="radio"
                    value="Company Website"
                    id="Company Website"
                    onChange={() => setHear("Company Website")}
                    name="hear"
                  />
                  <label for="male">Company Website</label>

                  <input
                    type="radio"
                    value="Google ads/search"
                    id="Google ads/search"
                    onChange={() => setHear("Google ads/search")}
                    name="hear"
                  />
                  <label for="Google ads/search">Google ads/search</label>

                  <input
                    type="radio"
                    value="Social Media"
                    id="Social Media"
                    onChange={() => setHear("Social Media")}
                    name="hear"
                  />
                  <label for="Social Media">Social Media</label>

                  <input
                    type="radio"
                    value="Word of mouth"
                    id="Word of mouth"
                    onChange={() => setHear("Word of mouth")}
                    name="hear"
                  />
                  <label for="Word of mouth">Word of mouth</label>

                  <input
                    type="radio"
                    value="Emails"
                    id="Emails"
                    onChange={() => setHear("Emails")}
                    name="hear"
                  />
                  <label for="Emails">Emails</label>
                </div>

                <label>
                  2. How long have you been collaborating with The Hanging
                  House?
                </label>
                <select
                  required
                  value={collab}
                  onChange={(e) => setCollab(e.target.value)}
                >
                  <option value="">Please Select...</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="4-6 month">4-6 months</option>
                  <option value="7-12 months">7-12 months</option>
                  <option value="Over a year">Over a year</option>
                </select>


                <select
                  required
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                >
                  <option value="">Please Select...</option>
                  <option value="Satisfied">Satisfied</option>
                  <option value="Very satisfied">Very satisfied</option>
                  <option value="Dissatisfied">Dissatisfied</option>
                  <option value="Very dissatisfied">Very dissatisfied</option>
                </select>

                <label>
                  4. How well did your Account Manager handle your project?
                </label>
                <select
                  required
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                >
                  <option value="">Please Select...</option>
                  <option value="Well">Well</option>
                  <option value="Extremely well">Extremely well</option>
                  <option value="Not so well">Not so well</option>
                  <option value="Not at all well ">Not at all well</option>
                </select>

                <label>
                  5. From an Operations point of view, did the production
                  technical aspects of the campaign run smoothly?{" "}
                </label>
                <select
                  required
                  value={campaignrun}
                  onChange={(e) => setCampaignrun(e.target.value)}
                >
                  <option value="">Please Select...</option>
                  <option value="Yes, it went perfectly">
                    Yes, it went perfectly
                  </option>
                  <option value="Yes, but there were some problems">
                    Yes, but there were some problems
                  </option>
                  <option value="No, it didn’t go smoothly but there were Improvements">
                    No, it didn’t go smoothly but there were Improvements
                  </option>
                  <option value="No, it went horribly altogether">
                    No, it went horribly altogether
                  </option>
                </select>

                <label>
                  6. How would you rate the production quality of your campaign?{" "}
                </label>
                <select
                  required
                  value={prodquality}
                  onChange={(e) => setProdquality(e.target.value)}
                >
                  <option value="">Please Select...</option>
                  <option value="High quality ">High quality </option>
                  <option value="Very high quality ">Very high quality </option>
                  <option value="Low quality">Low quality</option>
                  <option value="Very low quality">Very low quality</option>
                </select>

                <label>
                  7. How flexible was the The Hanging House team throughout the
                  project?{" "}
                </label>
                <select
                  required
                  value={flexible}
                  onChange={(e) => setFlexible(e.target.value)}
                >
                  <option value="">Please Select...</option>
                  <option value="Flexible">Flexible</option>
                  <option value="Very flexible">Very flexible</option>
                  <option value="Somewhat flexible">Somewhat flexible</option>
                  <option value="None at all">None at all</option>
                </select>

                <label>
                  8. Overall, how satisfied were you with The Hanging House ’s
                  services?{" "}
                </label>
                <select
                  required
                  value={satisfied}
                  onChange={(e) => setSatisfied(e.target.value)}
                >
                  <option value="">Please Select...</option>
                  <option value="Satisfied">Satisfied</option>
                  <option value="Very satisfied">Very satisfied</option>
                  <option value="Neutral">Neutral</option>
                  <option value="Not so satisfied">Not so satisfied</option>
                  <option value="Not satisfied at all">
                    Not satisfied at all
                  </option>
                </select>

                <label>
                  9. Do you have any suggestions and feedback you would like to
                  share? Were there any concerns that you feel were overlooked?
                </label>
                <textarea
                  placeholder=""
                  value={message1}
                  onChange={(e) => setMessage1(e.target.value)}
                ></textarea>

                <label>
                  10. Kindly write a few words as a testimonial below
                </label>
                <textarea
                  placeholder=""
                  value={message2}
                  onChange={(e) => setMessage2(e.target.value)}
                ></textarea>

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
