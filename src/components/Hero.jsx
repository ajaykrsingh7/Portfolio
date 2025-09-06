import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react"; // ✅ Import Lottie
import animationData from "../assets/hero.json"; // ✅ Import animation JSON
import './Hero.css';


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 transition-colors duration-500">

      {/* LEFT SIDE */}
      <div className="lg:w-5/12 w-full flex flex-col justify-center items-start px-6 lg:px-16 py-12 space-y-4">
        <motion.h3
          className="text-lg md:text-xl text-gray-800 dark:text-gray-300 font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I am
        </motion.h3>

        <motion.h1
          className="text-5xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ajay Kumar Singh
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-lg text-gray-600 dark:text-gray-400 max-w-full md:max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typewriter
            words={["Full-Stack Developer (MERN)", "Software Developer", "UI/UX Designer", "AI/ML Enthusiast"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={70}
            delaySpeed={1000}
          />
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="mailto:ajaykrsingh2002@gmail.com" className="p-3 bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-transform transform hover:scale-110 rounded-lg">
            <Mail size={24} className="text-gray-800 dark:text-white" />
          </a>
          <a href="https://github.com/ajaykrsingh7" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-transform transform hover:scale-110 rounded-lg">
            <Github size={24} className="text-gray-800 dark:text-white" />
          </a>
          <a href="https://linkedin.com/in/ajaykrsingh07" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-transform transform hover:scale-110 rounded-lg">
            <Linkedin size={24} className="text-gray-800 dark:text-white" />
          </a>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-7/12 w-full relative overflow-hidden flex justify-center items-center mt-8 lg:mt-0">

        {/* Slanted Background */}
        <div className="slanted-bg absolute top-0 right-0 bottom-0 left-0 w-full h-full"></div>

        {/* ✅ Lottie Animation Instead of Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 w-full  max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] lg:max-h-[90vh]"
        >
          <Lottie animationData={animationData} loop={true} />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
