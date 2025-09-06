import { useState, useEffect } from "react";
import { Sun, Moon, Code } from "lucide-react"; // Added Code icon
import { FiMail } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-6xl mx-auto py-2 flex justify-between items-center px-4 md:px-6">

        {/* Logo with icon */}
        <div className="flex items-center gap-2 text-3xl font-bold text-black dark:text-white">
          <Code size={35} className="text-black dark:text-indigo-400" />
          AJAY
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center font-medium">
            <li>
              <a href="#about" className="text-white dark:text-gray-300 hover:text-indigo-500 px-3">About</a>
            </li>
            <li>
              <a href="#skills" className="text-white dark:text-gray-300 hover:text-indigo-500 px-3">Skills</a>
            </li>
            <li>
              <a href="#projects" className="text-white dark:text-gray-300 hover:text-indigo-500 px-3">Projects</a>
            </li>
            <li>
              <a href="#education" className="text-white dark:text-gray-300 hover:text-indigo-500 px-3">Education</a>
            </li>
            <li className="ml-4">
              <a
                href="#contact"
                className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-600"
              >
                <FiMail size={18} /> Contact Me
              </a>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-800" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black dark:text-white ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black dark:bg-gray-900 text-white px-6 py-4 space-y-4">
          <a href="#about" className="block hover:text-indigo-500">About</a>
          <a href="#skills" className="block hover:text-indigo-500">Skills</a>
          <a href="#projects" className="block hover:text-indigo-500">Projects</a>
          <a href="#education" className="block hover:text-indigo-500">Education</a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-white text-black dark:bg-indigo-500 dark:text-white  rounded-full hover:bg-gray-200 dark:hover:bg-indigo-600"
          >
            <FiMail size={18} /> Contact Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
