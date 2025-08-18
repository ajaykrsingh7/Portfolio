// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import LogoImg from "../assets/download.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Check system preference on first load
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      if (!prev) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", !prev ? "dark" : "light");
      return !prev;
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors ">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-normal bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text hero-name whitespace-nowrap">AJ'S Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700 dark:text-gray-200 text-2xl">
          <li><a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">Home</a></li>
          <li><a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">About</a></li>
          <li><a href="#education" className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">Education</a></li>
          <li><a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">Contact</a></li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3 text-xl">
          {/* Hire Me (desktop) */}
          <a
            href="#contact"
            className="hidden md:block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer"
          >
            Hire Me
          </a>

          {/* Resume Download (desktop) */}
          <a
            href="/resume.pdf"
            download="Ajay-Kumar-Singh-Resume.pdf"
            className="hidden md:block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
          >
            Resume
          </a>


          {/* Dark mode toggle */}
          {/* <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition cursor-pointer"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
          </button> */}

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <X
                className="w-7 h-7 text-gray-700 dark:text-gray-200 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <Menu
                className="w-7 h-7 text-gray-700 dark:text-gray-200 cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6 font-medium text-gray-700 dark:text-gray-200">
            <li><a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">About</a></li>
            <li><a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">Skills</a></li>
            <li><a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">Contact</a></li>

            {/* Hire Me (mobile) */}
            <a
              href="#contact"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer"
            >
              Hire Me
            </a>

            {/* Resume Download (mobile) */}
            <a
              href="/resume.pdf"
              download="Ajay-Kumar-Singh-Resume.pdf"
              className=" bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
            >
              Resume
            </a>


            {/* Dark Mode Toggle (mobile) */}
            {/* <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
            </button> */}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
