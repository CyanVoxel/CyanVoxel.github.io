import React from "react";
import * as svg_images from "../data/svg_images";

function Footer() {
  return (
    <footer className="footer">
      <p>Get in Touch:</p>
      <a
        href="https://www.linkedin.com/in/travis-abendshien"
        target="_blank"
        rel="noreferrer"
      >
        <span>{svg_images.linkedin_logo}</span>
      </a>

      <a href="https://github.com/CyanVoxel" target="_blank" rel="noreferrer">
        <span>{svg_images.github_logo}</span>
      </a>
      <a href="mailto:travabend@gmail.com">
        <span>{svg_images.email_logo}</span>
      </a>
    </footer>
  );
}

export default Footer;
