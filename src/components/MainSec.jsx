import React from "react";
import pic from "../Icons/Rectangle-90.png";
import mail from "../Icons/Icon.png";
import linkedin from "../Icons/Vector.png";

function MainSec() {
  return (
    <div className="main-sec">
      <img src={pic} alt="main-image" className="pic" />
      <h2>Laura Smith</h2>
      <p>Frontend Developer</p>
      <p>laurasmith.website</p>
      <div className="btns">
        <button>
          <span>
            <img src={mail} alt="Icon" />
          </span>{" "}
          Email
        </button>
        <button className="blue-btn">
          <span>
            <img src={linkedin} alt="Icon" />
          </span>{" "}
          LinkedIn
        </button>
      </div>
      <div className="about">
        <h2>About</h2>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h2>Interests</h2>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}

export default MainSec;
