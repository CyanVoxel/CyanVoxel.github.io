import React from "react";

function FeaturedProject({
  title,
  logo,
  color,
  key_image,
  description: Description,
  task_list,
  languages,
  tools,
  images,
  onClick,
}) {
  var title_obj;
  if (logo != null) {
    title_obj = <span style={{ fill: color.primary }}>{logo}</span>;
  } else {
    title_obj = (
      <h1 className="fp-title" style={{ color: color.primary }}>
        {title.toUpperCase()}
      </h1>
    );
  }
  var modal_data = {
    title: title,
    logo: logo,
    color: color,
    description: Description,
    task_list,
    languages: languages,
    tools: tools,
    images: [key_image].concat(images),
  };

  // console.log(key_image.concat(images))

  return (
    <div className="fp-container">
      <img
        src={key_image}
        className="fp-key-image"
        style={{ backgroundColor: color.primary, borderColor: color.shadow }}
        alt=""
        onClick={() => onClick(modal_data)}
      />
      <div className="fp-description-container">
        {title_obj}
        <div className="fp-description">
          <Description color={color.highlight} />
        </div>
        <div>
          <img
            src={key_image}
            className="fp-mobile-key-image"
            style={{
              backgroundColor: color.primary,
              borderColor: color.shadow,
            }}
            alt=""
            onClick={() => onClick(modal_data)}
          />
        </div>
        <div className="tool-icon-container">
          {languages.map((language) => (
            <span style={{ fill: color.primary, stroke: color.primary }}>
              {language}
            </span>
          ))}
          {tools.length > 0 ? (
            <div
              className="tool-divider"
              style={{ backgroundColor: color.primary }}
            ></div>
          ) : null}
          {tools.map((tool) => (
            <span style={{ fill: color.primary, stroke: color.primary }}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
