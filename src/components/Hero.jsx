import bwImage from '../assets/ayush_photo.jpg';
import cImage from "../assets/Color_photo.jpg"
import { HERO_CONTENT } from '../constants';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const containerVarints = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    ease: 'easeOut',
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const devVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 2,
    },
  },
};

const devRoles = [
  "Frontend Developer...",
  "Backend Developer...",
  "Full Stack Developer...",
  "Web Developer...",
  "MERN Stack Developer...",
  "Software Engineer...",
];

const Hero = () => {
  const [inputValue, setInputValue] = useState('');
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const typingTimeout = useRef(null);

  const colors = ["404040", "222831","000000"];
  const [borderColor, setBorderColor] = useState(colors[0]);

    useEffect(() => {
    const interval = setInterval(() => {
      setBorderColor((prev) => {
        const currentIndex = colors.indexOf(prev);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 1200);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const typeEffect = () => {
    const currentRole = devRoles[roleIndex.current];
    let updatedText;

    if (!isDeleting.current) {
      // Typing
      updatedText = currentRole.substring(0, charIndex.current + 1);
      charIndex.current++;
      setInputValue(updatedText);

      if (charIndex.current === currentRole.length) {
        isDeleting.current = true;
        typingTimeout.current = setTimeout(typeEffect, 1500); // Wait before deleting
        return;
      }

      typingTimeout.current = setTimeout(typeEffect, 100); // Typing speed
    } else {
      // Deleting
      updatedText = currentRole.substring(0, charIndex.current - 1);
      charIndex.current--;
      setInputValue(updatedText);

      if (charIndex.current === 0) {
        isDeleting.current = false;
        roleIndex.current = (roleIndex.current + 1) % devRoles.length;
        typingTimeout.current = setTimeout(typeEffect, 500); // Pause before next role
        return;
      }

      typingTimeout.current = setTimeout(typeEffect, 50); // Deleting speed
    }
  };

  useEffect(() => {
    typeEffect(); // Start typing on mount

    return () => clearTimeout(typingTimeout.current); // Cleanup on unmount
  }, []);

  return (
    <div className='p-4 lg:mb-36 mt-30 lg:mt-20'>
      <div className='flex flex-wrap lg:flex-row-reverse'>
        <div className='w-full lg:w-1/2'>
          <div className='flex relative justify-center items-center rounded-full lg:p-5'>
            <motion.img
              src={bwImage}
              alt='Ayush Sharma'
              className={`border-4 lg:w-10/12 transition-colors duration-1200 rounded-full`}
              initial={{ x: 100, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 80, delay: 1 }}
              style={{ borderColor: `#${borderColor}` }}
            />
             <motion.div
  className="absolute lg:right-30 lg:top-10 right-7 top-4 md:right-20 md:top-20 w-7 h-7 rounded-full shadow-md bg-gradient-to-b from-stone-300 via-stone-500 to-stone-700"
  animate={{ y: [0,-17, -20, -17, 0] }}
  transition={{
    times: [1,0.7, 0.3, 0],
    repeat: Infinity,
    duration: 2,
    ease: "easeInOut",
  }}
/>

          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <motion.div
            className='flex flex-col items-center lg:items-start mt-10'
            initial='hidden'
            animate='visible'
            variants={containerVarints}
          >
            <motion.h2
              variants={childVariants}
              className='text-4xl pb-2 tracking-tight lg:text-7xl'
            >
              Ayush Sharma
            </motion.h2>

            <motion.input
              type='text'
              value={inputValue}
              readOnly
              variants={devVariant}
              className='bg-gradient-to-r text-left from-stone-300 to-stone-700 bg-clip-text text-transparent 
                        lg:text-4xl text-3xl tracking-wide border-r-2 border-cyan-100 animate-blink 
                        min-w-0 focus:outline-0 pr-1 py-3 my-3 field-sizing-content'
            />

            <motion.p
              className='mb-2 py-6 text-xl max-w-lg leading-relaxed tracking-tight'
              variants={childVariants}
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              whileHover={{ scale: 1.05, opacity: 0.9 }}
              whileTap={{ scale: 0.95 }}
              href='/Ayush_Resume.pdf'
              download
              className='bg-stone-300 rounded-full px-6 py-3 font-bold text-stone-800'
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
