import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

// Left (image) animation
const leftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Right (text) animation
const rightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Projects() {
  return (
    <div className="pb-24">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 text-center text-4xl lg:text-5xl uppercase tracking-wide"
      >
        Projects
      </motion.h2>

      <div className="lg:w-4/5 w-full flex flex-col justify-center mx-auto">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row p-4 m-5 gap-20"
          >
            {/* Left Image */}
            <motion.div
              className="lg:w-1/4"
              variants={leftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.link}
              >
                <img
                  width={250}
                  height={250}
                  src={project.image}
                  alt="project_image"
                  className="border-2 border-stone-800 rounded-3xl"
                />
              </a>
            </motion.div>

            {/* Right Text */}
            <motion.div
              className="lg:flex lg:flex-col lg:justify-evenly lg:w-3/4"
              variants={rightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1 className="font-bold text-3xl mb-4">{project.title}</h1>
              <p className="text-stone-500 font-bold mb-4 w-full">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-stone-800 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
