import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/projectoverviewpage/projectoverviewpage.css";
import { HackerEffect, HorizontalLine, MiniFooter } from "../../components";
import projects_array from "../ProjectsPage/components/projects";
import ProjectCarousel from "./components/ProjectCarousel";

function ProjectOverviewPage() {
  const navigate = useNavigate();
  const { project_name } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [index, setIndex] = useState(null); // Use state for index

  useEffect(() => {
    const foundIndex = projects_array.findIndex(
      (p) => p.url_name === project_name
    );
    if (foundIndex !== -1) {
      setProjectData(projects_array[foundIndex]);
      setIndex(foundIndex); // Update index state
    } else {
      navigate("/projects");
    }
  }, [project_name, navigate]);

  if (!projectData) {
    return null;
  }

  return (
    <section className="project__overview__page">
      <div className="wrapper">
        <a
          className="back__button light_on"
          style={{ animationDelay: "1s" }}
          href="/projects"
        >
          ← Back to Projects
        </a>
      </div>
      {/* Project Carousel */}
      <ProjectCarousel images={projectData.images} project={project_name} />

      {/* Project Label */}
      <div className="wrapper">
        <div className="project__label">
          <p
            className="project__count PPNeueMontreal light__on"
            style={{ animationDelay: "1s" }}
          >
            Project /{index + 1 < 10 ? `0${index + 1}` : index + 1}
            {projectData.url && (
              <>
                —
                <a href={projectData.url} target="_blank" rel="noreferrer">
                  Visit Site ↗
                </a>
              </>
            )}
          </p>
          <a href={projectData.url} target="_blank" rel="noreferrer">
            <h1 className="project__title ">
              {projectData.name.split("").map((letter, letterIndex) => (
                <HackerEffect
                  key={letterIndex} // Ensure unique key for each letter
                  text={letter === " " ? "\u00A0" : letter} // Handle spaces
                  className={"PPEiko"}
                  scrambleSpeed={20} // Adjust speed as needed
                  startDelay={letterIndex * 100}
                />
              ))}
            </h1>
          </a>
        </div>

        {/* Line */}
        <HorizontalLine />

        <div className="project__description ">
          <p className="PPEiko light__on" style={{ animationDelay: "1.5s" }}>
            {projectData.description}
          </p>
        </div>
      </div>

      <div className="wrapper">
        <MiniFooter />
      </div>
    </section>
  );
}

export default ProjectOverviewPage;
