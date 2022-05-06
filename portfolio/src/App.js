import logo from "./logo.png";
import shard_01 from "./images/shard_01.png";
import shard_02 from "./images/shard_02.png";
import newlands_logo from "./images/newlands_logo_text.svg";
import c_sharp_logo from "./images/c_sharp.svg";
import unity_logo from "./images/unity.svg";
import unity_logo_text from "./images/logos/unity_logo_text.svg";
import blender_logo_text from "./images/logos/blender_logo_text.svg";
import affinity_photo_logo_text from "./images/logos/affinity_photo_logo_text.svg";
import photoshop_logo_text from "./images/logos/photoshop_logo_text.svg";
import thumb_01 from "./images/screenshots/thumb_01.png";
import thumb_02 from "./images/screenshots/thumb_02.png";
import thumb_03 from "./images/screenshots/thumb_03.png";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <div className="App">
      <div className="project-container">
        <img src={newlands_logo} className="newlands-title" alt="Newlands"></img>
        <div className="newlands-container">
          <img src={shard_01} className="shard-01" alt="shard" />
          <div className="content-bg">
            <div className="content-container">
              <p className="content-text">
                A digital tabletop game about staking your claim in an unknown territory! Make strategic investments, devious sabotages, and with a little bit of market manipulating, become the next land baron billionaire! <a style={{ color: "#61dafb", textDecoration: "underline" }} href="https://github.com/CyanVoxel/Newlands" target="_blank">GitHub Link</a>
              </p>
              <div className="tool-icon-container">
                <img src={c_sharp_logo} className="tool-icon" alt="C#"></img>
                <div className="tool-divider"></div>
                <img src={unity_logo_text} className="tool-icon" alt="Unity"></img>
                <img src={photoshop_logo_text} className="tool-icon" alt="Adobe Photoshop CC"></img>
                <img src={blender_logo_text} className="tool-icon" alt="Blender"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="thumbnail-container">
            <img className="thumbnail" src={thumb_01}></img>
            <img className="thumbnail" src={thumb_02}></img>
            <img className="thumbnail" src={thumb_03}></img>
          </div>
      </div>

      <header className="project-container">
        <p className="newlands-title">maybe a lot less?</p>
        <div className="newlands-container">
          <img src={shard_02} className="shard-01" alt="shard" />
          <div className="content-bg">
            <div className="content-container">
              <p className="content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>

  );
}

export default App;
