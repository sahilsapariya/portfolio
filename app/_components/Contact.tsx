import Image from "next/image";
import { useEffect, useState } from "react";

const Contact = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  const links = [
    {
      id: 1,
      name: "LinkedIn",
      url: "https://linkedin.com/in/sahilsapariya",
    },
    {
      id: 2,
      name: "GitHub",
      url: "https://github.com/sahilsapariya",
    },
    {
      id: 3,
      name: "Twitter",
      url: "https://twitter.com/sahil_sapariya",
    },
    {
      id: 4,
      name: "Instagram",
      url: "https://instagram.com/_sahil_sapariya_03",
    },
  ];

  return (
    <div className="flex flex-col justify-center bg-white px-5 sm:p-10 lg:px-20 sticky bottom-0 h-screen lg:py-32 z-30">
      <div className="border border-black rounded w-full">
        <Image
          src={"/name_rubik_wet_paint.png"}
          alt="Sahil Sapariya"
          className="w-full h-full drop-shadow-custom pointer-events-none p-5"
          width={700}
          height={500}
        />
      </div>

      <div className="flex flex-col lg:flex-row  md:my-20 lg:justify-between lg:items-center">
        <div className="flex flex-col py-10">
          <p className="text-xl lg:text-2xl">
            Made with ❤️ and Next.js in Ahmedabad, India.
          </p>
          <p className="flex gap-4">
            <span className="text-3xl lg:text-5xl text-gray-500 font-medium">
              Local time
            </span>
            <span className="tracking-[-0.3rem] lg:tracking-[-0.4rem] text-gray-500 lg:text-5xl text-3xl font-light">
              &nbsp;&nbsp;----&nbsp;&nbsp;
            </span>
            <span className="text-3xl lg:text-5xl  font-semibold">
              {currentTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </span>
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 lg:max-w-[500px] w-full">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="relative text-lg py-4 px-4 border border-black rounded overflow-hidden group transition-all duration-500 hover:text-white hover:px-8"
            >
              <p className="flex items-center justify-between w-full">
                <span className="relative z-10">{link.name}</span>
                <span className="relative z-10 text-sm justify-end flex">
                  ↗
                </span>
              </p>

              <span className="absolute inset-0 bg-black transform transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0 text-white"></span>

              <span className="relative z-10 transition-colors duration-500 ease-in-out text-white"></span>
              <style jsx>{`
                a {
                  padding: 1rem 1.5rem;
                  transition: padding 0.5s ease;
                }

                a .absolute {
                  z-index: 1;
                  transform: translateY(-100%);
                }

                a:hover .absolute {
                  transform: translateY(0);
                }

                a .absolute.group-hover:translate-y-0 {
                  transform: translateY(100%);
                }
              `}</style>
            </a>
          ))}
        </div>
      </div>
      <div className="my-5">
        <p className="text-start text-gray-500 text-xs">
          © {new Date().getFullYear()} SAHIL SAPARIYA. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
};

export default Contact;
