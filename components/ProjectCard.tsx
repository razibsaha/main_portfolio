import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";

import Image from "next/image";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="object-cover object-top transition duration-500 transform cursor-pointer hover:scale-110"
        onClick={() => setShowDetail(true)}
        layout="responsive"
        height="150"
        width="300"
      />
      {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      /> */}
      <p className="my-2 text-center">{name}</p>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto px-5 py-8 text-black border bg-slate-200 dark:bg-slate-800 md:grid-cols-2 gap-x-12 dark:text-white rounded-xl dark:border-[#64ffda] overflow-hidden">
          <div>
            {/* <img src={image_path} alt={name} /> */}

            <Image
              src={image_path}
              alt={name}
              className="object-cover object-center transition duration-500 transform cursor-pointer hover:scale-110"
              layout="responsive"
              height="150"
              width="300"
            />
            <div className="flex-wrap flex-grow w-full mt-3 xl:space-x-4 xm:space-x-4 md:flex">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-[#F1502F] dark:bg-dark-200 my-4"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 my-4 space-x-3 text-lg bg-slate-300 dark:bg-slate-700 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium dark:text-[#64ffda] md:text-2xl">{name}</h2>
            <h3 className="mb-3 leading-5 font-regular dark:text-slate-300">{description}</h3>

            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 rounded-sm bg-slate-400 dark:bg-[#64ffda] dark:text-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 rounded-full bg-slate-600 top-3 right-3 focus:outline-none"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;