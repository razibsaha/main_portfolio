/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import React from "react";
import dp from "../Assets/images/portfolio_dp.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineCloudDownload, AiOutlineDribbble } from "react-icons/ai";
import { MdLightMode, MdLocationPin, MdNightlight,MdCall } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { useTheme } from "next-themes";
import Typewriter from "typewriter-effect";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="pt-12">
      <div className="p-1 rounded-full ring-4 ring-[#64ffda] avatar ">
        <div className="w-32 rounded-full">
          <Image src={dp} alt="avatar" quality="100" />
        </div>
        
      </div>
      <article className="mb-3 font-mono dark:text-[#64ffda]">
        Hi, I am
      </article>
      <h2 className="bigHeading font-bold dark:text-[#ccd6f6]">Razib Saha</h2>
      {/* <h3 className=" secondHeading dark:text-[#8892b0]">
        I can design and code
      </h3> */}
      <div className="mt-2">
        <span className="flex justify-center secondHeading">
          <span className="mr-1">I do</span>
          <span className="dark:text-[#64ffda]">
          <Typewriter
            options={{
              strings: ["front-end", "back-end","ui/ux"],
              autoStart: true,
              loop: true,
            }}
          />
          </span>
        </span>
      </div>

      <div className="mt-8 mb-6">
        <a
          href="https://drive.google.com/uc?export=download&id=1Gnp64PV9SACNAqnfSI_MSM1zf72d0Xb7"
          download="Razib_Saha_Resume.pdf"
        >
          <h6 className="inline px-3 py-3 mt-8 mb-5 text-[#0a192f] dark:text-[#64ffda] dark:hover:text-[#0a192f] text-center border-2 dark:border dark:border-[#64ffda] dark:hover:bg-[#64ffda] hover:bg-black rounded-lg hover:text-white">
            <AiOutlineCloudDownload className="inline w-6 h-6 mr-2" />
            Download Resume
          </h6>
        </a>
      </div>
      {/* Social Media Icons */}
      <div className="mt-12 mb-5 md:mb-12">
        <a href="https://www.linkedin.com/in/razibsaha/">
          <FaLinkedin className="inline w-8 h-8 mx-2 hover:text-[#0A66C2]" />
        </a>
        <a href="https://github.com/razibsaha">
          {" "}
          <FaGithub className="inline w-8 h-8 mx-2 hover:text-[#F1502F]" />
        </a>
        <a href="https://dribbble.com/razibsaha">
          {" "}
          <AiOutlineDribbble className="inline w-8 h-8 mx-2  hover:text-[#E94C88]" />
        </a>
      </div>
      {/* Contact Info */}
      <div className="grid md:mb-12">
        <div className="flex flex-col items-start mx-auto mt-auto mb-5">
          <p>
            <MdLocationPin className="inline w-6 h-6 mr-3 dark:text-[#64ffda]" />
            Feni, Bangladesh
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
          className="px-7 py-2 text-white dark:bg-[#64ffda]
          dark:text-black
          bg-black rounded-full cursor-pointer  hover:scale-105 focus:outline-none"
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
          <MdNightlight className="w-8 h-12 text-[#64ffda]" />
          <MdLightMode className="inline w-8 h-12 text-[#64ffda]"/>
          <span className="w-8 h-12 ball"></span>
        </label>
      </div>
    </div>
  );
};
export default Sidebar;
