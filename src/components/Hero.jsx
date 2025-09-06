import { Github, Linkedin, Mail } from "lucide-react";
import './Hero.css';
import { motion } from "framer-motion"; // optional for animation

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-gray-200 dark:bg-gray-900 transition-colors duration-500">
      {/* LEFT SIDE */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-start px-10 md:px-16 py-12 space-y-4">
        <motion.h3 
          className="text-xl text-gray-800 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I am
        </motion.h3>

        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ajay Singh
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full-Stack Developer / UI Designer
        </motion.p>

        {/* Social Links */}
        <motion.div 
          className="flex space-x-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="mailto:ajaykrsingh2002@gmail.com"
            className="p-3 bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-transform transform hover:scale-110 rounded-lg"
          >
            <Mail size={24} className="text-gray-800 dark:text-white" />
          </a>
          <a
            href="https://github.com/ajaykrsingh7"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-transform transform hover:scale-110 rounded-lg"
          >
            <Github size={24} className="text-gray-800 dark:text-white" />
          </a>
          <a
            href="https://linkedin.com/in/ajaykrsingh07"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-transform transform hover:scale-110 rounded-lg"
          >
            <Linkedin size={24} className="text-gray-800 dark:text-white" />
          </a>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:w-1/2 w-full relative overflow-hidden flex justify-end items-center">
        {/* Slanted Background */}
        <div className="slanted-bg absolute top-0 right-0 bottom-0 left-0  w-full h-full"></div>

        {/* Image */}
        <motion.img
          src="/my-photo.png"
          alt="Ajay Singh"
          className="relative z-10 object-contain max-h-[90%]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </section>
  );
};

export default Hero;
