import { motion } from "framer-motion";
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { fadeDownIn, fadeInUp, stagger } from "../animation";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
console.log(services);

const About: NextPage = () => {
  return (
    <motion.section
      variants={fadeDownIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1 "
    >
      <motion.div variants={fadeDownIn} initial="initial" animate="animate">
        <article className="font-regular y-3 dark:text-slate-400">
          I am a tireless seeker of knowledge, occasional purveyor of wisdom and
          also, coincidentally, a full-stack web developer with experience in
          UI/UX. My school of thought is reliant on schooling my thought
          thoroughly, regularly, keeping abreast of design the next thing,
          branding, advertising trends, and solutions. The world is changing so
          fast and to cope up with the pace of it there is no option without
          willingness to adopt the changes. Started my career as an UI/UX
          designer and designed small to large applications for clients all
          around the world starting from USA to Australia. When I design
          something beautiful, a thought always poke me what if I can also code
          it? So this was the beginning of it. Took some online courses, watched
          a lot of Youtube videos and took guidelines from Industry friends to
          learn web development. Self learning was always my forte as I can set
          my own pace. As I have designed user interfaces in softwares like
          Adobe XD, Figma or in Illustrator or Photoshop well before these
          prototype based software arrived, I am hopeful about my new journey
          about web development as well.
        </article>
      </motion.div>
      <div
        className="p-4 mt-5 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-medium tracking-wide dark:text-[#64ffda]">
          Services I do
        </h6>
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid gap-6 my-3 md:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="col-span-2 p-2 rounded-lg dark:bg-slate-800 dark:bg-dark-200 md:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

/* export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const res = await fetch("http://localhost:3000/api/services");
  const data = res.json();

  return {
    props: {
      services: data.services,
    },
  };
}; */
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  // console.log(context);

  const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  const { services } = await res.json();
  console.log({ services });
  return { props: { services: services } };
};

export default About;
