import Image from "next/image";
import React from "react";

const IndustryExperience = () => {
  return (
    <section className="bg-[#FAF3E0] px-5 md:px-10 py-10 top-[-10px] relative">
      <h1 className="px-0 pb-5 flex items-center text-[60px] lg:text-[72px] border-b border-black font-medium lg:font-semibold">
        <span className="leading-[70px]">Industrial Experience</span>
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
            <h2 className="text-4xl font-semibold">eResto</h2>
            <div className="flex justify-between text-[#5A5A5A]">
              <p className="text-base">Frontend Developer Intern</p>
              <p className="italic text-sm">May&apos;24 - June&apos;24</p>
            </div>
          </div>
          <div>
            <p className="text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum
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
            <h2 className="text-4xl font-semibold">Trakky Services Pvt Ltd</h2>
            <div className="flex justify-between text-[#5A5A5A]">
              <p className="text-base">Full Stack Developer Intern</p>
              <p className="italic text-sm">April&apos;23 - July&apos;23</p>
            </div>
          </div>
          <div>
            <p className="text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustryExperience;
