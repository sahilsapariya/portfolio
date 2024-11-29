import React from "react";
import SuperBadass from "./SuperBadass";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Nirmaan Yaatraa",
      description:
        "A Real Time Construction Project Monitoring System is a comprehensive project designed to streamline and enhance the collaboration process between contractors and administrators within the construction industry.",
      techStack: [
        "Django REST Framework",
        "React.js",
        "Redux",
        "PostgreSQL",
        "SaaS",
      ],
      github: "https://github.com/sahilsapariya/nirmaan-yaatra",
      demo: "https://nirmaanyaatra.netlify.app/",
      image: "/images/nirmaan-yaatraa.png",
    },
    {
      id: 2,
      title: "College360",
      description:
        "College360 is an Application where you can get the Campus Tour of DDIT in 3D Mode and can explore the College.",
      techStack: ["Panolens.js", "Three.js", "HTML", "CSS"],
      github: "https://github.com/sahilsapariya/college360",
      demo: "https://college360.netlify.app/",
      note: "🏆 Best Open Innovation Project",
      image: "/images/college360.png",
    },
    {
      id: 3,
      title: "Elite Mode",
      description:
        "One-stop destination for high-quality clothing products. This website offers a wide range of stylish and trendy apparel to suit every taste and occasion.",
      note: "In Progress",
      techStack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      github: "https://github.com/sahilsapariya/elite-mode",
      demo: "https://elitemode.vercel.app/",
      image: "/images/elite-mode.png",
    },
    {
      id: 4,
      title: "Design Alchemy",
      description:
        "A design project that showcasing my design skills and creativity. This project is designed using Figma.",
      techStack: ["Figma", "UI/UX Design"],
      figma:
        "https://www.figma.com/design/jXF09vT9OMoT7hD3ZJL1L6/Design-Alchemy?node-id=0-1&t=nVxQq0hqHOujI03I-1",
      image: "/images/design-alchemy.png",
    },
  ];

  return (
    <section className="bg-[#001330] px-5 md:px-10 py-10 top-[-10px] relative text-white">
      <SuperBadass />

      <ProjectsTitle />

      <Skills />

      <div className="flex items-center flex-col md:my-20 lg:px-20 justify-center">
        {projects.map((project) => {
          return <ProjectComponent project={project} key={project.id} />;
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
  github?: string;
  demo?: string;
  figma?: string;
  note?: string;
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
          width={1000}
          height={700}
          alt={project.title}
          className="rounded-lg w-full h-full max-w-[700px] pointer-events-none"
        />
      </div>
      <div className="w-full lg:w-[45%] max-w-[700px]">
        <div className="gradient-project-title">
          <h2 className="text-5xl lg:text-6xl font-bold md:font-semibold my-5">
            {project.title}
          </h2>
        </div>
        <div className="flex flex-col items-start">
          <p className="flex flex-col-reverse md:flex-row gap-4 md:items-center">
            <span className="flex gap-3">
              <span className="font-medium">Technologies Used</span>
              <span className="text-black bg-white rounded-full text-sm py-px px-2">
                {project.techStack.length.toString()}
              </span>
            </span>
            {project.note && (
              <span className="text-white bg-[#d9af31] font-medium w-fit rounded-full text-sm py-px px-2">
                {project.note}
              </span>
            )}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 my-3">
          {project.techStack.map((tech, index) => {
            return (
              <span
                key={index}
                className="border rounded-3xl text-sm font-medium py-1 px-3"
              >
                {tech}
              </span>
            );
          })}
        </div>
        <div className="flex gap-8 items-center my-6 pb-2 border-b border-gray-600">
          {project.demo && (
            <>
              <a
                href={project.demo}
                className="hover:text-blue-500 font-semibold text-[20px] flex gap-4 items-center"
                target="_blank"
              >
                <span>🔗</span>
                <span>Check Now</span>
              </a>
              {project.github && (
                <div className="border-l border-white h-4"></div>
              )}
            </>
          )}

          {project.github && (
            <>
              <a
                href={project.github}
                className="hover:text-blue-500 font-semibold text-[20px] flex gap-4 items-center"
                target="_blank"
              >
                <Image
                  src={"/github.svg"}
                  width={24}
                  height={24}
                  alt="GitHub"
                />
                <span>GitHub</span>
              </a>
              {project.figma && (
                <div className="border-l border-white h-4"></div>
              )}
            </>
          )}

          {project.figma && (
            <>
              <a
                href={project.figma}
                className="hover:text-blue-500 font-semibold text-[20px] flex gap-4 items-center"
                target="_blank"
              >
                <Image
                  src={"/figma.svg"}
                  width={24}
                  height={30}
                  alt="Figma"
                  className="w-[24px] h-[30px]"
                />
                <span>Figma</span>
              </a>
            </>
          )}
        </div>

        <p className="text-xl md:text-2xl font-normal mb-5">
          {project.description}
        </p>
      </div>
    </div>
  );
};

const ProjectsTitle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const text = "Projects";

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the title is in the viewport
        if (rect.top >= 0 && rect.bottom <= windowHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <h1
      ref={titleRef}
      className="px-0 py-0 flex items-center text-[60px] lg:text-[72px] border-b border-white font-medium lg:font-semibold text-white"
    >
      <span className="text-[96px] lg:text-[108px]">⤵︎&nbsp;</span>
      <span className="flex overflow-hidden">
        {text.split("").map((letter, index) => (
          <span
            key={index}
            className={`inline-block transition-transform duration-700 ease-out ${
              isVisible
                ? `transform translate-y-0 opacity-100 delay-[${index * 100}ms]`
                : "transform translate-y-full opacity-0"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {letter}
          </span>
        ))}
      </span>
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
    <section className="hidden xl:block">
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
            <li>Industry Standards</li>
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
