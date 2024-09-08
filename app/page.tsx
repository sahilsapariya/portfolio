"use client";
import Head from "next/head";
import About from "./_components/About";
import Projects from "./_components/Contact";
import LandingPage from "./_components/LandingPage";

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
        </div>
      </div>

      <div className="h-screen sticky bottom-0 w-full bg-gray-900 z-30">
        <Projects />
      </div>
    </>
  );
}
