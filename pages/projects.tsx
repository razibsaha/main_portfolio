import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../types";
import { fadeInUp,stagger,fadeDownIn } from "../animation";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "All") => {
    if (category === "All") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div variants={fadeDownIn} initial="initial" animate="animate" className="px-5 py-2 overflow-y-scroll md:h-5/6 h-2/6">
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <motion.div variants={stagger} initial="initial" animate="animate" className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <motion.div
          variants={fadeInUp}
           className="col-span-12 p-2 bg-gray-800 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200" key={project.name}>
            <ProjectCard project={project}  />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;