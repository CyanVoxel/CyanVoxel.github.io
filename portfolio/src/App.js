import logo from "./logo.png";
import shard_01 from "./images/shard_01.png";
import shard_02 from "./images/shard_02.png";
import shard_03 from "./images/shard_03.png";
import newlands_logo from "./images/logos/newlands_logo_text.svg";
import solutions_logo from "./images/logos/solutions_logo_text.svg";
import photoreal_logo from "./images/logos/photoreal_logo_text.svg";
import c_sharp_logo from "./images/logos/c_sharp_logo.svg";
import javascript_logo from "./images/logos/javascript_logo.svg";
import swift_logo from "./images/logos/swift_logo.svg";
import unity_logo from "./images/unity.svg";
import unity_logo_text from "./images/logos/unity_logo_text.svg";
import blender_logo_text from "./images/logos/blender_logo_text.svg";
import affinity_photo_logo_text from "./images/logos/affinity_photo_logo_text.svg";
import photoshop_logo_text from "./images/logos/photoshop_logo_text.svg";
import heroku_logo_text from "./images/logos/heroku_logo_text.svg";
import thumb_01 from "./images/screenshots/thumb_01.png";
import thumb_02 from "./images/screenshots/thumb_02.png";
import thumb_03 from "./images/screenshots/thumb_03.png";
import photoreal_01 from "./images/screenshots/photoreal_01.jpg";
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
      <div className="intro-container">
        <img src={logo} className="intro-profile" />
        <div className="text-container">
          <p className="hello-text">Hi there, I'm</p>
          <p className="name-text">Travis Abendshien_</p>
          <p className="hello-text">
            I'm a software engineer blah blah blah, here are some of the
            projects I've worked on:
          </p>
        </div>
      </div>

      <div className="project-container">
        <img
          src={newlands_logo}
          className="newlands-title"
          alt="Newlands"
        ></img>
        <div className="description-container">
          <img src={shard_01} className="shard-01" alt="shard" />
          <div className="content-bg">
            <div className="content-container">
              <p className="content-text">
                A digital tabletop game about staking your claim in an unknown
                territory! Make strategic investments, devious sabotages, and
                with a little bit of market manipulating, become the next land
                baron billionaire!{" "}
                <a
                  style={{ color: "#61dafb", textDecoration: "underline" }}
                  href="https://github.com/CyanVoxel/Newlands"
                  target="_blank"
                >
                  GitHub Link
                </a>
              </p>
              <div className="tool-icon-container">
                <img src={c_sharp_logo} className="tool-icon" alt="C#"></img>
                <div className="tool-divider"></div>
                <img
                  src={unity_logo_text}
                  className="tool-icon"
                  alt="Unity"
                ></img>
                <img
                  src={photoshop_logo_text}
                  className="tool-icon"
                  alt="Adobe Photoshop CC"
                ></img>
                <img
                  src={blender_logo_text}
                  className="tool-icon"
                  alt="Blender"
                ></img>
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

      <div className="project-container">
        <img
          src={solutions_logo}
          className="newlands-title"
          alt="Solutions"
          style={{
            marginBottom: "-7%",
            marginLeft: "39%",
            height: "7.25vw",
            maxHeight: "140px",
          }}
        />
        <div className="description-container">
          <img src={shard_02} className="shard-01" alt="shard" />
          <div className="content-bg">
            <div className="content-container">
              <p className="content-text">
                A liquid simulation game where color is key! Mix and match your
                vials from a faucet of ever-changing colored liquid to find the
                optimal solution!{" "}
                <a
                  style={{ color: "#61dafb", textDecoration: "underline" }}
                  href="https://cyanvoxel.github.io/solutions-game/"
                  target="_blank"
                >
                  Play in Browser!
                </a>
              </p>
              <div className="tool-icon-container">
                <img src={c_sharp_logo} className="tool-icon" alt="C#"></img>
                <img
                  src={javascript_logo}
                  className="tool-icon"
                  alt="Javascript"
                ></img>
                <div className="tool-divider"></div>
                <img
                  src={unity_logo_text}
                  className="tool-icon"
                  alt="Unity"
                ></img>
                <img
                  src={photoshop_logo_text}
                  className="tool-icon"
                  alt="Adobe Photoshop CC"
                ></img>
                <img
                  src={blender_logo_text}
                  className="tool-icon"
                  alt="Blender"
                ></img>
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

      <div className="project-container">
        <img
          src={photoreal_logo}
          className="newlands-title"
          alt="PhotoReal"
          style={{
            marginBottom: "-5%",
            marginLeft: "37%",
            height: "7.25vw",
            maxHeight: "140px",
          }}
        />
        <div className="description-container">
          <img
            src={shard_03}
            className="shard-01"
            alt="shard"
            style={{
              marginRight: "-15%",
              marginLeft: "-9%",
            }}
          />
          <div className="content-bg" style={{ paddingLeft: "19%" }}>
            <div className="content-container">
              <p className="content-text" style={{}}>
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
                >
                  View Demo on YouTube!
                </a>
              </p>
              <div className="tool-icon-container">
                <img src={swift_logo} className="tool-icon" alt="Swift"></img>
                <div className="tool-divider"></div>
                <img
                  src={heroku_logo_text}
                  className="tool-icon"
                  alt="Heroku"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="thumbnail-container" style={{ marginRight: "17%" }}>
          <img className="thumbnail-vertical" src={photoreal_01} />
          <img className="thumbnail-vertical" src={thumb_02} />
          <img className="thumbnail-vertical" src={thumb_03} />
        </div>
      </div>
    </div>
  );
}

export default App;
