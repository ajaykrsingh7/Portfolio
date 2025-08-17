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
        <ul className="flex gap-6 font-medium text-2xl">
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

        {/* Social Icons */}
        <div className="flex gap-4 ">
          <a href="https://github.com/ajaykrsingh7" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition ">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ajaykrsingh07/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/iamAjaykrsingh7" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
            <FaTwitter size={24} />
          </a>
        </div>

      </div>

      {/* Copyright */}
      <p className="mt-6 text-center text-xl text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Ajay Kumar Singh. All rights reserved.
      </p>
    </footer>
  );
}
