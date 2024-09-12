"use client";
import { Roboto, Russo_One } from "next/font/google";
import SocialIcons from "./SocialIcons";
import useScreenSize from "./hooks/useScreenSize";

const russoOne = Russo_One({ subsets: ["latin"], weight: "400" });
const roboto = Roboto({ subsets: ["latin"], weight: "700" });

const Hero = () => {
  const isMobile = useScreenSize();

  return <div>{isMobile ? <MobileHero /> : <DesktopHero />}</div>;
};
const MobileHero = () => {
  return (
    <>
      <div className={`flex flex-col ml-4 mt-10`}>
        <h1 className={`${russoOne.className} flex flex-col`}>
          <span className="text-[24px] md:text-[32px] lg:text-[64px]">
            I<span className="text-white">&apos;</span>m
          </span>
          <span className="text-[32px] md:text-[40px] lg:text-[96px]">
            Full Stack Developer
          </span>
        </h1>

        <a
          className={`${roboto.className} font-bold mt-5 px-4 py-2 bg-[#029676]  text-white rounded w-fit z-40`}
          href="https://drive.google.com/file/d/1819NG4-1vkpc_sH3KYaxZW6EEwOojy40/view?usp=share_link"
          target="_blank"
        >
          Download Resume
        </a>
      </div>
      <SocialIcons className="fixed bottom-36 left-[-1px]" />
    </>
  );
};

const DesktopHero = () => {
  return (
    <div className="flex items-center absolute left-0 top-0 bottom-0">
      <div className="absolute left-0 h-screen b-[10px] w-[48px] bg-[#ef9d51] z-20">
        <div className="w-[1px] bg-black h-full absolute top-0 right-0"></div>
      </div>
      <div className="flex relative">
        <SocialIcons />
        <div className="absolute bottom-0 h-[2px] w-screen">
          <div className="w-full bg-black h-px absolute bottom-0 right-0 z-0"></div>
        </div>

        <div className={`flex flex-col ml-4  justify-center`}>
          <h1 className={`${russoOne.className} flex flex-col`}>
            <span className="text-[24px] md:text-[32px] lg:text-[40px]">
              I<span className="text-white">&apos;</span>m
            </span>
            <span className="text-[32px] md:text-[48px] lg:text-[72px] lg:mt-[-1.5rem]">
              Full Stack Developer
            </span>
          </h1>

          <a
            className={`${roboto.className} font-bold mt-5 px-4 py-2 bg-[#029676]  text-white rounded w-fit lg:mt-0`}
            href="https://drive.google.com/file/d/1819NG4-1vkpc_sH3KYaxZW6EEwOojy40/view?usp=share_link"
            target="_blank"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
