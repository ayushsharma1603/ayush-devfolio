import { RiReactjsFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";
import { a } from "framer-motion/client";

// 👇 Helper to generate random float values
const getRandomFloat = (min, max) => Math.random() * (max - min) + min;

const floatVariants = {
  initial: { x: 0, y: 0 },
  animate: () => ({
    x: [0, getRandomFloat(-15, 15), 0],
    y: [0, getRandomFloat(-15, 15), 0],
    transition: {
      duration: getRandomFloat(2, 4),
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  }),
};

const icons = [
  { Icon: BiLogoMongodb, color: "#02ed60", glow: "rgba(2, 237, 96, 0.4)",site: "https://www.mongodb.com/" },
  { Icon: SiExpress, color: "#d1d5db", glow: "rgba(255, 255, 255, 0.2)", site: "https://expressjs.com/" },
  { Icon: RiReactjsFill, color: "#22d3ee", glow: "rgba(0, 255, 255, 0.3)", site: "https://react.dev/" },
  { Icon: TbBrandNodejs, color: "#75b940", glow: "rgba(117, 185, 64, 0.4)", site: "https://nodejs.org/en" },
  { Icon: GrMysql, color: "#05586a", glow: "rgba(5, 88, 106, 0.4)", site: "https://www.mysql.com/" },
  { Icon: IoLogoJavascript, color: "#f7e018", glow: "rgba(247, 224, 24, 0.4)", site: "https://www.javascript.com/" },
  { Icon: FaJava, color: "#e76f00", glow: "rgba(231, 111, 0, 0.4)", site: "https://www.java.com/en/" },
];

const Technologies = () => {
  return (
    <div className="h-auto pb-24 mb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="lg:py-20 text-4xl font-bold mt-20 lg:mt-0 mb-8 text-center lg:text-5xl uppercase tracking-wide"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center items-center gap-10"
      >
        {icons.map(({ Icon, color, glow,site }, idx) => (
          <a href={site} target="_blank">
                      <motion.div
            key={idx}
            variants={floatVariants}
            initial="initial"
            animate="animate"
            whileHover={{
              scale: 1.1,
              boxShadow: `0 0 20px ${glow}`,
              transition: { duration: 0.4 },
            }}
            className=" lg:p-10"
          >
            <Icon className="text-8xl" style={{ color }} />
          </motion.div>
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
