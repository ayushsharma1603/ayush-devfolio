import { FaCode, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import logo from "../assets/logo.png"
function NavBar() {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center ml-4">
            <a href="/" aria-label="Home">
            <img className="w-full h-15 md:h-25" src={logo} alt="" /></a>
        </div>
        <div className="flex mr-4 md:gap-7 items-center justify-center gap-4 md:text-5xl">
          <a 
          href="https://www.linkedin.com/in/ayush-sharma1603123/"
          target="_blank"
          aria-label="LinkeIn"
          rel="noopener noreferrer"
          >
            <FaLinkedin/>
          </a>

          <a 
          href="https://github.com/ayushsharma1603"
          target="_blank"
          aria-label="Github"
          rel="noopener noreferrer"
          >
            <FaGithub/>
          </a>

          <a 
          href="https://leetcode.com/u/AyushSharmaPro1832/"
          target="_blank"
          aria-label="LeetCode"
          rel="noopener noreferrer"
          >
            <SiLeetcode />
          </a>
        </div>
    </nav>
  )
}

export default NavBar