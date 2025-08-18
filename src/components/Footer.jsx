import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import LogoImg from "../assets/download.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">

        <div>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-normal bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text hero-name whitespace-nowrap">Ajay's </h1>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-normal bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text hero-name whitespace-nowrap">Portfolio </h1>

        </div>

        {/* Quick Links */}
       <div className="flex gap-3 flex-col justify-center item-center">
        <h3 className="text-2xl font-bold text-gray-100 dark:text-gray-100 mb-4 mt-4  text-gray-700 text-center mr-8">Direct Links</h3>
          <div className="flex gap-6">
             <ul className="flex gap-6 font-medium text-2xl flex-col">
          <li>
            <a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#edcation" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              Education
            </a>
          </li>
        </ul>
        <div className="flex gap-6">
          <ul className="flex gap-6 font-medium text-2xl flex-col">
            <li>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              Skills
            </a>
          </li>
           <li>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              Contact
            </a>
          </li>
        </ul>
        </div>
          </div>
        
       </div>

        {/* Social Icons */}
        <div className="flex gap-4 flex-col ">
          <h3 className="text-2xl font-bold text-gray-100 dark:text-gray-100 mb-4 mt-4  text-gray-700">
            Connect With Me
          </h3>
          <div className="flex flex-col space-y-6 text-2xl">

            <a href="https://github.com/ajaykrsingh7" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-800 dark:text-gray-100 hover:text-gray-600">
              <FaGithub size={24} />
              
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/ajaykrsingh07/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-800 dark:text-gray-100 hover:text-gray-600">
              <FaLinkedin size={24} />
             
              <span>LinkedIn</span>
            </a>
            <a href="https://twitter.com/iamAjaykrsingh7" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-800 dark:text-gray-100 hover:text-gray-600">
              <FaTwitter size={24} />
             
              <span>Twitter</span>
            </a>

          </div>
        </div>

      </div>

      {/* Copyright */}
      <p className="mt-6 text-center text-xl text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Ajay Kumar Singh. All rights reserved.
      </p>
    </footer>
  );
}
