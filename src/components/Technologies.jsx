import { RiReactjsFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";

// Helper to get random duration between min and max
// const getRandomDuration = (min = 1.5, max = 3) =>
//   Math.random() * (max - min) + min;

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [15, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="h-auto pb-24 mb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 text-center text-4xl lg:text-5xl uppercase tracking-wide"
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
        <motion.div
          whileHover=
          {
            {transition:
            {
              duration:0.5
            }, 
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(2, 237, 96, 0.4)"
            }
          }
          initial="initial"
          animate="animate"
          variants={iconVariants(1.2)}
          className="p-4 lg:p-10"
        >
          <BiLogoMongodb className=" text-8xl text-[#02ed60]" />
        </motion.div>

        <motion.div
          whileHover={{transition:{
            duration:0.5
          },boxShadow:"0 0 20px rgba(255, 255, 255, 0.2)", scale: 1.1 }}
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4 lg:p-10"
        >
          <SiExpress className="text-8xl text-gray-300" />
        </motion.div>

        <motion.div
          whileHover={{transition:{
            duration:0.5
          },boxShadow:"0 0 20px rgba(0, 255, 255, 0.3)", scale: 1.1 }}
          initial="initial"
          animate="animate"
          variants={iconVariants(1)}
          className="p-4 lg:p-10"
        >
          <RiReactjsFill className="text-8xl text-cyan-400" />
        </motion.div>

        <motion.div
          whileHover={{transition:{
            duration:0.5
          },boxShadow:"0 0 20px rgba(117, 185, 64, 0.4)", scale: 1.1 }}
          initial="initial"
          animate="animate"
          variants={iconVariants(2.4)}
          className="p-4 lg:p-10"
        >
          <TbBrandNodejs className="text-8xl text-[#75b940]" />
        </motion.div>

        <motion.div
          whileHover={{transition:{
            duration:0.5
          },boxShadow:"0 0 20px rgba(5, 88, 106, 0.4)", scale: 1.1 }}
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4 lg:p-10"
        >
          <GrMysql className="text-8xl text-[#05586a]" />
        </motion.div>

        <motion.div
          whileHover={{transition:{
            duration:0.5
          },boxShadow:"0 0 20px rgba(247, 224, 24, 0.4)", scale: 1.1 }}
          initial="initial"
          animate="animate"
          variants={iconVariants(1.6)}
          className="p-4 lg:p-10"
        >
          <IoLogoJavascript className="text-8xl text-[#f7e018]" />
        </motion.div>

        <motion.div
          whileHover={{transition:{
            duration:0.5
          },boxShadow:"0 0 20px rgba(231, 111, 0, 0.4)", scale: 1.1 }}
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4 lg:p-10"
        >
          <FaJava className="text-8xl text-[#e76f00]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
