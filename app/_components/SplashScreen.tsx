"use client";
import React, { useEffect } from "react";
import anime from "animejs";
import Image from "next/image";

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
  useEffect(() => {
    const animate = () => {
      const loader = anime.timeline({
        complete: () => finishLoading(),
      });

      loader.add({
        targets: "#loader",
        duration: 3000,
        easing: "easeInOutQuart",
        opacity: 0,
        scale: [1, 1.4],
        translateY: ["0%", "-30%"],
      });
    };

    animate();

    return () => clearTimeout(undefined);
  }, [finishLoading]);

  return (
    <div className="flex h-screen items-center bg-[#000] justify-center">
      <Image
        id="loader"
        src={"/loader.svg"}
        width={32}
        height={40}
        alt="logo"
        className="w-[64px] h-[64px] border border-white rounded-full"
      />
    </div>
  );
};

export default SplashScreen;
