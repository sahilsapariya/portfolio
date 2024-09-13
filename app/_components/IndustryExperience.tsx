import Image from "next/image";
import React from "react";

const IndustryExperience = () => {
  return (
    <section className="bg-[#FAF3E0] px-5 md:px-10 py-10 top-[-10px] relative">
      <h1 className="px-0 pb-5 flex items-center text-[60px] lg:text-[72px] border-b border-black font-medium lg:font-semibold">
        <span className="hidden md:block text-[96px] lg:text-[108px]">
          ⤵︎&nbsp;
        </span>
        <span className="font-bold md:font-medium leading-[70px]">Industrial Experience</span>
      </h1>

      <MobileExperience />
      <DesktopExperience />
    </section>
  );
};

const DesktopExperience = () => {
  return (
    <div className="hidden lg:flex gap-16 my-14">
      <div className="flex gap-10">
        <div className="w-1/5">
          <Image
            src="/eresto.svg"
            width={100}
            height={100}
            alt="eResto"
            className="w-full p-2 border rounded-lg  shadow-solid border-black"
          />
        </div>
        <div className="w-4/5 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-4xl md:font-semibold font-bold ">eResto</h2>
            <div className="flex justify-between text-[#5A5A5A]">
              <p className="text-base">Frontend Developer Intern</p>
              <p className="italic text-sm">May&apos;24 - June&apos;24</p>
            </div>
          </div>
          <div>
            <p className="text-xl">
              During my time as a Frontend Developer Intern at Restrosoft
              Solutions Pvt. Ltd., I was responsible for transforming{" "}
              <strong> complex Figma designs</strong> into high-quality,
              responsive web pages using{" "}
              <strong>HTML, CSS, Bootstrap, and JavaScript</strong>. I focused
              on developing <strong>interactive and reusable</strong> components
              with ReactJS, ensuring efficient, well-organized code.
              Additionally, I <strong>tested</strong> the website extensively,
              identifying and resolving both frontend and backend issues to
              improve the overall
              <strong>performance and user experience</strong>.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="w-1/5">
          <Image
            src="/images/trakky.png"
            width={100}
            height={100}
            alt="Trakky"
            className="w-full p-2 border rounded-lg  shadow-solid border-black"
          />
        </div>
        <div className="w-4/5 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-4xl md:font-semibold font-bold">Trakky Services Pvt Ltd</h2>
            <div className="flex justify-between text-[#5A5A5A]">
              <p className="text-base">Full Stack Developer Intern</p>
              <p className="italic text-sm">April&apos;23 - July&apos;23</p>
            </div>
          </div>
          <div>
            <p className="text-xl">
              As a Full Stack Developer Intern at Trakky Service Ltd., I{" "}
              <strong>led a team</strong> in the development and successful
              launch of four key features that <strong>increased</strong> user
              engagement by <strong>40%</strong> in just three months. My
              responsibilities also included{" "}
              <strong>resolving compatibility issues</strong> and migrating the
              backend database, resulting in a <strong>25% reduction</strong> in
              system downtime. Moreover, I{" "}
              <strong>mentored junior interns</strong> on best coding practices,
              which led to a <strong>20% improvement</strong> in the overall
              code quality and efficiency of the team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileExperience = () => {
  return (
    <div className="lg:hidden my-10 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl font-semibold">eResto</h2>
        <div className="flex flex-col text-[#5A5A5A]">
          <p className="text-base">Frontend Developer Intern</p>
          <p className="italic text-sm">May&apos;24 - June&apos;24</p>
        </div>
        <div>
          <p className="text-xl">
            During my time as a Frontend Developer Intern at Restrosoft
            Solutions Pvt. Ltd., I was responsible for transforming{" "}
            <strong> complex Figma designs</strong> into high-quality,
            responsive web pages using{" "}
            <strong>HTML, CSS, Bootstrap, and JavaScript</strong>. I focused on
            developing <strong>interactive and reusable</strong> components with
            ReactJS, ensuring efficient, well-organized code. Additionally, I{" "}
            <strong>tested</strong> the website extensively, identifying and
            resolving both frontend and backend issues to improve the overall{" "}
            <strong>performance and user experience</strong>.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl font-semibold">Trakky Services Pvt. Ltd.</h2>
        <div className="flex flex-col text-[#5A5A5A]">
          <p className="text-base">Full Stack Developer Intern</p>
          <p className="italic text-sm">April&apos;23 - July&apos;23</p>
        </div>
        <div>
          <p className="text-xl">
            As a Full Stack Developer Intern at Trakky Service Ltd., I{" "}
            <strong>led a team</strong> in the development and successful launch
            of four key features that <strong>increased</strong> user engagement
            by <strong>40%</strong> in just three months. My responsibilities
            also included <strong>resolving compatibility issues</strong> and
            migrating the backend database, resulting in a{" "}
            <strong>25% reduction</strong> in system downtime. Moreover, I{" "}
            <strong>mentored junior interns</strong> on best coding practices,
            which led to a <strong>20% improvement</strong> in the overall code
            quality and efficiency of the team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustryExperience;
