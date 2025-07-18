import { motion } from "framer-motion";
import Contact from "../components/Contact";
import CursorFollower from "../components/Cursor";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const ContactP = () => {
  return (
    <div className="overflow-x-hidden text h-screen text-stone-300 antialiased">
      {/* Background Grid and Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" />
        </div>
      </div>

      <div className="container mx-auto lg:px-20 px-7 text-center">
        <CursorFollower />

        {/* Header */}
        <motion.div
          className="w-full h-auto py-6 flex flex-col md:flex-row justify-between items-center text-stone-400 gap-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Logo + Home Button (Mobile) */}
          <div className="flex w-full md:w-auto justify-between items-center">
            <Link to="/">
              <img
                className="rounded-full p-2 transition-all duration-600 h-20 md:h-24"
                src={logo}
                alt="Logo"
              />
            </Link>

            <Link to="/">
              <button className="md:hidden px-6 py-2 text-lg transition-all duration-500 hover:scale-105 hover:text-black hover:bg-stone-200 bg-gradient-to-r from-stone-400 via-stone-600 to-black hover:from-black hover:via-stone-600 hover:to-stone-400 rounded border border-stone-500">
                Home
              </button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-gray-300">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail w-4 h-4 mr-2"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>ayushsharmapro18@gmail.com</span>
            </div>
          </div>

          {/* Home Button (Desktop) */}
          <Link to="/">
            <button className="hidden md:inline-block px-6 py-2 text-lg transition-all duration-500 hover:scale-105 hover:text-black hover:bg-stone-200 bg-gradient-to-r from-stone-400 via-stone-600 to-black hover:from-black hover:via-stone-600 hover:to-stone-400 rounded border border-stone-500">
              Home
            </button>
          </Link>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          <Contact key={Date.now()} />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactP;
