import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const SocialIcons = () => {
    return (
        <div className="fixed bottom-36 left-0 p-3 bg-black">
            <div className="flex flex-col space-y-4 text-white">
                <a href="https://linkedin.com/in/sahilsapariya"><FaLinkedin size={24} /></a>
                <a href="https://github.com/sahilsapariya"><FaGithub size={24} /></a>
                <a href="https://leetcode.com/sahil_sapariya"><SiLeetcode size={24} /></a>
                <a href="mailto:sahilsapariya03@gmail.com"><FaEnvelope size={24} /></a>
                <a href="https://instagram.com/_sahil_sapariya_03"><FaInstagram size={24} /></a>
            </div>
        </div>
    );
};

export default SocialIcons;
