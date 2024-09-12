"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import About from "./_components/About";
import Contact from "./_components/Contact";
import LandingPage from "./_components/LandingPage";
import Projects from "./_components/Projects";
import IndustryExperience from "./_components/IndustryExperience";
import Testimonials from "./_components/Testimonials";
import SplashScreen from "./_components/SplashScreen";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("smooth-scroll").then((SmoothScroll) => {
        new SmoothScroll.default('a[href*="#"]', {
          speed: 1000,
          offset: 0,
          easing: "easeInOutCubic",
          updateURL: false,
          popstate: true,
        });
      });
    }
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return (
    <>
      <Head>
        <title>Sahil&apos;s Portfolio</title>
        <meta
          name="description"
          content="Sahil's Full Stack Developer Portfolio"
        />
      </Head>

      {isLoading ? (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : (
        <>
          <div className="h-screen fixed top-0 w-full z-30">
            <LandingPage />
          </div>

          <div className="relative mt-[100vh] rounded-t-lg z-40">
            <div className="rounded-t-lg h-full">
              <About />
              <Projects />
              <IndustryExperience />
              <Testimonials />
            </div>
          </div>

          <div className="h-screen sticky bottom-0 w-full bg-gray-900 z-30">
            <Contact />
          </div>
        </>
      )}
    </>
  );
}
