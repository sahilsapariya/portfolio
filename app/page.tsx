"use client";
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

      {/* Landing page */}
      <main className="bg-[#ef9d51] fixed top-0 right-0 left-0 bottom-0 z-0">
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
      </main>

      {/* ABOUT SECTION */}
      <div
        className="bg-black px-10 py-32 absolute rounded-t-lg z-50"
        style={{ marginTop: "100vh" }}
      >
        <div className="flex items-center">
          <div className="gradient-text w-1/3 text-white text-[72px] leading-none font-bold justify-center p-10 bg-black flex flex-col">
            <span>About</span>
            <span className="mt-[-15px]">About</span>
            <span className="mt-[-15px]">About</span>
            <span className="mt-[-15px]">About</span>
          </div>
          <div className="w-2/3 p-10">
            <p className="text-white text-[24px]">
              Sahil <span className="text-[16px] font-light">(he/him)</span> is
              a skilled Full-Stack Developer passionate about creating
              cutting-edge web applications. Proficient in React.js, Next.js,
              TypeScript, Python, Django, and Flask, he excels in building
              intuitive interfaces and scalable backend systems. His innovation
              was recognized with a win at DUHACKS 2.0 Hackathon. Sahil is eager
              to apply his expertise to challenging projects and deliver
              impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
