import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import logo from "../assets/logo.png";
import { GrInstagram } from "react-icons/gr";

function NavBar() {
  return (
    <nav id="nav" className="flex items-center justify-between py-4">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center ml-4">
        <a href="/" aria-label="Home">
          <img
            className="rounded-full w-full h-16 md:h-24 transform transition-transform duration-1000 hover:scale-125"
            src={logo}
            alt="Logo"
          />
        </a>
      </div>

      {/* Social Links */}
      <div className="flex mr-4 items-center justify-center gap-4 md:gap-7 text-3xl lg:text-5xl">
        <a
          href="https://www.linkedin.com/in/ayush-sharma1603123/"
          target="_blank"
          aria-label="LinkedIn"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="transform transition-all hover:text-[#095c86] duration-700 hover:scale-125 cursor-pointer"/>
        </a>

        <a
          href="https://github.com/ayushsharma1603"
          target="_blank"
          aria-label="GitHub"
          rel="noopener noreferrer"
        >
          <FaGithub className="transform transition-all hover:text-stone-600 duration-700 hover:scale-125 cursor-pointer" />
        </a>

        <a
          href="https://leetcode.com/u/AyushSharmaPro1832/"
          target="_blank"
          aria-label="LeetCode"
          rel="noopener noreferrer"
        >
          <SiLeetcode className="transform transition-all hover:text-stone-600 duration-700 hover:scale-125 cursor-pointer" />
        </a>

        <a
          href="https://www.instagram.com/yoosh_sharma?utm_source=qr&igsh=MWg0dmo1b2w2YWh2eg=="
          target="_blank"
          aria-label="Instagram"
          rel="noopener noreferrer"
        >
          <GrInstagram className="hover:text-[#ee2a7b] transition-all duration-700 hover:scale-125 cursor-pointer" />



          
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
