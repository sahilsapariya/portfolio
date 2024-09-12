import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

interface SocialIconsProps {
  className?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = (props) => {
  return (
    <div className={`${props.className} p-3 bg-black z-40`}>
      <div className="flex flex-col space-y-4 text-white">
        <a href="https://linkedin.com/in/sahilsapariya" target="_blank">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/sahilsapariya" target="_blank">
          <FaGithub size={24} />
        </a>
        <a href="https://leetcode.com/sahil_sapariya" target="_blank">
          <SiLeetcode size={24} />
        </a>
        <a href="mailto:sahilsapariya03@gmail.com" target="_blank">
          <FaEnvelope size={24} />
        </a>
        <a href="https://instagram.com/_sahil_sapariya_03" target="_blank">
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
