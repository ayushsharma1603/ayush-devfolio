import { FaCode, FaCogs, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { title: "Frontend Development", icon: <FaCode /> },
  { title: "Full Stack & API Integration", icon: <FaCogs /> },
  { title: "Backend Development", icon: <FaServer /> },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotate: -5, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  return (
    <div className="lg:h-full h-auto py-12">
      <motion.h2
        className="text-4xl font-bold lg:text-5xl m-4 lg:mb-8 py-2 text-center uppercase"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Services
      </motion.h2>

      <motion.div
        className="my-10 lg:my-30"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center shadow-lg cursor-pointer"
              variants={cardVariants}
              whileHover={{
                rotate: [0, -2, 2, -1, 1, 0],
                scale: 1.05,
                transition: { duration: 0.5 },
              }}
            >
              <div className="text-5xl mb-4 text-cyan-300">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesSection;
