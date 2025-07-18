import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CursorFollower from "../components/Cursor";

export default function NotFound() {
  return (
    <div>
      <CursorFollower/>
          <div className="h-screen w-screen flex items-center justify-center bg-neutral-950 text-white px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-stone-600 via-stone-400 to-stone-100">
          404
        </h1>
        <p className="text-xl mt-2 text-gray-300">Oops! Page not found.</p>
        <p className="text-sm mt-1 text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 rounded-full bg-white text-neutral-900 font-semibold hover:bg-stone-600 hover:text-stone-200 transition duration-500"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
    </div>

  );
}
