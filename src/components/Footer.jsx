import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="h-screen lg:h-1/2 lg:pt-30 flex flex-col relative justify-evenly lg:justify-between">
      {/* Contact Section */}
      <section id="contact" className="lg:w-3/4 py-20 relative border-t-2 border-stone-600 self-center">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r text-left from-stone-300 to-stone-700 bg-clip-text text-transparent">
              Let's Create Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing!
          </p>

          <div className="flex justify-center space-x-6">
            {/* Contact Button */}
            <Link to="/contact">
              <button className="inline-flex text-nowrap items-center justify-center gap-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 h-11 rounded-md lg:px-8 px-2 bg-gradient-to-r from-stone-300 to-stone-700 text-black hover:from-stone-700 hover:to-stone-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail w-5 h-5 mr-2"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>Get In Touch</span>
              </button>
            </Link>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/ayush-sharma1603123/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex items-center justify-center gap-2 text-sm font-medium border h-11 rounded-md px-8 border-stone-400 text-stone-400 hover:bg-stone-400 hover:text-black bg-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin w-5 h-5 mr-2"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 lg:relative absolute bottom-0 self-center w-full text-gray-400 px-6 py-3 mt-20 border-t border-neutral-800">
        <div className="flex justify-center items-center">
          <p className="text-m text-center">
            &copy; {new Date().getFullYear()} Ayush Sharma. Crafted with ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}
