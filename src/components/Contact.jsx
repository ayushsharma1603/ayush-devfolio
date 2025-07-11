import { useRef, useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const formVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = formRef.current.from_email.value;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="m-10 lg:mt-20 lg:pt-20 md:m-20 border-t border-stone-900 pb-20 flex flex-col lg:flex-row lg:items-center gap-10">
      <div className="w-full lg:w-1/2 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl my-10"
        >
          Get In Touch
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tracking-tight"
        >
          <p className="my-4 text-stone-400">{CONTACT.phoneNo}</p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="border-b text-stone-300 hover:text-white"
          >
            {CONTACT.email}
          </a>
        </motion.div>
      </div>

      <div className="w-full lg:w-1/2">
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 max-w-xl mx-auto px-4 flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          variants={formVariants}
          viewport={{ once: true }}
        >
          <motion.input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="bg-stone-900 border border-stone-700 rounded px-4 py-3 text-white focus:outline-none focus:border-stone-500"
            variants={inputVariants}
            required
          />
          <motion.input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="bg-stone-900 border border-stone-700 rounded px-4 py-3 text-white focus:outline-none focus:border-stone-500"
            variants={inputVariants}
            required
          />
          {emailError && (
            <span className="text-red-500 text-sm -mt-4">{emailError}</span>
          )}
          <motion.textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            className="bg-stone-900 border border-stone-700 rounded px-4 py-3 text-white focus:outline-none focus:border-stone-500 resize-none"
            variants={inputVariants}
            required
          ></motion.textarea>
          <motion.button
            type="submit"
            className="bg-stone-300 text-stone-900 font-semibold rounded px-6 py-3 hover:bg-white transition duration-300"
            variants={inputVariants}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
