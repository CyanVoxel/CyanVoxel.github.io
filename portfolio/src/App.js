import inset_logo from "./images/inset_logo.png";
import shard_01 from "./images/shard_01.png";
import shard_02 from "./images/shard_02.png";
import shard_03 from "./images/shard_03.png";
// import newlands_logo from "./images/logos/newlands_logo_text.svg";
// import solutions_logo from "./images/logos/solutions_logo_text.svg";
// import photoreal_logo from "./images/logos/photoreal_logo_text.svg";
// import c_sharp_logo from "./images/logos/c_sharp_logo.svg";
// import javascript_logo from "./images/logos/javascript_logo.svg";
// import swift_logo from "./images/logos/swift_logo.svg";
// import unity_logo_text from "./images/logos/unity_logo_text.svg";
// import blender_logo_text from "./images/logos/blender_logo_text.svg";
// import affinity_photo_logo_text from "./images/logos/affinity_photo_logo_text.svg";
// import photoshop_logo_text from "./images/logos/photoshop_logo_text.svg";
// import heroku_logo_text from "./images/logos/heroku_logo_text.svg";
// import linkedin_logo from "./images/logos/linkedin_logo.svg";
// import github_logo from "./images/logos/github_logo.svg";
// import email_logo from "./images/logos/email.svg";
import newlands_01 from "./images/screenshots/newlands_01.jpg";
import newlands_02 from "./images/screenshots/newlands_02.jpg";
import newlands_03 from "./images/screenshots/newlands_03.jpg";
import solutions_01 from "./images/screenshots/solutions_01.jpg";
import solutions_02 from "./images/screenshots/solutions_02.jpg";
import solutions_03 from "./images/screenshots/solutions_03.jpg";
import photoreal_01 from "./images/screenshots/photoreal_01.jpg";
import photoreal_02 from "./images/screenshots/photoreal_02.jpg";
import photoreal_03 from "./images/screenshots/photoreal_03.jpg";
// import React, { useEffect, useState } from "react";
import * as svg_images from "./svg-images";
import "./App.css";

