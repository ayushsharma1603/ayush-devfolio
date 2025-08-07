import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { GrInstagram, GrX } from "react-icons/gr";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { RiTwitterXFill } from "react-icons/ri";

function NavBar({position}) {
  const [scrolled, setScrolled] = useState(false);
console.log(position);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{
        height: scrolled ? 70 : 96,
        backgroundColor: scrolled ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
      className={`${position} top-0 left-0 right-0 z-50 flex items-center justify-between px-0 lg:px-9 py-2 transition-colors duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* Logo */}
      <div className="flex items-center ml-4">
        <Link to={"/"} >
        <img
            className={`rounded-full p-2 transition-all duration-600 ${
              scrolled ? "h-16 w-16 md:w-20 md:h-20" : "h-20 w-20 md:w-24 md:h-24"
            }`}
            src={logo}
            alt="Logo"
          />
        </Link>
      </div>

      {/* Social Links */}
      <div className="flex mr-4 items-center justify-center gap-4 md:gap-7 text-3xl lg:text-5xl">
        <a
          href="https://www.linkedin.com/in/ayush-sharma1603123/"
          target="_blank"
          aria-label="LinkedIn"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="transform transition-all hover:text-[#095c86] duration-700 hover:scale-125 cursor-pointer" />
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
          {/* <SiLeetcode className="transform transition-all hover:text-stone-600 duration-700 hover:scale-125 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/i.yoosh.sharma/"
          target="_blank"
          aria-label="Instagram"
          rel="noopener noreferrer"
        > */}
          <GrInstagram className="hover:text-[#ee2a7b] transition-all duration-700 hover:scale-125 cursor-pointer" />
        </a>
                <a
          href="https://x.com/i_yoosh_sharma"
          target="_blank"
          aria-label="X (formerly Twitter)"
          rel="noopener noreferrer"
        >
          <RiTwitterXFill className="hover:text-black hover:bg-white transition-all duration-700 hover:scale-125 cursor-pointer" />
        </a>
      </div>
    </motion.nav>
  );
}

export default NavBar;
