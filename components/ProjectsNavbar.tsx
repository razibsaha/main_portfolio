import { FunctionComponent } from "react";
import { Category } from "../types";

interface NavItemProps {
  value: Category | "All";
  handlerFilterCategory: (category: Category | "All") => void;
  active: Category | "All";
}

export const NavItem: FunctionComponent<NavItemProps> = ({
  value,
  handlerFilterCategory,
  active,
}) => {
  // Type guard for active comparison
  const isActive = active === value;
  let className = "capitalize cursor-pointer hover:text-[#004e3c] dark:hover:text-[#64ffda]";
  if (isActive) className = "font-bold text-black dark:text-[#64ffda]";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

interface ProjectsNavbarProps {
  handlerFilterCategory: (category: Category | "All") => void;
  active: Category | "All";
}

const ProjectsNavbar: FunctionComponent<ProjectsNavbarProps> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="All" {...props} />
      <NavItem value="React" {...props} />
      <NavItem value="Firebase" {...props} />
      <NavItem value="Node" {...props} />
      <NavItem value="MongoDB" {...props} />
    </div>
  );
};

export default ProjectsNavbar;