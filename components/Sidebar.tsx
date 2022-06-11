/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import React, { useState } from "react";
import dp from "../../portfolio/Assets/images/portfolio_dp.png";
import { FaCode, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineCloudDownload, AiOutlineDribbble } from "react-icons/ai";
import { MdLightMode, MdLocationPin, MdNightlight } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { MdCall } from "react-icons/md";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="pt-12">
      <div className="p-2 rounded-full ring-8 ring-[#64ffda] avatar ">
        <div className="w-40 rounded-full">
          <Image src={dp} alt="avatar" quality="100" />
        </div>
      </div>
      <h3 className="mb-3 font-mono dark:text-[#64ffda]">Hi, I am</h3>
      <h2 className="bigHeading font-bold dark:text-[#ccd6f6]">Razib Saha</h2>
      <h3 className="font-bold secondHeading dark:text-[#8892b0]">
        I can Design and Code
      </h3>

      <div className="mt-8 mb-6">
        <a
          href="https://drive.google.com/uc?export=download&id=1Gnp64PV9SACNAqnfSI_MSM1zf72d0Xb7"
          download="Razib_Saha_Resume.pdf"
        >
          <h6 className="inline px-5 py-3 mt-8 mb-5 text-[#0a192f] dark:text-[#64ffda] dark:hover:text-[#0a192f] text-center border-2 dark:border dark:border-[#64ffda] hover:bg-[#64ffda] rounded-lg">
            <AiOutlineCloudDownload className="inline w-6 h-6 mr-2" />
            Download Resume
          </h6>
        </a>
      </div>
 {/* Social Media Icons */}
      <div className="mt-12 mb-5 md:mb-12">
        <a href="https://www.linkedin.com/in/razibsaha/">
          <FaLinkedin className="inline w-8 h-8 mx-2" />
        </a>
        <a href="https://github.com/razibsaha">
          {" "}
          <FaGithub className="inline w-8 h-8 mx-2" />
        </a>
        <a href="https://dribbble.com/razibsaha">
          {" "}
          <AiOutlineDribbble className="inline w-8 h-8 mx-2" />
        </a>
      </div>
      {/* Contact Info */}
      <div className="grid md:mb-12">
      <div className="flex flex-col items-start mx-auto mt-auto mb-5">
        <p>
          <MdLocationPin className="inline w-6 h-6 mr-3 dark:text-[#64ffda]" />Feni, Bangladesh
        </p>
        <p>
          <SiMinutemailer className="inline w-6 h-6 mr-3 dark:text-[#64ffda]" />
          contact@razibsaha.com
        </p>
        <p>
          <MdCall className="inline w-6 h-6 mr-3 dark:text-[#64ffda]" />
          +8801719-881180
        </p>
      </div>
      </div>
      <div>
        <button
          className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
          onClick={() => window.open("mailto:contact@razibsaha.com")}
        >
          Email me
        </button>
      </div>
      <div className="flex items-center justify-center mt-5 mb-5">
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label
          onClick={changeTheme}
          htmlFor="checkbox"
          className="checkbox-label dark:bg-slate-700 bg-slate-700"
        >
          <MdNightlight className="w-8 h-12 text-white" />
          <MdLightMode className="inline w-8 h-12 text-yellow-400" />
          <span className="w-8 h-12 ball"></span>
        </label>
      </div>
    </div>
  );
};
export default Sidebar;
