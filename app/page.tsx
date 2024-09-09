"use client";
import Head from "next/head";
import About from "./_components/About";
import Contact from "./_components/Contact";
import LandingPage from "./_components/LandingPage";
import Projects from "./_components/Projects";
import IndustryExperience from "./_components/IndustryExperience";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sahil&apos;s Portfolio</title>
        <meta
          name="description"
          content="Sahil's Full Stack Developer Portfolio"
        />
      </Head>

      <div className="h-screen fixed top-0 w-full z-30">
        <LandingPage />
      </div>

      <div className="relative mt-[100vh] rounded-t-lg z-40">
        <div className="rounded-t-lg h-full">
          <About />
          <Projects />
          <IndustryExperience />
        </div>
      </div>

      <div className="h-screen sticky bottom-0 w-full bg-gray-900 z-30">
        <Contact />
      </div>
    </>
  );
}
