import React from "react";
import twt from "../Icons/Twitter-Icon.png";
import insta from "../Icons/Instagram-Icon.png";
import git from "../Icons/GitHub-Icon.png";
import fb from "../Icons/Facebook-Icon.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={twt} alt="twitter-icon" />
      <img src={insta} alt="insta-icon" />
      <img src={git} alt="git-icon" />
      <img src={fb} alt="fb-icon" />
    </footer>
  );
}
