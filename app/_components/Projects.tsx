import React from "react";
import SuperBadass from "./SuperBadass";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Elite Mode",
      description:
        "A platform for students to learn and practice coding problems.",
      techStack: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com/sahilsapariya/elite-mode",
      demo: "https://elitemode.vercel.app/",
      image: "/images/elite-mode.png",
    },
    {
      id: 2,
      title: "Elite Mode",
      description:
        "A platform for students to learn and practice coding problems.",
      techStack: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com/sahilsapariya/elite-mode",
      demo: "https://elitemode.vercel.app/",
      image: "/images/elite-mode.png",
    },
  ];

  return (
    <section className="bg-[#001330] px-5 md:px-10 py-10 top-[-10px] relative text-white">
      <SuperBadass />

      <ProjectsTitle />

      <Skills />

      <div className="flex items-center flex-col my-20 lg:px-20 justify-center">
        {projects.map((project) => {
          return <ProjectComponent project={project} />;
        })}
      </div>
    </section>
  );
};

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo: string;
  image: string;
};

const ProjectComponent = ({ project }: { project: ProjectProps }) => {
  return (
    <div
      className="flex flex-col gap-10 lg:gap-16 lg:flex-row items-center justify-center w-full my-12 lg:my-16"
      key={project.id}
    >
      <div className="w-full lg:w-[45%] flex items-center justify-center">
        <Image
          src={project.image}
          width={800}
          height={400}
          alt={project.title}
          className="rounded-lg w-full h-full max-w-[700px] pointer-events-none"
        />
      </div>
      <div className="w-full lg:w-[45%] max-w-[700px]">
        <div className="gradient-project-title">
          <h2 className="text-5xl lg:text-6xl font-semibold my-5">
            {project.title}
          </h2>
        </div>
        <div className="flex flex-col items-start">
          <p className="flex gap-3 items-center">
            <span className="font-medium">Technologies Used</span>
            <span className="text-black bg-white rounded-full text-sm py-px px-2">
              {project.techStack.length.toString()}
            </span>
          </p>
        </div>
        <div className="flex flex-wrap gap-2 my-3">
          {project.techStack.map((tech, index) => {
            return (
              <span
                key={index}
                className="border rounded-3xl text-md font-medium py-1 px-3"
              >
                {tech}
              </span>
            );
          })}
        </div>
        <div className="flex gap-8 items-center my-6 pb-2 border-b border-gray-600">
          <a
            href={project.demo}
            className="hover:text-blue-500 font-semibold text-[20px] flex gap-4 items-center"
          >
            <span>🔗</span>
            <span>Check Now</span>
          </a>

          <div className="border-l border-white h-4"></div>

          <a
            href={project.github}
            className="hover:text-blue-500 font-semibold text-[20px] flex gap-4 items-center"
          >
            <Image src={"/github.svg"} width={24} height={24} alt="GitHub" />
            <span>GitHub</span>
          </a>
        </div>

        <p className="text-xl md:text-2xl font-normal mb-5">{project.description}</p>
      </div>
    </div>
  );
};

const ProjectsTitle = () => {
  return (
    <h1 className="px-0 py-0 flex items-center text-[60px] lg:text-[72px] border-b border-white font-medium lg:font-semibold text-white ">
      <span className="text-[96px] lg:text-[108px]">⤵︎&nbsp;</span>
      <span>Projects</span>
    </h1>
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
    <section className="hidden lg:block">
      <div className="grid grid-cols-6 gap-8 my-10 font-medium px-20">
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
              return (
                <li
                  key={index}
                  className="border rounded-sm border-gray-600 py-1 px-3"
                >
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
