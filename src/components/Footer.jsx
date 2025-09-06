import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Lottie from "lottie-react";
import codeAnimation from "../assets/footer.json"; // animation file

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-8">

        {/* Logo with Icon and Animation */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-3xl font-bold text-indigo-600 dark:text-indigo-400">
           
        
          </div>
          <div className="w-60 h-50">
            <Lottie animationData={codeAnimation} loop={true} />
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-4">
            <ul className="flex flex-col gap-2">
              <li><a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">About</a></li>
              <li><a href="#education" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Education</a></li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li><a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Skills</a></li>
              <li><a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Connect With Me */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <FaGithub size={20} />
              <a href="https://github.com/ajaykrsingh7" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                GitHub
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <FaLinkedin size={20} />
              <a href="https://www.linkedin.com/in/ajaykrsingh07/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <FaTwitter size={20} />
              <a href="https://twitter.com/iamAjaykrsingh7" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                Twitter
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <p className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Ajay Kumar Singh. All rights reserved.
      </p>
    </footer>
  );
}
