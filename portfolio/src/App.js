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
import scheduler_01 from "./images/screenshots/scheduler_01.jpg";
import tagger_01 from "./images/screenshots/tagger_01.jpg";
import pomelo_01 from "./images/screenshots/pomelo_01.jpg";
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
  var bright_accent = "#dbe0ff";
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
          <span style={{ fill: bright_accent }}>
            {svg_images.linkedin_logo}
          </span>
        </a>

        <a href="https://github.com/CyanVoxel" target="_blank" rel="noreferrer">
          <span style={{ fill: bright_accent }}>{svg_images.github_logo}</span>
        </a>
        <a href="mailto:lvnvtravis@gmail.com">
          <span style={{ fill: bright_accent }}>{svg_images.email_logo}</span>
        </a>
      </header>

      {/* Introduction */}
      <div className="intro-container">
        <img src={inset_logo} className="intro-profile" alt="" />
        <div className="text-container">
          <p className="hello-text" style={{ color: solutions_accent }}>
            Hi there, I'm
          </p>
          <p className="name-text">Travis Abendshien_</p>
          <p className="bio-text" style={{ color: bio_accent }}>
            I'm a software engineer with a passion for working on anything from
            games to utilities. Here are a few of the things I've worked on:
          </p>
        </div>
      </div>

      {/* Newlands */}
      <div className="bp-container">
        <div className="shard-container">
          <img src={shard_01} className="shard" alt="" />
        </div>
        <div className="bp-content">
          <span style={{ fill: newlands_accent }}>
            {svg_images.newlands_logo}
          </span>
          <div className="bp-description-bg">
            <div className="bp-description-container">
              <p style={{ color: newlands_accent }}>
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
          <div className="bp-thumbnail-container">
            <img className="bp-thumbnail" src={newlands_01} alt=""></img>
            <img className="bp-thumbnail" src={newlands_02} alt=""></img>
            <img className="bp-thumbnail" src={newlands_03} alt=""></img>
          </div>
        </div>
      </div>

      {/* Solutions */}
      <div className="bp-container">
        <div className="shard-container">
          <img
            src={shard_02}
            className="shard"
            alt=""
            style={{ width: "160%", marginTop: "-10%" }}
          />
        </div>
        <div className="bp-content">
          <span style={{ fill: solutions_accent }}>
            {svg_images.solutions_logo}
          </span>
          <div className="bp-description-bg">
            <div className="bp-description-container">
              <p style={{ color: solutions_accent }}>
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
          <div className="bp-thumbnail-container">
            <img className="bp-thumbnail" src={solutions_01} alt="" />
            <img
              className="bp-thumbnail"
              src={solutions_02}
              style={{ aspectRatio: "1 / 1" }}
              alt=""
            />
            <img
              className="bp-thumbnail"
              src={solutions_03}
              style={{ aspectRatio: "9 / 16" }}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* PhotoReal */}
      <div className="bp-container">
        <div className="shard-container">
          <img
            src={shard_03}
            className="shard"
            alt=""
            style={{ width: "170%", marginTop: "-10%", marginRight: "-8%" }}
          />
        </div>
        <div className="bp-content">
          <span style={{ fill: photoreal_accent }}>
            {svg_images.photoreal_logo}
          </span>
          <div className="bp-description-bg">
            <div className="bp-description-container">
              <p style={{ color: photoreal_accent }}>
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
                  View Demo on YouTube
                </a>
                &nbsp;•&nbsp;
                <a
                  style={{
                    color: "#61dafb",
                    textDecoration: "underline",
                  }}
                  href="https://github.com/CyanVoxel/PhotoReal"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Link
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
          <div className="bp-thumbnail-container">
            <img className="bp-thumbnail-vertical" src={photoreal_01} alt="" />
            <img className="bp-thumbnail-vertical" src={photoreal_02} alt="" />
            <img className="bp-thumbnail-vertical" src={photoreal_03} alt="" />
          </div>
        </div>
      </div>

      <h4 style={{ color: photoreal_accent }}>—OTHER PROJECTS—</h4>

      {/* Appointment Scheduler */}
      <div className="sp-flex">
        <div className="sp-container">
          <div className="sp-title" style={{ color: newlands_accent }}>
            APPOINTMENT SCHEDULER
          </div>
          <div className="sp-description" style={{ color: bright_accent }}>
            <i>
              Developed a Java + JavaFX application that allows users to create
              and access company appointments and customer entries.
            </i>
            <ul>
              <li>
                Used Resource Bundles to provide date, time, and language
                localization
              </li>
              <li>
                Utilized a MySQL database for organized data storage and
                retrieval
              </li>
              <li>
                Implemented a report generation feature that includes custom
                filtering
              </li>
            </ul>
            <img src={scheduler_01} alt="" />
          </div>
          <div className="tool-icon-container">
            <span style={{ fill: newlands_accent }}>
              {svg_images.java_logo}
            </span>
            <span style={{ fill: newlands_accent }}>{svg_images.sql_logo}</span>
          </div>
        </div>

        {/* Image Tagger */}
        <div className="sp-container">
          <div className="sp-title" style={{ color: solutions_accent }}>
            IMAGE TAGGER
          </div>
          <div className="sp-description" style={{ color: bright_accent }}>
            <i>
              Developed a Python tool to build metadata-rich image libraries
              that adds tags, titles, descriptions, and more to photos.
            </i>
            <ul>
              <li>
                Created a custom image tagging solution featuring a simple
                interface that allows for the efficient tagging and organization
                of photos
              </li>
              <li>
                Designed a JSON-based savefile system with the purpose of being
                portable, expandable, human readable, and backwards compatible
              </li>
              <li>
                Integrated{" "}
                <a
                  href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/"
                  style={{ color: "#61dafb", textDecoration: "underline" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  Beautiful Soup
                </a>{" "}
                to automatically scrape source websites for quick & easy
                metadata retrieval
              </li>
            </ul>
            <img src={tagger_01} alt="" />
          </div>
          <div className="tool-icon-container">
            <span style={{ fill: solutions_accent }}>
              {svg_images.python_logo}
            </span>
          </div>
        </div>

        {/* Discord Pomodoro Bot */}
        <div className="sp-container">
          <div className="sp-title" style={{ color: photoreal_accent }}>
            DISCORD POMODORO BOT
          </div>
          <div className="sp-description" style={{ color: bright_accent }}>
            <i>
              Created a bot for Discord that allows the user to setup
              Pomodoro-style timers to study or work with friends!
            </i>
            <ul>
              <li>
                Worked with the{" "}
                <a
                  href="https://discordpy.readthedocs.io/en/stable/index.html"
                  style={{ color: "#61dafb", textDecoration: "underline" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  Discord.py
                </a>{" "}
                API wrapper to connect the bot with Discord's services
              </li>
              <li>
                Built a robust command input system that allows for complete
                customization of the timers' settings
              </li>
              <li>
                Created a tool used often by myself and friends to solve a need
                in a novel way
              </li>
            </ul>
            <img src={pomelo_01} alt="" />
          </div>
          <div className="tool-icon-container">
            <span style={{ fill: photoreal_accent }}>
              {svg_images.python_logo}
            </span>
          </div>
        </div>
      </div>

      <footer className="footer" style={{ color: bright_accent }}>
        <p>Get in Touch:</p>
        <a
          href="https://www.linkedin.com/in/travis-abendshien"
          target="_blank"
          rel="noreferrer"
        >
          <span style={{ fill: bright_accent }}>
            {svg_images.linkedin_logo}
          </span>
        </a>

        <a href="https://github.com/CyanVoxel" target="_blank" rel="noreferrer">
          <span style={{ fill: bright_accent }}>{svg_images.github_logo}</span>
        </a>
        <a href="mailto:lvnvtravis@gmail.com">
          <span style={{ fill: bright_accent }}>{svg_images.email_logo}</span>
        </a>
      </footer>
    </div>
  );
}

export default App;
