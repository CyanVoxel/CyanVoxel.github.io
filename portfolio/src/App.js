import React, { useEffect, useState } from "react";
import "./App.css";
import "animate.css";
import Social from "./components/Social.jsx";
import Header from "./components/Header.jsx";
import projects from "./data/featured_projects";
import FeaturedProject from "./components/FeaturedProject";
import ProjectModal from "./components/ProjectModal";
import Footer from "./components/Footer";
// import particle_options from "./data/particle_options.js";

function App() {
  // State Management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "My Project",
    logo: null,
    color: {},
    description: "Lorem Ipsum Description.",
    languages: [],
    tools: [],
    images: [],
  });

  function toggleModal(modalData = null) {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen == false) {
      setModalData(modalData);
      // Stops the ability to scroll in the body
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none"; // iOS/Safari
    } else {
      // Re-enables the ability to scroll in the body
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "unset"; // iOS/Safari
    }
  }
  return (
    <div className="App">
      {/* <Particles options={particle_options} style={{ position: "absolute" }}/> */}
      <Social />
      <ProjectModal
        isOpen={isModalOpen}
        toggleIsOpen={toggleModal}
        projectData={modalData}
      />
      <Header />
      <div className="fp-section">
        {projects.map((project) => (
          <FeaturedProject
            key={project.title}
            title={project.title}
            logo={project.logo}
            key_image={project.key_image}
            color={project.color}
            description={project.description}
            task_list={project.task_list}
            languages={project.languages}
            tools={project.tools}
            images={project.images}
            onClick={toggleModal}
          />
        ))}
      </div>
      {/* <h3>—NON-SOFTWARE—</h3> */}
      <Footer />
    </div>
  );
}

export default App;
