import * as svg_images from "./svg_images";
import newlands_01 from "../images/screenshots/newlands_01.jpg";
import newlands_02 from "../images/screenshots/newlands_02.jpg";
import newlands_03 from "../images/screenshots/newlands_03.jpg";
import solutions_01 from "../images/screenshots/solutions_01.jpg";
import solutions_02 from "../images/screenshots/solutions_02.jpg";
import solutions_03 from "../images/screenshots/solutions_03.jpg";
import solutions_04 from "../images/screenshots/solutions_04.jpg";
import photoreal_01 from "../images/screenshots/photoreal_01.jpg";
import photoreal_02 from "../images/screenshots/photoreal_02.jpg";
import photoreal_03 from "../images/screenshots/photoreal_03.jpg";
import scheduler_01 from "../images/screenshots/scheduler_01.jpg";
import tagstudio_01 from "../images/screenshots/tagstudio_01.png";
import pomelo_01 from "../images/screenshots/pomelo_01.jpg";
import apriori_01 from "../images/screenshots/apriori_01.png";
import website_01 from "../images/screenshots/website_01.jpg";
import * as colors from "./palette.js";

// NOTE: For best results,
// Enter -15 Degrees for Vertical screenshots
// and -45 Degrees for Horizontal ones
// Max Width for Landscape Key Images: max-width: 20rem;
// Adjust Right margin as necessary

