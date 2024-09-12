"use client";
import { Rubik_80s_Fade } from "@next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";

const rubik80sFade = Rubik_80s_Fade({ subsets: ["latin"], weight: "400" });
// const rubikWetPaint = Rubik_Wet_Paint({ subsets: ["latin"], weight: "400" });

const calculateVelocity = (width: number) => {
  const baseVelocity = 30;
  const scaleFactor = 1.5;
  return baseVelocity * (width / 1000) * scaleFactor;
};

const NameScroller = () => {
  const [velocity, setVelocity] = useState<number>(20);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setVelocity(calculateVelocity(window.innerWidth));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${rubik80sFade.className} w-full overflow-hidden whitespace-nowrap pointer-events-none absolute z-0`}
    >
      <Marquee
        velocity={velocity}
        direction="rtl"
        scatterRandomly={false}
        resetAfterTries={3}
        onInit={() => console.log("Marquee initialized")}
        onFinish={() => console.log("Marquee finished")}
      >
        {[
          <Image
            src={"/name.png"}
            width={1500}
            height={200}
            alt="sahil sapariya"
            className="mr-32"
            key={1}
          />,

          <Image
            src={"/name.png"}
            width={1500}
            height={200}
            alt="sahil sapariya"
            className="mr-32"
            key={2}
          />,
        ]}
      </Marquee>
    </div>
  );
};

export default NameScroller;
