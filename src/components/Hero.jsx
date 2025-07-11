import profilePic from '../assets/ayush_photo.jpg'
import { HERO_CONTENT } from '../constants'
import {motion} from "framer-motion"

const containerVarints={
  hidden:{opacity:0, x:-100},
  visible: {
    opacity:1,
    x:0,
    ease: "easeOut",
    transition:{
      duration:0.5,
      staggerChildren:0.5,
    }
  }
}

const childVariants={
   hidden:{opacity:0, x:-100},
   visible: {
    opacity:1,
    x:0,
    transition:{
      duration:0.5
    }
  }
}

const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36'>
      <div className='flex flex-wrap lg:flex-row-reverse '>
        <div className='w-full lg:w-1/2'>
          <div className=' flex justify-center lg:p-8'>
            <motion.img 
            src={profilePic}
            alt="Ayush Sharma" 
            className='border-2  border-stone-900 rounded-3xl '
            initial={{ x: 100, opacity: 0, scale: 0.9 }}
  animate={{ x: 0, opacity: 1, scale: 1 }}
  transition={{ type: "spring", stiffness: 80, delay: 1 }}
            />
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <motion.div
           className='flex flex-col  items-center lg:items-start mt-10'
           initial="hidden"
           animate="visible"
           variants={containerVarints}
          >
            <motion.h2 variants={childVariants}
            className='text-4xl pb-2 tracking-tight lg:text-7xl'>
              Ayush Sharma
            </motion.h2>

            <motion.span variants={childVariants} className='bg-gradient-to-r from-stone-300 to-stone-700 bg-clip-text text-transparent lg:text-4xl text-3xl tracking-tight'>
              Full Stack Developer
            </motion.span>
            <motion.p 
            className='my-2 py-6 text-xl max-w-lg leading-relaxed tracking-tight'
            variants={childVariants}
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a variants={childVariants} whileHover={{ scale: 1.05, opacity: 0.9 }}
  whileTap={{ scale: 0.95 }}href="/Ayush_Resume.pdf" download className='bg-stone-300 rounded-full px-6 py-3 font-bold  text-stone-800'> Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero