import React from "react";
import react from "../assets/icons/react.svg";
import python from "../assets/icons/python.svg";
import Bar from "./Bar";

const languages = [
  {
    icon: python,
    name: "Python",
    
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
          <h4 className="resume-card__heading">EDUCATIONAL BACKGROUND</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title" style={{ fontSize:' 1rem' }}>B.Sc. in Computer Science & Engineering [2021]</h5>
            <p className="resume-card__name">
            CGPA: 3.51
            <p>American International University-Bangladesh (AIUB)</p>
            </p>
          </div>

          <div className="resume-card__body">
            <h5 className="resume-card__title" style={{ fontSize:' 1rem' }}>Higher Secondary Certificate (HSC) [2017]</h5>
            <p className="resume-card__name">
            Group: Science || GPA: 4.75
            <p>Kushtia Govt. College, Kushtia(AIUB)</p>
            </p>

          </div>


          <div className="resume-card__body">
            <h5 className="resume-card__title" style={{ fontSize:' 1rem' }}>Secondary School Certificate (SSC) [2015]</h5>
            <p className="resume-card__name">
            Group: Science || GPA: 5
            <p>Kushtia Zilla School, Kushtia</p>
            </p>

          </div>
          
        </div>
        
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title" style={{ fontSize:' 1rem' }}>Internship </h5>
            <p className="resume-card__name">
            Former Teaching Assistant at AIUB (October 5,2021 – January 3,2022 )
            <p>Responsibilities: As a lab assistant, providing support to the student with lab task, assist 
faculty to conduct the lab and solve the difficulties faced by the students.</p>
            </p>
          </div>

          <div className="resume-card__body">
            <h5 className="resume-card__title" style={{ fontSize:' 1rem' }}>Internship </h5>
            <p className="resume-card__name">
            Front End Developer at PAP INTERNATIONAL LTD(April 11,2022 - Present) <br /> 
           <a href="https://premiumpass.tech/"> Develop <b>Premiumpass</b> site </a>
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
        <h4 className="resume-card__heading">Language and Framework</h4>
        <ul>
        <li> <b>Programming Languages:</b> HTML,CSS,Javascript,C,C++,Java, C#, PHP,  JQuery , AJAX , Python</li>
        <li> <b>Frameworks:</b>ASP.NET, Laravel ,Bootstrap, ReactJs</li>
        <li> <b>CMS:</b>Wordpress</li>

      </ul> 
          {/* <div className="resume-language__body mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div> */}
        </div>
        <div className="col-lg-6 resume-languages">
        <h4 className="resume-card__heading">Language and Framework</h4>
        <ul>
        <li> <b>Software:</b> VS Code, Notepad++, Visual Studio,CodeBlocks Microsoft Office</li>
        <li> <b>Database:</b>MongoDB ,Node.js,MySQL, Oracle, Microsoft SQL Server, Anaconda, Firebase, Netlify.</li>
        <li> <b>Version Control:</b> GitHub</li>

      </ul> 
          {/* <div className="resume-language__body mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Resume;
