import React from "react";
import "../../styles/projectspage/projectspage.css";
import projects_array from "./components/projects";
import { HackerEffect, HorizontalLine } from "../../components";

function ProjectsPage() {
  return (
    <div className="projects__page wrapper">
      <ul className="projects__list">
        {projects_array.map((project, index) => (
          <>
            <li>
              <a
                href=""
                title={`Explore ${project.name}`}
                data-text={project.name}
              >
                <span className="project__number PPNeueMontreal">
                  PROJECT /{index < 10 ? "0" : ""}
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
              </a>
            </li>
            {projects_array.length !== index + 1 && <HorizontalLine />}
          </>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsPage;
