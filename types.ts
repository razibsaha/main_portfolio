import { IconType } from "react-icons";
export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "React" | "Node" | "Express" | "HTML" | "MongoDB" | "CSS" | "TailwindCSS" | "Bootstrap" | "Firebase" | "Netlify";

export interface SocialMediaLink {
  name: string;
  url: string;
  icon: string; // Corresponds to keys in iconComponents in Sidebar.tsx
  hoverColor: string;
}

export interface ContactInformation {
  location: string;
  email: string;
  phone: string;
}

export interface TypewriterOptions {
  strings: string[];
  autoStart: boolean;
  loop: boolean;
}

export interface ResumeData {
  url: string;
  filename: string;
}

export type NavItemName = 'About' | 'Projects' | 'Resume';