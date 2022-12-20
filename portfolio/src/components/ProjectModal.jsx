import React, { useEffect, useState } from "react";

function ProjectModal({ isOpen, toggleIsOpen, projectData }) {
  // const [isOpen, setIsOpen] = useState(false);

  // setIsOpen(state);
  // const toggleDetailsOpen = () => {
  // 	setDetailsOpen(!detailsOpen)
  // }
  var title_obj;
  if (projectData.logo != null) {
    title_obj = (
      <span style={{ fill: projectData.color.primary }}>
        {projectData.logo}
      </span>
    );
  } else {
    title_obj = (
      <h1 className="pm-title" style={{ color: projectData.color.primary }}>
        {projectData.title.toUpperCase()}
      </h1>
    );
  }

  // const Description = projectData.description;
  console.log(projectData.images[0]);

  return isOpen ? (
    <div className="shade-screen">
      <div className="modal-section">
        <button onClick={toggleIsOpen} className="close-button" role="button">
          x
        </button>
        <div className="modal-container">
          <div className="modal-text-container">
            {title_obj}
            {/* <projectData.description color={projectData.color.highlight}/> */}
            <projectData.task_list color={projectData.color.highlight} />
            <div className="tool-icon-container">
              {projectData.languages.map((language) => (
                <span style={{ fill: projectData.color.primary, stroke: projectData.color.primary }}>
                  {language}
                </span>
              ))}
              {projectData.tools.length > 0 ? (
                <div
                  className="tool-divider"
                  style={{ backgroundColor: projectData.color.primary }}
                ></div>
              ) : null}
              {projectData.tools.map((tool) => (
                <span style={{ fill: projectData.color.primary, stroke: projectData.color.primary }}>{tool}</span>
              ))}
            </div>
          </div>
          <div className="modal-lightbox">
            <div className="modal-lightbox-big-img">
              <img
                src={projectData.images[0]}
                style={{
                  borderColor: projectData.color.primary,
                }}
                alt=""
              />
            </div>
            <div className="modal-lightbox-roll-container"></div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default ProjectModal;
