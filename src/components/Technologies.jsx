import { RiReactjsFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { GrDocker } from "react-icons/gr";
import { FaAws } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { a } from "framer-motion/client";
import { SiJsonwebtokens } from "react-icons/si";
import styles from "./Technologies.module.css";

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
  {
    Icon: BiLogoMongodb,
    color: "#02ed60",
    glow: "rgba(2, 237, 96, 0.4)",
    site: "https://www.mongodb.com/",
  },
  {
    Icon: SiExpress,
    color: "#d1d5db",
    glow: "rgba(255, 255, 255, 0.2)",
    site: "https://expressjs.com/",
  },
  {
    Icon: RiReactjsFill,
    color: "#22d3ee",
    glow: "rgba(0, 255, 255, 0.3)",
    site: "https://react.dev/",
  },
  {
    Icon: TbBrandNodejs,
    color: "#75b940",
    glow: "rgba(117, 185, 64, 0.4)",
    site: "https://nodejs.org/en",
  },
  {
    Icon: GrMysql,
    color: "#05586a",
    glow: "rgba(5, 88, 106, 0.4)",
    site: "https://www.mysql.com/",
  },
  {
    Icon: IoLogoJavascript,
    color: "#f7e018",
    glow: "rgba(247, 224, 24, 0.4)",
    site: "https://www.javascript.com/",
  },
  {
    Icon: FaJava,
    color: "#e76f00",
    glow: "rgba(231, 111, 0, 0.4)",
    site: "https://www.java.com/en/",
  },
  {
    Icon: RiTailwindCssFill,
    color: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.3)",
    site: "https://tailwindcss.com/",
  },

  {
    Icon: SiPostman,
    color: "#ef6820",
    glow: "rgba(239, 104, 32, 0.3)",
    site: "https://www.postman.com/",
  },

  {
    Icon: FaGitAlt,
    color: "#f1502f",
    glow: "rgba(241, 80, 47, 0.35)",
    site: "https://git-scm.com/",
  },

  {
    Icon: GrDocker,
    color: "#0db7ed",
    glow: "rgba(13, 183, 237, 0.4)",
    site: "https://www.docker.com/",
  },
  {
    Icon: DiRedis,
    color: "#dc2626",
    glow: "rgba(220, 38, 38, 0.4)",
    site: "https://redis.io/",
  },
  {
    Icon: FaAws,
    color: "#ff9900",
    glow: "rgba(255, 153, 0, 0.35)",
    site: "https://aws.amazon.com/",
  },

  {
    Icon: SiJsonwebtokens,
    color: "#f39c12",
    glow: "rgba(243, 156, 18, 0.4)",
    site: "https://jwt.io/",
  },
];

const Technologies = () => {
  return (
    <div className="h-auto pb-24 mb-0">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="lg:py-20 text-4xl font-bold mt-20 lg:mt-0 mb-8 text-center lg:text-5xl uppercase tracking-wide"
      >
        Technologies
      </motion.h2>

      <div className={styles.containerWrapper}>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={styles.scrollRow}
        >
          {icons.concat(icons).map(({ Icon, color, glow, site }, idx) => (
            <a key={idx} href={site} target="_blank">
              <motion.div
                variants={floatVariants}
                initial="initial"
                animate="animate"
                whileHover={{
                  scale: 1.1,
                  boxShadow: `0 0 20px ${glow}`,
                  transition: { duration: 0.4 },
                }}
                className="lg:p-7"
              >
                <Icon className="md:text-8xl text-6xl" style={{ color }} />
              </motion.div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
