import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(containerRef, { amount: 0.6, once: true });

  return (
    <>
      <div
        className="bg-black py-10 sm:p-10 lg:px-10 lg:py-32 relative top-[-10px] rounded-lg overflow-hidden z-40"
        ref={containerRef}
      >
        <div className="flex lg:items-center justify-start flex-col lg:flex-row">
          <motion.div
            className="gradient-text lg:w-1/3 text-white text-[72px] leading-none font-bold justify-center p-10 bg-black flex flex-col"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span>About</span>
            <span className="mt-[-15px] hidden lg:block">About</span>
            <span className="mt-[-15px] hidden lg:block">About</span>
            <span className="mt-[-15px] hidden lg:block">About</span>
          </motion.div>
          <motion.div
            className="lg:w-2/3 p-10"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="text-white text-[24px] font-medium">
              Sahil <span className="text-[16px] font-light">(he/him)</span> is
              a skilled Full-Stack Developer passionate about creating
              cutting-edge web applications. Proficient in React.js, Next.js,
              TypeScript, Python, Django, and Flask, he excels in building
              intuitive interfaces and scalable backend systems. His innovation
              was recognized with a win at DUHACKS 2.0 Hackathon. Sahil is eager
              to apply his expertise to challenging projects and deliver
              impactful solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
