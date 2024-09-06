import { Roboto, Russo_One } from "@next/font/google";

const russoOne = Russo_One({ subsets: ["latin"], weight: "400" });
const roboto = Roboto({ subsets: ["latin"], weight: "700" });

const Hero = () => {
  return (
    <div className={`flex flex-col ml-4 mt-10`}>
      <h1 className={`${russoOne.className} flex flex-col`}>
        <span className="text-[24px] md:text-[32px] lg:text-[64px]">
          I<span className="text-white">'</span>m
        </span>
        <span className="text-[32px] md:text-[40px] lg:text-[96px]">
          Full Stack Developer
        </span>
      </h1>

      <button
        className={`${roboto.className} font-bold mt-5 px-4 py-2 bg-[#029676]  text-white rounded w-fit z-40`}
      >
        Download Resume
      </button>
    </div>
  );
};

export default Hero;
