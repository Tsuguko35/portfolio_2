import React from "react";
import "../../styles/aboutpage/aboutpage.css";
import { HackerEffect, MiniFooter } from "../../components";
import about_details from "./components/aboutdetails";

function AboutPage() {
  return (
    <div className="about__page wrapper">
      {/* Profile  */}
      <section className="about__page__profile">
        <div className="about__page__profile__labels">
          <span className="light__on" style={{ animationDelay: "1.2s" }}>
            Hello, I'm
          </span>
          <h1 className="name">
            {about_details.name.split("").map((letter, index) => (
              <HackerEffect
                key={index} // Ensure unique key for each letter
                text={letter === " " ? "\u00A0" : letter} // Handle spaces
                className={"letter PPEiko"}
                scrambleSpeed={10} // Adjust speed as needed
                startDelay={index * 100}
              />
            ))}
          </h1>
        </div>
        <div className="about__page__profile__image">
          <div className="image light__on" style={{ animationDelay: "1.5s" }}>
            <img src={about_details.profile_image} alt="profile" />
          </div>
        </div>
      </section>

      {/* Summary  */}
      <section className="about__page__details">
        <span className="label">About&nbsp;&nbsp;▶</span>
        <div className="detail">
          <p className="summary">{about_details.summary}</p>
        </div>
      </section>

      {/* Skills  */}
      <section className="about__page__details">
        <span className="label">Skills&nbsp;&nbsp;▶</span>
        <div className="detail">
          <ul className="skills__list">
            {about_details.skills.map((skill, index) => (
              <li className="skill" key={`skiil-${index}`}>
                {skill.icon}
                {skill.skill_name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience  */}
      <section className="about__page__details">
        <span className="label">Experience&nbsp;&nbsp;▶</span>
        <div className="detail column">
          {about_details.experience.map((experience, index) => (
            <div className="experience__container" key={`experience-${index}`}>
              <div className="stepper">
                <div className="stepper__ball"></div>
              </div>
              <div className="experience__details">
                <div className="experience__label">
                  <div className="company__position">
                    <p className="poisition">{experience.position}</p>
                    <span className="company__name PPEiko">
                      {experience.company}
                    </span>
                  </div>
                  <div className="duration">
                    <p>— {experience.duration}</p>
                  </div>
                </div>
                <div className="experience__summary">{experience.summary}</div>
                <div className="experience__tech__stack">
                  {experience.tech_stack.map((tech, index) => (
                    <React.Fragment key={`stack-${index}`}>
                      <p>{tech}</p>
                      {index + 1 !== experience.tech_stack.length ? (
                        <p className="line">|</p>
                      ) : (
                        ""
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education  */}
      <section className="about__page__details">
        <span className="label">Education&nbsp;&nbsp;▶</span>
        <div className="detail column">
          {about_details.education.map((education, index) => (
            <div className="experience__container" key={`education-${index}`}>
              <div className="stepper">
                <div className="stepper__ball"></div>
              </div>
              <div className="experience__details">
                <div className="experience__label">
                  <div className="company__position">
                    <span className="company__name PPEiko">
                      {education.school_name}
                    </span>
                    <p className="poisition">{education.course}</p>
                  </div>
                  <div className="duration">
                    <p>— {education.duration}</p>
                  </div>
                </div>
                {education.awards && (
                  <div className="experience__tech__stack">
                    <p>Awards: {education.awards}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <MiniFooter />
    </div>
  );
}

export default AboutPage;
