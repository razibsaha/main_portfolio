/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import React from "react";
import dp from "../Assets/images/portfolio_dp.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineCloudDownload, AiOutlineDribbble } from "react-icons/ai";
import { MdLightMode, MdLocationPin, MdNightlight, MdCall } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { stagger, fadeInSidebar, fadeUpImage, fadeInSocial, stagger2, stagger3 } from "../animation";
import { useTheme } from "next-themes";
import Typewriter from "typewriter-effect";
import MotionComponent from "./MotionComponent";
import { typewriterOptions, resume, socialMedia, contactInfo } from "../data";

// Helper to map icon names to components
const iconComponents: { [key: string]: React.ElementType } = {
  FaLinkedin,
  FaGithub,
  AiOutlineDribbble,
};

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <MotionComponent variants={stagger} initial="initial" animate="animate" className="pt-12" elementType="div">
      <div className="p-1 rounded-full ring-4 ring-[var(--color-brand-accent)] avatar ">
        <MotionComponent variants={fadeUpImage} initial="initial" animate="animate" className="w-32 rounded-full" elementType="div">
          <Image src={dp} alt="avatar" quality="100" />
        </MotionComponent>
      </div>
      <MotionComponent variants={fadeUpImage} initial="initial" animate="animate" className="mb-3 font-[var(--font-mono)] dark:text-[var(--color-brand-accent)]" elementType="article">
        Hi, I am
      </MotionComponent>
      <MotionComponent variants={fadeUpImage} initial="initial" animate="animate" className="bigHeading font-bold dark:text-[var(--color-brand-light-heading)]" elementType="h2">
        Razib Saha
      </MotionComponent>
      <MotionComponent variants={fadeUpImage} initial="initial" animate="animate" className="mt-1" elementType="div">
        <MotionComponent variants={fadeUpImage} initial="initial" animate="animate" className="flex justify-center secondHeading" elementType="span">
          <MotionComponent variants={fadeUpImage} initial="initial" animate="animate" className="mr-1" elementType="span">I do</MotionComponent>
          <MotionComponent variants={fadeUpImage} initial="initial" animate="animate" className="dark:text-[var(--color-brand-accent)]" elementType="span">
            <Typewriter options={typewriterOptions} />
          </MotionComponent>
        </MotionComponent>
      </MotionComponent>

      <MotionComponent variants={fadeUpImage} initial="initial" animate="animate" className="mt-8 mb-6" elementType="div">
        <a href={resume.url} download={resume.filename}>
          <MotionComponent
            variants={fadeInSidebar}
            initial="initial"
            animate="animate"
            className="inline px-3 py-3 mt-8 mb-5 text-[var(--color-brand-dark-text)] dark:text-[var(--color-brand-accent)] dark:hover:text-[var(--color-brand-dark-text)] text-center border-2 dark:border-[var(--color-brand-accent)] dark:hover:bg-[var(--color-brand-accent)] hover:bg-black rounded-lg hover:text-white"
            elementType="h6"
          >
            <AiOutlineCloudDownload className="inline w-6 h-6 mr-2" />
            Download Resume
          </MotionComponent>
        </a>
      </MotionComponent>

      {/* Social Media Icons */}
      <MotionComponent variants={stagger2} initial="initial" animate="animate" className="mt-12 mb-5 md:mb-12" elementType="div">
        {socialMedia.map((social) => {
          const IconComponent = iconComponents[social.icon];
          return (
            <MotionComponent
              key={social.name}
              variants={fadeInSocial}
              initial="initial"
              animate="animate"
              elementType="a"
              className={`inline w-8 h-8 mx-2 ${social.hoverColor}`} // Added className for hover effect
              // @ts-ignore
              href={social.url} // href is a valid prop for 'a'
              // @ts-ignore
              aria-label={social.name} // Add aria-label for accessibility
              data-testid={`social-link-${social.name}`} // Added for testing
            >
              {IconComponent && <IconComponent className="inline w-8 h-8" />}
            </MotionComponent>
          );
        })}
      </MotionComponent>

      {/* Contact Info */}
      <MotionComponent variants={stagger3} initial="initial" animate="animate" className="grid md:mb-12" elementType="div">
        <MotionComponent variants={fadeInSidebar} initial="initial" animate="animate" className="flex flex-col items-start mx-auto mt-auto mb-5" elementType="div">
          <MotionComponent variants={fadeInSidebar} initial="initial" animate="animate" elementType="p">
            <MdLocationPin className="inline w-6 h-6 mr-3 dark:text-[var(--color-brand-accent)]" />
            {contactInfo.location}
          </MotionComponent>
          <MotionComponent variants={fadeInSidebar} initial="initial" animate="animate" elementType="p">
            <SiMinutemailer className="inline w-6 h-6 mr-3 dark:text-[var(--color-brand-accent)]" />
            {contactInfo.email}
          </MotionComponent>
          <MotionComponent variants={fadeInSidebar} initial="initial" animate="animate" elementType="p">
            <MdCall className="inline w-6 h-6 mr-3 dark:text-[var(--color-brand-accent)]" />
            {contactInfo.phone}
          </MotionComponent>
        </MotionComponent>
      </MotionComponent>

      <MotionComponent variants={fadeInSidebar} initial="initial" animate="animate" elementType="div">
        <button
          className="px-7 py-2 text-white dark:bg-[var(--color-brand-accent)] dark:text-black bg-black rounded-full cursor-pointer hover:scale-105 focus:outline-none"
          onClick={() => window.open(`mailto:${contactInfo.email}`)}
        >
          Email me
        </button>
      </MotionComponent>

      {/* Simplified Theme Changer Button */}
      <MotionComponent variants={fadeInSidebar} initial="initial" animate="animate" className="flex items-center justify-center mt-5 mb-5" elementType="div">
        <button
          onClick={changeTheme}
          className="px-4 py-2 font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600 dark:bg-gray-300 dark:text-black dark:hover:bg-gray-400"
          data-testid="theme-changer-button"
        >
          {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </MotionComponent>
    </MotionComponent>
  );
};
export default Sidebar;
