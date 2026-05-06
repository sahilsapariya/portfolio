import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(containerRef, { amount: 0.8, once: true });

  return (
    <>
      <div
        className="bg-black px-5 py-10 p-10 lg:px-10 lg:py-16 relative top-[-10px] rounded-t-lg overflow-hidden z-40"
        ref={containerRef}
      >
        <div className="flex lg:items-start justify-start flex-col lg:flex-row">
          <motion.div
            className="lg:w-1/3 text-white text-[64px] lg:text-[96px] xl:text-[128px] lg:leading-[72px] xl:leading-[96px] font-bold justify-center lg:p-10 bg-black flex flex-col lg:items-center"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="text-opacity-100 gradient-text">About</h2>
            <span className="mt-[-15px] hidden lg:block opacity-50 gradient-text">
              About
            </span>
            <span className="mt-[-15px] hidden lg:block opacity-25 gradient-text">
              About
            </span>
            <span className="mt-[-15px] hidden lg:block opacity-10 gradient-text">
              About
            </span>
          </motion.div>
          <motion.div
            className="lg:w-2/3 pb-5 lg:p-10"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="text-white text-lg lg:text-xl font-medium leading-7 lg:leading-8">
              Sahil <span className="text-[16px] font-light">(he/him)</span> is
              a driven Full-Stack Developer with a solid grounding in modern web
              technologies and a strong passion for backend engineering. He
              actively works with React.js, Next.js, TypeScript, Python, and
              various backend frameworks while continuously expanding into
              advanced tools like Redis, FastAPI, cloud services, and system
              design. Known for learning quickly and adapting fast, Sahil has
              built multiple projects across different stacks, including an
              innovative DUHACKS 2.0 winning project during his college years.
              With a mindset geared toward growth and mastery, he is committed
              to building scalable architectures, meaningful products, and
              industry-grade engineering solutions.
            </p>

            <div className="flex flex-col xl:flex-row justify-between">
              <div className="flex flex-col gap-3 mt-10 text-white">
                <p className="text-sm">ASSOCIATE SOFTWARE ENGINEER - JEAVIO</p>
                <div className="flex gap-5">
                  <div className="w-[70px]">
                    <Image
                      src={"/images/jeavio_logo.jpeg"}
                      alt="jeavio"
                      width={50}
                      height={50}
                      className="border border-[#808080] rounded-lg w-full px-2 py-1"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-medium">
                      Jeavio India Pvt Ltd
                    </h3>
                    <p className="text-xs text-[#808080]">May 2025 - Present</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-10 text-white">
                <p className="text-sm">
                  BACHELOR OF TECHNOLOGY - MAJOR IN INFORMATION TECHNOLOGY
                </p>
                <div className="flex gap-5">
                  <div className="w-[70px]">
                    <Image
                      src={"/images/ddu_logo.jpeg"}
                      alt="ddu"
                      width={50}
                      height={50}
                      className="border border-[#808080] rounded-lg w-full px-2 py-1"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-medium">
                      Dharmsinh Desai University
                    </h3>
                    <p className="text-xs text-[#808080]">2021 - 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
