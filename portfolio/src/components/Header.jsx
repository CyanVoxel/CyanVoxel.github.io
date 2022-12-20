import React from "react";
import profile from "../images/profile.png";

function Header() {
  return (
    <header className="intro-section">
      <div className="intro-content">
        <img src={profile} className="intro-profile" alt="" />
        <div className="intro-text">
          <h2>Hi there, I'm</h2>
          <h1>Travis Abendshien</h1>
          <p className="bio-text">
            I'm a software engineer with a passion for developing anything from
            games and websites to utility apps. Here are a few of the things
            I've worked on:
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