const big_projects = [
  {
    title: "Game Genre Machine Learning Analysis",
    logo: null,
    color: colors.blue,
    key_image: apriori_01,
    description: ({ color }) => (
      <p style={{ color: color }}>
        A Jupyter Notebook project that leverages machine learning to
        uncover novel associations between video game genre clusters and
        positive/negative user ratings.
        <br />
        <a
          href="https://mybinder.org/v2/gh/CyanVoxel/Steam-Apriori-Analysis/HEAD"
          target="_blank"
          rel="noreferrer"
        >
          Launch Binder
        </a>
      </p>
    ),
    task_list: ({ color }) => (
      <ul style={{ color: color }}>
        <li>
          Worked with Jupyter Notebook to build a machine learning model based
          on a dataset of Steam games, their genres, and user ratings
        </li>
        <li>
          Implemented an Apriori algorithm to find novel associations between
          clusters of genres and positive/negative ratings from players
        </li>
        <li>
          Produced data visualizations using the Pandas and Matplotlib Python
          libraries
        </li>
      </ul>
    ),
    languages: [svg_images.python_logo],
    tools: [svg_images.jupyter_logo_text],
    images: [],
  },
  {
    title: "Solutions",
    logo: svg_images.solutions_logo,
    color: colors.lavender,
    key_image: solutions_04,
    description: ({ color }) => (
      <p style={{ color: color }}>
        A liquid simulation game where color is key! Mix and match your vials
        from a faucet of ever-changing colored liquid to find the optimal
        solution!
        <br />
        <a
          href="https://cyanvoxel.github.io/solutions-game/"
          target="_blank"
          rel="noreferrer"
        >
          Play in Browser!
        </a>
      </p>
    ),
    task_list: ({ color }) => (
      <ul style={{ color: color }}>
        <li>
          Developed a lightweight liquid simulation game targeted for WebGL and
          Android
        </li>
        <li>
          Used particle simulation in conjunction with HLSL shaders to mimic the
          behavior of colored liquid interactions
        </li>
      </ul>
    ),
    languages: [svg_images.c_sharp_logo, svg_images.javascript_logo],
    tools: [
      svg_images.unity_logo_text,
      svg_images.photoshop_logo_text,
      svg_images.blender_logo_text,
    ],
    images: [solutions_01, solutions_02, solutions_03],
  },
  {
    title: "Tag Studio",
    logo: null,
    color: colors.cyan,
    key_image: tagstudio_01,
    description: ({ color }) => (
      <p style={{ color: color }}>
        A Python GUI application that creates metadata-rich media file libraries
        and features a robust attribute-value tagging system.
      </p>
    ),
    task_list: ({ color }) => (
      <ul style={{ color: color }}>
        <li>
          Developed a custom media file tagging app with Python and{" "}
          <a
            href="https://docs.python.org/3/library/tkinter.html"
            target="_blank"
            rel="noreferrer"
          >
            Tkinter
          </a>{" "}
          that allows for quick and efficient tagging and organization of photos
          and videos
        </li>
        <li>
          Built a robust attribute-value tag system that allows user-defined
          tags to reference other tags as attributes, giving way to powerful
          search queries
        </li>
        {/* <li>
          Designed a JSON-based savefile system with the purpose of being
          portable, expandable, human readable, and backwards compatible
        </li> */}
        <li>
          Integrated{" "}
          <a
            href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/"
            target="_blank"
            rel="noreferrer"
          >
            Beautiful Soup
          </a>{" "}
          to automatically scrape source websites for quick & easy metadata
          retrieval
        </li>
      </ul>
    ),
    languages: [svg_images.python_logo],
    tools: [],
    images: [],
  },
  {
    title: "React Portfolio Website",
    logo: null,
    color: colors.blue,
    key_image: website_01,
    description: ({ color }) => (
      <p style={{ color: color }}>
        Built a React-based website to display various Software Development
        portfolio items. <i>You are Here!</i>
        <br />
        <a
          href="https://github.com/CyanVoxel/CyanVoxel.github.io"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Link
        </a>
      </p>
    ),
    task_list: ({ color }) => (
      <ul style={{ color: color }}>
        <li>
          Built a software development portfolio website using React and{" "}
          <a href="https://animate.style/" target="_blank" rel="noreferrer">
            Animate.css
          </a>{" "}
        </li>
        <li>
          Implemented a responsive design with mobile-friendly and ultra-wide
          variants
        </li>
        <li>
          Used Effect Hooks to manage component state for elements such as modal
          popups
        </li>
      </ul>
    ),
    languages: [
      svg_images.javascript_logo,
      svg_images.html5_logo_text,
      svg_images.css3_logo_text,
    ],
    tools: [svg_images.react_logo],
    images: [],
  },
  {
    title: "Newlands",
    logo: svg_images.newlands_logo,
    color: colors.blue,
    key_image: newlands_01,
    description: ({ color }) => (
      <p style={{ color: color }}>
        A digital tabletop game about staking your claim in an unknown
        territory! Make strategic investments, devious sabotages, and with a
        little bit of market manipulating, become the next land baron
        billionaire!
        <br />
        <a
          href="https://github.com/CyanVoxel/Newlands"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Link
        </a>
      </p>
    ),
    task_list: ({ color }) => (
      <ul style={{ color: color }}>
        <li>
          Developed a P2P multiplayer board game using Unity and a third-party
          networking API
        </li>
        <li>
          Utilized a server-authoritative model to maintain game state integrity
          and to prevent cheating
        </li>
        <li>
          Leveraged client-side prediction to reduce input delay and improve
          responsiveness by speculating that the client’s request was valid
          before receiving a response from the server
        </li>
      </ul>
    ),
    languages: [svg_images.c_sharp_logo],
    tools: [
      svg_images.unity_logo_text,
      svg_images.photoshop_logo_text,
      svg_images.blender_logo_text,
    ],
    images: [newlands_01, newlands_02, newlands_03],
  },

  {
    title: "PhotoReal",
    logo: svg_images.photoreal_logo,
    color: colors.purple,
    key_image: photoreal_03,
    description: ({ color }) => (
      <p style={{ color: color }}>
        An AR photo library app that combines your physical and digital photo
        albums! Scan and tag your physical photos, and PhotoReal will let you
        attach additional digital photos that you can view in AR right next to
        your physical ones!
        <br />
        <a
          href="https://www.youtube.com/watch?v=y-SPBTSgcIM"
          target="_blank"
          rel="noreferrer"
        >
          View Demo on YouTube
        </a>
        &nbsp;•&nbsp;
        <a
          href="https://github.com/CyanVoxel/PhotoReal"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Link
        </a>
      </p>
    ),
    task_list: ({ color }) => (
      <ul style={{ color: color }}>
        <li>
          Developed an AR photo library app that allows users to associate
          virtual photo albums with physical ones using Apple’s ARKit
        </li>
        <li>
          Implemented two core features: Image recognition to identify user
          photos, and AR functionality to present the virtual photos and text
          around the physical photos
        </li>
        <li>
          Worked with a team to develop the app using version control (Git), and
          employed Agile methodology to plan and meet sprints
        </li>
      </ul>
    ),
    languages: [svg_images.swift_logo],
    tools: [svg_images.heroku_logo_text],
    images: [photoreal_01, photoreal_02, photoreal_03],
  },
  {
    title: "Discord Pomodoro Bot",
    logo: null,
    color: colors.lavender,
    key_image: pomelo_01,
    description: ({ color }) => (
      <p style={{ color: color }}>
        Created a bot for Discord that allows the user to setup Pomodoro-style
        timers to study or work with friends!
      </p>
    ),
    task_list: ({ color }) => (
      <ul style={{ color: color }}>
        <li>
          Worked with the{" "}
          <a
            href="https://discordpy.readthedocs.io/en/stable/index.html"
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
          Created a tool used often by myself and friends to solve a need in a
          novel way
        </li>
      </ul>
    ),
    languages: [svg_images.python_logo],
    tools: [],
    images: [],
  },
  {
    title: "Appointment Scheduler",
    logo: null,
    color: colors.pink,
    key_image: scheduler_01,
    description: ({ color }) => (
      <p style={{ color: color }}>
        Developed a Java + JavaFX application that allows users to create and
        access company appointments and customer entries.
      </p>
    ),
    task_list: ({ color }) => (
      <ul style={{ color: color }}>
        <li>
          Used Resource Bundles to provide date, time, and language localization
        </li>
        <li>
          Utilized a MySQL database for organized data storage and retrieval
        </li>
        <li>
          Implemented a report generation feature that includes custom filtering
        </li>
      </ul>
    ),
    languages: [svg_images.java_logo, svg_images.sql_logo],
    tools: [],
    images: [],
  },
];

export default big_projects;
