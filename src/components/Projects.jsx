import { PROJECTS } from "../constants";
import { easeInOut, motion } from "framer-motion";
import Carousel from "./Carousel/Carousel";
import styles from "./Projects.module.css";
import CarouselMobile from "./Carousel/CarouselMobile";
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

const mouseEnter = (e) => {
  const target = e.target;
  target.style.color = "black"; // Change text color on mouse enter
  target.style.textShadow = "0px 0px 10px #ffffff";
  target.style.transition = "all 0.4s ease-in-out";
};

const mouseLeave = (e) => {
  const target = e.target;
  target.style.color = ""; // Reset text color on mouse leave
  target.style.textShadow = "none";
  target.style.textDecoration = "none"; // Remove underline on mouse leave
};
const projectSlides = PROJECTS.map((project, index) => ({
  id: index + 1, // REQUIRED for carousel logic
  image: project.image,
  title: project.description,
  description: project.title,
  technologies: project.technologies,
  // optional / UI-only
  hasNewTag: false, // example: only first project
  price: "", // or remove price UI
  bottomTitle: project.title,
  bottomDescription: project.title,
  comingsoon: project.comingSoon,
  link: project.link,
  target: project.target,
}));
const enabled = false;
function Projects() {
  return (
    <div className="pb-3 md:pb-24">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
    text-3xl
    sm:text-3xl
    md:text-4xl
    lg:text-5xl
    font-bold
    uppercase
    tracking-wide
    text-center
    px-4
    py-2
    mb:mt-16
    mt-8
    sm:mt-20
    lg:mt-0
    mb-8
    lg:py-20
  "
      >
        Projects
      </motion.h2>
      {enabled && (
        <>
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
                    target={project.target}
                    rel="noopener noreferrer"
                    href={project.link}
                  >
                    <img
                      width={250}
                      height={250}
                      src={project.image}
                      alt="project_image"
                      className="border-2 hover:scale-110 transition-transform duration-600 border-stone-800 rounded-3xl"
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
                  <a
                    target={project.target}
                    rel="noopener noreferrer"
                    href={project.link}
                  >
                    <h1
                      className="font-bold field-sizing-content transition text-3xl mb-4"
                      onMouseLeave={mouseLeave}
                      onMouseEnter={mouseEnter}
                    >
                      {project.title}
                    </h1>
                  </a>

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
        </>
      )}

      {/* <Carousel slideData={projectSlides} /> */}
      <div className={`overflow-hidden ${styles.desktopCarousel} `}>
        <Carousel slideData={projectSlides} />
      </div>
      <div className={`overflow-hidden ${styles.mobileCarousel} `}>
        <CarouselMobile slideData={projectSlides} />
      </div>
    </div>
  );
}

export default Projects;
