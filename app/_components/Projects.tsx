import React from "react";
import SuperBadass from "./SuperBadass";

const Projects = () => {
  return (
    <section className="bg-[#001330] px-5 md:px-10 py-10 top-[-10px] relative text-white">
      <SuperBadass />

      <ProjectsTitle />

      <Skills />
    </section>
  );
};

const ProjectsTitle = () => {
  return (
    <div className="px-0 py-5 flex items-center text-[96px] border-b border-white font-semibold text-white ">
      <h1>
        <span className="text-[108px]">⤵︎&nbsp;</span>
        <span>Projects</span>
      </h1>
    </div>
  );
};
const Skills = () => {
  const skills = [
    "Python",
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "C",
    "C++",
    "Java",
    "HTML",
    "CSS",
    "Sass",
    "Tailwind CSS",
    "Bootstrap",
    "Django",
    "Flask",
    "Numpy",
  ];
  return (
    <section className="hidden lg:grid grid-cols-6 gap-8 my-10 font-medium px-20">
      <div>
        <h2 className="mb-5 font-normal">TIMEFRAME</h2>
        <p>YEAR 2022-2024</p>
      </div>
      <div>
        <h2 className="mb-5 font-normal">DISCIPLINE</h2>
        <ul>
          <li>UI/UX Design</li>
          <li>Backend Development</li>
          <li>Frontend Development</li>
          <li>Database Design</li>
          <li>Maintain Industry Standards</li>
        </ul>
      </div>
      <div>
        <h2 className="mb-5 font-normal">TOOLS</h2>
        <ul>
          <li>Figma</li>
          <li>VS Code</li>
          <li>Postman</li>
          <li>GitHub</li>
        </ul>
      </div>
      <div className="col-span-3">
        <h2 className="mb-5 font-normal">TECHSTACK</h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill, index) => {
            return <li key={index} className="border rounded-sm border-gray-600 py-1 px-3">{skill}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
