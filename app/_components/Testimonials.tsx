import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Marquee from "react-marquee-slider";

const inter = Inter({ subsets: ["latin"], weight: "400" });

const calculateVelocity = (width: number) => {
  const baseVelocity = 30;
  const scaleFactor = 1.5;
  return baseVelocity * (width / 1000) * scaleFactor;
};

const Testimonials = () => {
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

  const testimonials = [
    {
      id: 1,
      name: "Kevin Tamakuwala",
      designation: "Upcoming SDE @Outamation",
      message:
        "Sahil is an exceptional frontend developer with a strong ability to solve complex bugs efficiently. His eagerness to learn new technologies, combined with a continuous learning mindset, sets him apart as a valuable team member and a great peer to collaborate with.",
      img: "/images/kevin.jpeg",
    },
    {
      id: 1,
      name: "Kevin Tamakuwala",
      designation: "Upcoming SDE @Outamation",
      message:
        "Sahil is an exceptional frontend developer with a strong ability to solve complex bugs efficiently. His eagerness to learn new technologies, combined with a continuous learning mindset, sets him apart as a valuable team member and a great peer to collaborate with.",
      img: "/images/kevin.jpeg",
    },
    {
      id: 1,
      name: "Kevin Tamakuwala",
      designation: "Upcoming SDE @Outamation",
      message:
        "Sahil is an exceptional frontend developer with a strong ability to solve complex bugs efficiently. His eagerness to learn new technologies, combined with a continuous learning mindset, sets him apart as a valuable team member and a great peer to collaborate with.",
      img: "/images/kevin.jpeg",
    },
    {
      id: 1,
      name: "Kevin Tamakuwala",
      designation: "Upcoming SDE @Outamation",
      message:
        "Sahil is an exceptional frontend developer with a strong ability to solve complex bugs efficiently. His eagerness to learn new technologies, combined with a continuous learning mindset, sets him apart as a valuable team member and a great peer to collaborate with.",
      img: "/images/kevin.jpeg",
    },
    {
      id: 1,
      name: "Kevin Tamakuwala",
      designation: "Upcoming SDE @Outamation",
      message:
        "Sahil is an exceptional frontend developer with a strong ability to solve complex bugs efficiently. His eagerness to learn new technologies, combined with a continuous learning mindset, sets him apart as a valuable team member and a great peer to collaborate with.",
      img: "/images/kevin.jpeg",
    },
  ];

  return (
    <section className="bg-black text-white md:py-20 px-5 py-10 xl:p-10 top-[-10px] relative flex flex-col xl:flex-row rounded-b-lg">
      <div className="xl:w-1/2 flex flex-col justify-between gap-10 xl:pr-20">
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl font-medium">
            Success is not the key to happiness. Happiness is the key to
            success. If you love what you are doing, you will be successful.
          </h1>
          <p className="flex items-center gap-3">
            {/* <span className="tracking-[-5px] lg:tracking-[-7px] lg:text-5xl text-3xl font-light">
              &nbsp;&nbsp;---&nbsp;&nbsp;
            </span> */}

            
            <span className="custom-dashes text-3xl">&nbsp;&nbsp;----&nbsp;&nbsp;</span>

            <span className="text-3xl font-medium">Albert Schweitzer</span>
          </p>
        </div>
        <div
          className={`w-full overflow-hidden whitespace-nowrap pointer-events-none xl:pb-20 z-0`}
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
              <span
                className="text-[32px] xl:text-[50px] font-bold animate-scroll mr-40"
                key={1}
              >
                TESTIMONIALS
              </span>,
              <span
                className="text-[32px] xl:text-[50px] font-bold animate-scroll mr-40"
                key={2}
              >
                TESTIMONIALS
              </span>,
            ]}
          </Marquee>
        </div>
      </div>
      <div className={`xl:w-1/2 mt-10 xl:mt-0 ${inter.className}`}>
        {testimonials.map((testimonial) => {
          return (
            <div
              key={testimonial.id}
              className="flex flex-col gap-4 mb-10 pb-6 border-b border-[#363636]"
            >
              <p className="text-sm">{testimonial.message}</p>
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <h3 className="text-base font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-[#808080]">
                    {testimonial.designation}
                  </p>
                </div>
                <div className="w-[50px]">
                  <Image
                    src={testimonial.img}
                    width={50}
                    height={50}
                    alt={testimonial.name}
                    className="w-full rounded-lg border border-[#606060] grayscale"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
