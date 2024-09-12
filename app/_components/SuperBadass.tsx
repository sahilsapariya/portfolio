import { useEffect, useState, useRef } from "react";
import Marquee from "react-marquee-slider";

const calculateVelocity = (width: number) => {
  const baseVelocity = 30;
  const scaleFactor = 1.5;
  return baseVelocity * (width / 1000) * scaleFactor;
};

const SuperBadass = () => {
  const [isVisible, setIsVisible] = useState(false); // Check if section is visible
  const sectionRef = useRef<HTMLElement | null>(null);
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
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the section is in the viewport
        if (rect.top >= 0 && rect.bottom <= windowHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative px-0 py-5 border border-white rounded flex gap-4 overflow-hidden text-[64px] lg:text-[96px] font-medium lg:font-semibold text-white whitespace-nowrap ${
        isVisible ? "animate-visible" : "animate-invisible"
      }`}
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
          <h1
            className="pointer-events-none select-none"
            style={{
              transform: `translateY(${isVisible ? 0 : "100%"})`, // Slide up effect
              opacity: isVisible ? 1 : 0, // Fade-in effect
              transition:
                "transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.8s ease",
            }}
            key={1}
          >
            SUPER BADASS 🔥
          </h1>,
          <h1
            className="pointer-events-none select-none"
            style={{
              transform: `translateY(${isVisible ? 0 : "100%"})`,
              opacity: isVisible ? 1 : 0,
              transition:
                "transform 1s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 1s ease",
            }}
            key={2}
          >
            SUPER BADASS 🔥
          </h1>,
          <h1
            className="pointer-events-none select-none"
            style={{
              transform: `translateY(${isVisible ? 0 : "100%"})`,
              opacity: isVisible ? 1 : 0,
              transition:
                "transform 1.2s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 1.2s ease",
            }}
            key={3}
          >
            SUPER BADASS 🔥
          </h1>,
        ]}
      </Marquee>
    </section>
  );
};

export default SuperBadass;