function App() {
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  var bio_accent = "#c6cdff";
  var newlands_accent = "#C6E3FF";
  var solutions_accent = "#DFC6FF";
  var photoreal_accent = "#FFC6FB";

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <a
          href="https://www.linkedin.com/in/travis-abendshien"
          target="_blank"
          rel="noreferrer"
        >
          <span style={{ fill: bio_accent }}>
            {svg_images.linkedin_logo}
          </span>
        </a>

        <a href="https://github.com/CyanVoxel" target="_blank" rel="noreferrer">
          <span style={{ fill: bio_accent }}>
            {svg_images.github_logo}
          </span>
        </a>
        <a href="mailto:lvnvtravis@gmail.com">
          <span style={{ fill: bio_accent }}>{svg_images.email_logo}</span>
        </a>
      </header>

      {/* Introduction */}
      <div className="intro-container">
        <img src={inset_logo} className="intro-profile" alt="" />
        <div className="text-container">
          <p className="hello-text">Hi there, I'm</p>
          <p className="name-text">Travis Abendshien_</p>
          <p className="bio-text">
            I'm a software engineer with a passion for working on anything from
            games to utilities. Here are a few of the things I've worked on:
          </p>
        </div>
      </div>

      {/* Newlands */}
      <div className="desktop-project-container">
        <div className="desktop-project-shard">
          <img src={shard_01} className="shard" alt="" />
        </div>
        <div className="project-content">
          <span style={{ fill: newlands_accent }}>
            {svg_images.newlands_logo}
          </span>
          <div className="content-bg">
            <div className="content-container">
              <p className="content-text" style={{ color: newlands_accent }}>
                A digital tabletop game about staking your claim in an unknown
                territory! Make strategic investments, devious sabotages, and
                with a little bit of market manipulating, become the next land
                baron billionaire!{" "}
                <a
                  style={{ color: "#61dafb", textDecoration: "underline" }}
                  href="https://github.com/CyanVoxel/Newlands"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Link
                </a>
              </p>
              <div className="tool-icon-container">
                <span style={{ fill: newlands_accent }}>
                  {svg_images.c_sharp_logo}
                </span>
                <div
                  className="tool-divider"
                  style={{ backgroundColor: newlands_accent }}
                ></div>
                <span style={{ fill: newlands_accent }}>
                  {svg_images.unity_logo_text}
                </span>
                <span style={{ fill: newlands_accent }}>
                  {svg_images.photoshop_logo_text}
                </span>
                <span style={{ fill: newlands_accent }}>
                  {svg_images.blender_logo_text}
                </span>
              </div>
            </div>
          </div>
          <div className="thumbnail-container">
            <img className="thumbnail" src={newlands_01} alt=""></img>
            <img className="thumbnail" src={newlands_02} alt=""></img>
            <img className="thumbnail" src={newlands_03} alt=""></img>
          </div>
        </div>
      </div>

      {/* Solutions */}
      <div className="desktop-project-container">
        <div className="desktop-project-shard">
          <img
            src={shard_02}
            className="shard"
            alt=""
            style={{ width: "160%", marginTop: "-10%" }}
          />
        </div>
        <div className="project-content">
          <span style={{ fill: solutions_accent }}>
            {svg_images.solutions_logo}
          </span>
          <div className="content-bg">
            <div className="content-container">
              <p className="content-text" style={{ color: solutions_accent }}>
                A liquid simulation game where color is key! Mix and match your
                vials from a faucet of ever-changing colored liquid to find the
                optimal solution!{" "}
                <a
                  style={{ color: "#61dafb", textDecoration: "underline" }}
                  href="https://cyanvoxel.github.io/solutions-game/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Play in Browser!
                </a>
              </p>
              <div className="tool-icon-container">
                <span style={{ fill: solutions_accent }}>
                  {svg_images.c_sharp_logo}
                </span>
                <span style={{ fill: solutions_accent }}>
                  {svg_images.javascript_logo}
                </span>
                <div
                  className="tool-divider"
                  style={{ backgroundColor: solutions_accent }}
                ></div>
                <span style={{ fill: solutions_accent }}>
                  {svg_images.unity_logo_text}
                </span>
                <span style={{ fill: solutions_accent }}>
                  {svg_images.photoshop_logo_text}
                </span>
                <span style={{ fill: solutions_accent }}>
                  {svg_images.blender_logo_text}
                </span>
              </div>
            </div>
          </div>
          <div className="thumbnail-container">
            <img className="thumbnail" src={solutions_01} alt="" />
            <img
              className="thumbnail"
              src={solutions_02}
              style={{ aspectRatio: "1 / 1" }}
              alt=""
            />
            <img
              className="thumbnail"
              src={solutions_03}
              style={{ aspectRatio: "9 / 16" }}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* PhotoReal */}
      <div className="desktop-project-container">
        <div className="desktop-project-shard">
          <img
            src={shard_03}
            className="shard"
            alt=""
            style={{ width: "170%", marginTop: "-10%", marginRight: "-8%" }}
          />
        </div>
        <div className="project-content">
          <span style={{ fill: photoreal_accent }}>
            {svg_images.photoreal_logo}
          </span>
          <div className="content-bg">
            <div className="content-container">
              <p className="content-text" style={{ color: photoreal_accent }}>
                An AR photo library app that combines your physical and digital
                photo albums! Scan and tag your physical photos, and PhotoReal
                will let you attach additional digital photos that you can view
                in AR right next to your physical ones!{" "}
                <a
                  style={{
                    color: "#61dafb",
                    textDecoration: "underline",
                  }}
                  href="https://www.youtube.com/watch?v=y-SPBTSgcIM"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Demo on YouTube!
                </a>
              </p>
              <div className="tool-icon-container">
                <span style={{ fill: photoreal_accent }}>
                  {svg_images.swift_logo}
                </span>
                <div
                  className="tool-divider"
                  style={{ backgroundColor: photoreal_accent }}
                ></div>
                <span style={{ fill: photoreal_accent }}>
                  {svg_images.heroku_logo_text}
                </span>
              </div>
            </div>
          </div>
          <div className="thumbnail-container">
            <img className="thumbnail-vertical" src={photoreal_01} alt="" />
            <img className="thumbnail-vertical" src={photoreal_02} alt="" />
            <img className="thumbnail-vertical" src={photoreal_03} alt="" />
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>Get in touch:</p>
        <a
          href="https://www.linkedin.com/in/travis-abendshien"
          target="_blank"
          rel="noreferrer"
        >
          <span style={{ fill: bio_accent }}>
            {svg_images.linkedin_logo}
          </span>
        </a>

        <a href="https://github.com/CyanVoxel" target="_blank" rel="noreferrer">
          <span style={{ fill: bio_accent }}>
            {svg_images.github_logo}
          </span>
        </a>
        <a href="mailto:lvnvtravis@gmail.com">
          <span style={{ fill: bio_accent }}>{svg_images.email_logo}</span>
        </a>
      </footer>
    </div>
  );
}

export default App;
