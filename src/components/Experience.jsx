import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

// Left (year) variant
const leftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Right (details) container with stagger
const rightContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Each right child item
const rightItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function Experience() {
  return (
    <div className="w-full pb-4">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 text-center text-4xl lg:text-5xl uppercase tracking-wide"
      >
        Experience
      </motion.h2>

      <div className="flex flex-col gap-20 items-center w-full">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="flex lg:flex-row flex-col w-full lg:justify-center gap-10 px-6">
            {/* Left Column */}
            <motion.div
              className="lg:w-1/2 flex justify-center"
              variants={leftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-stone-600 font-bold text-lg">{exp.year}</p>
            </motion.div>

            {/* Right Column (Staggered) */}
            <motion.div
              className="lg:w-1/2 flex flex-col gap-2"
              variants={rightContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h1
                className="font-semibold text-lg"
                variants={rightItem}
              >
                {exp.role} -{" "}
                <span className="text-stone-600 text-sm">{exp.company}</span>
              </motion.h1>

              <motion.p
                className="text-stone-500"
                variants={rightItem}
              >
                {exp.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap"
                variants={rightItem}
              >
                {exp.technologies.map((tech, i) => (
                  <span
                    className="bg-stone-900 text-sm font-medium text-stone-400 rounded mt-4 mr-3 px-2 py-1"
                    key={i}
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
