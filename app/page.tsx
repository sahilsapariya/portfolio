import Head from "next/head";
import NameScroller from "./_components/NameScrolling";
import Hero from "./_components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sahil&apos;s Portfolio</title>
        <meta
          name="description"
          content="Sahil's Full Stack Developer Portfolio"
        />
      </Head>

      <div className="relative h-screen">
        {/* Scrolling Name */}
        <div className="h-[200px] lg:h-[250px] leading-[200px] lg:leading-[250px] w-full">
          <NameScroller />
        </div>

        {/* Hero Section */}
        <Hero />

        {/* Profile Image */}
        <div className="absolute bottom-[-1px] right-0 w-[350px] md:w-[500px]">
          <Image
            src="/images/profile-picture.png"
            alt="Sahil"
            width={500}
            height={700}
            className="w-full h-full drop-shadow-custom pointer-events-none z-40"
          />
        </div>
      </div>
    </div>
  );
}
