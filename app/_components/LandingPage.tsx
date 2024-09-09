import Image from "next/image";
import Hero from "./Hero";
import NameScroller from "./NameScrolling";

const LandingPage = () => {
  return (
    <main className="relative h-full">
      <div className="h-[200px] lg:h-[250px] leading-[200px] lg:leading-[250px] w-full">
        <NameScroller />
      </div>

      <Hero />

      <div className="absolute bottom-[-1px] right-0 w-[350px] md:w-[500px]">
        <Image
          src="/images/profile-picture.png"
          alt="Sahil"
          width={500}
          height={700}
          className="w-full h-full drop-shadow-custom pointer-events-none z-40"
        />
      </div>
    </main>
  );
};

export default LandingPage;
