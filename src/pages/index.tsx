import ServiceCard from "@/components/ServiceCard";
import { fadeInUp, routeAnimation, stagger } from "animations";
import { motion } from "framer-motion";
import { services } from "../../data";
import Head from "next/head";

const Home = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit">
      <Head>
        <title>Andrew Dobson | Fullstack Engineer</title>
      </Head>
      <h5 className="my-3 font-medium">
        I'm a Fullstack Software Engineer who's passion for technology drives
        innovative solutions to everyday problems. Whether I'm working at a
        start-up or larger corporation, my ability to quickly adapt has become
        an intrinsic skill for the world of technology.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 bg-opacity-50 dark:bg-dark-400"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What I offer:</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate">
          {services.map((service, i) => (
            <motion.div
              variants={fadeInUp}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              key={i}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
