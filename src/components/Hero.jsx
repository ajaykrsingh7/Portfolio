import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ProfilePic from "../assets/profile.jpg";

export default function Hero() {
  const fullText = "Hi, I'm Ajay Kumar Singh";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = 120; 
    let timeout;

    if (!isDeleting && index < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, speed);
    } else if (!isDeleting && index === fullText.length) {
      // pause after full text
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex(index - 1);
      }, speed);
    } else if (isDeleting && index === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullText]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between text-center md:text-left px-6 gap-8 pt-20"
    >
      {/* Left: Intro Text */}
      <div className="flex-1">
        {/* Typewriter Effect */}
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-normal bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text hero-name whitespace-nowrap">
          {displayedText}
           
          <span className="animate-pulse">|</span>
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-xl sm:text-2xl text-gray-700 dark:text-gray-300"
        >
          <div className="text-2xl">
            Full Stack Developer(MERN) | AI & Cloud Enthusiast
          </div>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 max-w-2xl text-gray-600 dark:text-gray-400"
        >
          <div className="text-xl">
            I build modern, scalable web apps with React, Node.js, and AI
          integration. Passionate about creating projects that merge innovation
          with functionality.
          </div>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition cursor-pointer"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Right: Profile Image */}
      <motion.div
        initial={{ y: 0, scale: 1 }}
        animate={{
          y: [0, -20, 0, 20, 0],
          scale: [0.98, 1, 0.98, 1, 0.98],
        }}
        transition={{
          delay: 0.5,
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex-1 flex justify-center md:justify-center"
      >
        <motion.img
          src={ProfilePic}
          alt="Ajay Kumar Singh"
          className="w-[450.5px] h-[500px] object-cover border-4 border-indigo-500 dark:border-indigo-400 shadow-lg rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[0] rounded-br-[0]"
        />
      </motion.div>
    </section>
  );
}
