import React, { useState } from "react";
import "../../styles/projectspage/projectspage.css";
import projects_array from "./components/projects";
import { DelayedLink, HackerEffect, HorizontalLine } from "../../components";
import ProjectImages from "./components/ProjectImages";

function ProjectsPage() {
  const [image, setImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const projectHover = (image, index) => {
    setImage(image);
    setCurrentIndex(index);
  };
  return (
    <div className="projects__page wrapper">
      <ul className="projects__list">
        {projects_array.map((project, index) => (
          <>
            <li onMouseEnter={() => projectHover(project.thumbnail, index)}>
              <DelayedLink
                to={`/projects/${project.url_name}`}
                title={`Explore ${project.name}`}
                data-text={project.name}
              >
                <span className="project__number PPNeueMontreal">
                  PROJECT /{index + 1 < 10 ? "0" : ""}
                  {index + 1}
                </span>
                <h2 className="project__name">
                  <p className="name">
                    {project.name.split("").map((letter, index) => (
                      <HackerEffect
                        key={index} // Ensure unique key for each letter
                        text={letter === " " ? "\u00A0" : letter} // Handle spaces
                        className={"PPEiko"}
                        scrambleSpeed={20} // Adjust speed as needed
                        startDelay={index * 100}
                      />
                    ))}
                  </p>
                  <span className="arrow">→</span>
                </h2>
              </DelayedLink>
            </li>
            {projects_array.length !== index + 1 && <HorizontalLine />}
          </>
        ))}

        {image && <ProjectImages imageSrc={image} index={currentIndex} />}
      </ul>
    </div>
  );
}

export default ProjectsPage;
