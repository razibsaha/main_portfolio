import { FunctionComponent } from "react";

import { Skill } from "../types";
import { motion, Variants } from "framer-motion";

const Bar: FunctionComponent<{ value: Skill }> = ({
  value: { Icon, level, name },
}) => {
  const bar_width = `${level}%`;

  const variants: Variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <div>
      <div className="my-2 text-white rounded-full bg-slate-200 dark:bg-slate-800">
        <motion.div
          className="flex items-center px-4 py-1 rounded-full bg-slate-400 dark:bg-[#64ffda]"
          style={{
            width: bar_width,
          }}
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <Icon className="mr-3 dark:text-black" />{" "}
          <h6 className="dark:text-black">{name}</h6>
        </motion.div>
      </div>
    </div>
  );
};
export default Bar;
