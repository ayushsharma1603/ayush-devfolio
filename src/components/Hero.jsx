import profilePic from '../assets/ayush_photo.jpg'
import { HERO_CONTENT } from '../constants'

const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36'>
      <div className='flex flex-wrap lg:flex-row-reverse '>
        <div className='w-full lg:w-1/2'>
          <div className=' flex justify-center lg:p-8'>
            <img src={profilePic} alt="Ayush Sharma" className='border-2  border-stone-900 rounded-3xl '/>
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col  items-center lg:items-start mt-10'>
            <h2 className='text-4xl pb-2 tracking-tight lg:text-7xl'>Ayush Sharma</h2>

            <span className='bg-gradient-to-r from-stone-300 to-stone-700 bg-clip-text text-transparent lg:text-4xl text-3xl tracking-tight'>
              Full Stack Developer
            </span>
            <p className='my-2 py-6 text-xl max-w-lg leading-relaxed tracking-tight'>
              {HERO_CONTENT}
            </p>
            <a href="/Ayush_Resume.pdf" download className='bg-stone-300 rounded-full p-4 text-sm  text-stone-800'> Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero