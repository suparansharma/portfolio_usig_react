import React from "react";
import react from "../assets/icons/react.svg";
import python from "../assets/icons/python.svg";
import Bar from "./Bar";

const languages = [
  {
    icon: python,
    name: "Python",
    level: "45",
  },
  {
    icon: react,
    name: "Java",
    level: "50",
  },
  {
    icon: react,
    name: "HTML",
    level: "80",
  },
  {
    icon: react,
    name: "react",
    level: "45",
  },
  {
    icon: react,
    name: "C#",
    level: "80",
  },
  {
    icon: react,
    name: "Bootstrap",
    level: "50",
  },
];

const tools = [
  {
    icon: react,
    name: "Anaconda",
    level: "40",
  },
  {
    icon: react,
    name: "Nodepad++,VS",
    level: "65",
  },
  {
    icon: react,
    name: "Illustrator",
    level: "40",
  },
  {
    icon: react,
    name: "CodeBlocks",
    level: "70",
  },
];

const Resume = () => {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Computer Science Enginnering</h5>
            <p className="resume-card__name">
              American International University-Bangladesh(2018-2021)
            </p>
            <p className="resume-card__details">
              I am a highly motivated computer science graduate eagerly looking
              forward to stepping out of my comfort zone for new professional
              challenges. My educational background endowed me with the
              necessary skill sets to approach a problem from various
              perspectives and get myself industryready. Currently, I am seeking
              for a growing and rewarding career in web development where I can
              apply my academic knowledge and technological skills
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Project</h5>
            <p className="resume-card__name">
              Java,C#,Database project(2019-2021)
            </p>
            <p className="resume-card__details">
              I work as a project member & some time as a leader
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Language and Framework</h5>
          <div className="resume-language__body mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Tools and Softwares</h5>
          <div className="resume-language__body mt-3">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
