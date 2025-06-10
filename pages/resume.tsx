import { motion } from "framer-motion";
import { fadeInUp } from "../animation";
import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { NextPage } from "next";

const Resume: NextPage = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 lg:grid-cols-2 md:grid-cols-1">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Mathematics</h5>
            <p className="font-medium">BSC Honors (2009-2014)</p>
            <p className="my-3">I did a four years under graduate degree in  Mathematics. While I was doing this course I developed my interest for design as a side project as continued to do so for years.</p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Developer and Designer</h5>
            <p className="font-medium">Upwork</p>
            <p className="my-3">I am doing freelance graphic design and ui/ux designs for more than 10 years now. Recently I started full stack development as well.</p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 lg:grid-cols-2 md:grid-cols-1">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
